use arci_gamepad_gilrs::GilGamepad;
use openrr_apps::{Error, RobotConfig, RobotTeleopConfig};
use openrr_client::ArcRobotClient;
use openrr_teleop::ControlNodeSwitcher;
#[cfg(feature = "ros")]
use rosrust::{is_ok, rate};
#[cfg(feature = "ros")]
use std::thread;
use std::{path::PathBuf, sync::Arc};
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
#[structopt(
    name = env!("CARGO_BIN_NAME"),
    about = "An openrr teleoperation tool."
)]
pub struct RobotTeleopArgs {
    #[structopt(short, long, parse(from_os_str))]
    config_path: PathBuf,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    env_logger::init();
    let args = RobotTeleopArgs::from_args();

    let teleop_config = RobotTeleopConfig::try_new(args.config_path)?;
    let robot_config =
        RobotConfig::try_new(teleop_config.robot_config_full_path().as_ref().unwrap())?;
    #[cfg(feature = "ros")]
    let use_ros = robot_config.has_ros_clients();
    #[cfg(feature = "ros")]
    if use_ros {
        arci_ros::init(env!("CARGO_BIN_NAME"));
    }
    let client: Arc<ArcRobotClient> = Arc::new(robot_config.create_robot_client()?);

    let nodes = teleop_config.control_nodes_config.create_control_nodes(
        client.clone(),
        client.joint_trajectory_clients(),
        client.ik_solvers(),
        Some(client.clone()),
        robot_config.openrr_clients_config.joints_poses,
    );
    if nodes.is_empty() {
        panic!("No valid nodes");
    }

    let switcher = Arc::new(ControlNodeSwitcher::new(nodes, client.clone()));
    #[cfg(feature = "ros")]
    if use_ros {
        let switcher_cloned = switcher.clone();
        thread::spawn(move || {
            let rate = rate(1.0);
            while is_ok() {
                rate.sleep();
            }
            switcher_cloned.stop();
        });
    }
    switcher
        .main(GilGamepad::new_from_config(
            teleop_config.gil_gamepad_config,
        ))
        .await;

    Ok(())
}
