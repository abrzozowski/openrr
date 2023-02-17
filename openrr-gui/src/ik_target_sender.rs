use std::{path::Path, sync::Arc};

use arci::JointTrajectoryClient;
use eframe::{
    egui,
    epaint::ahash::{HashMap, HashMapExt},
};
use k::{nalgebra as na, Constraints, JacobianIkSolver};
use openrr_client::{IkClient, IkSolverWithChain, PrintSpeaker, RobotClient};
use urdf_viz::{kiss3d::window::Window, Action, Key, Modifiers, Viewer, WindowEvent};

const HOW_TO_USE_STR: &str = r#"[Up/Down/Left/Right/f/b]: Translate IK target
[Shift] + [Up/Down/Left/Right/f/b]: Rotate IK target
[g]: Move the end of the arm to the target
[e]: Set target to eef pose
[i]: Set target to initial pose
"#;
const FONT_SIZE: f32 = 60.0;
const TEXT_POSE: (f32, f32) = (5.0, 5.0);
const TEXT_COLOR: (f32, f32, f32) = (1.0, 1.0, 1.0);

const TRANSLATION_ACTUATING_VALUE: f64 = 0.05;
const ROTATION_ACTUATING_VALUE: f64 = 0.2;

const AXIS_CYLINDER_SIZE: f32 = 0.3;

#[cfg(not(target_family = "wasm"))]
pub fn ik_target_sender<J>(
    joint_trajectory_client: J,
    urdf_path: &'static Path,
    end_link_name: &'static str,
) -> Result<(), crate::Error>
where
    J: JointTrajectoryClient + 'static,
{
    let native_options = eframe::NativeOptions {
        max_window_size: Some(egui::vec2(400.0, 400.0)),
        ..eframe::NativeOptions::default()
    };

    eframe::run_native(
        "IK Target Sender",
        native_options,
        Box::new(|_cc| {
            Box::new(IkTargetSender::new(
                joint_trajectory_client,
                urdf_path,
                end_link_name,
            ))
        }),
    )
    .map_err(|e| crate::Error::Other(e.to_string()))?;

    Ok(())
}

struct IkTargetSender<J>
where
    J: JointTrajectoryClient + 'static,
{
    ik_target_pose: na::Isometry3<f64>,
    init_ik_target_pose: na::Isometry3<f64>,
    viewer: Viewer,
    window: Window,
    end_link_name: String,
    reference_robot: Arc<k::Chain<f64>>,
    ik_client: IkClient<J>,
}

impl<J> IkTargetSender<J>
where
    J: JointTrajectoryClient + 'static,
{
    fn new(client: J, urdf_path: &Path, end_link_name: &str) -> Self {
        let reference_robot = Arc::new(k::Chain::from_urdf_file(urdf_path).unwrap());

        let (mut viewer, mut window) = urdf_viz::Viewer::new("OpenRR Apps Arm");
        let urdf_robot = urdf_rs::utils::read_urdf_or_xacro(urdf_path).unwrap();

        viewer.add_robot_with_base_dir(
            &mut window,
            &urdf_robot,
            urdf_path.parent(),
            &Default::default(),
        );

        let arm = k::SerialChain::from_end(reference_robot.find(end_link_name).unwrap());
        let end_link_name = end_link_name.to_string();

        viewer.add_axis_cylinders(&mut window, "origin", AXIS_CYLINDER_SIZE);
        viewer.add_axis_cylinders(&mut window, "ik_target", AXIS_CYLINDER_SIZE);

        let ik_target_pose = arm.end_transform();
        let init_ik_target_pose = ik_target_pose;

        let ik_solver = JacobianIkSolver::new(0.001, 0.005, 0.2, 100);

        let ik_solver_with_chain =
            IkSolverWithChain::new(arm, Arc::new(ik_solver), Constraints::default());

        let ik_client = IkClient::new(client, Arc::new(ik_solver_with_chain));

        Self {
            ik_target_pose,
            init_ik_target_pose,
            viewer,
            window,
            end_link_name,
            reference_robot,
            ik_client,
        }
    }

    fn update_viewer(&mut self) {
        let robot = &self.reference_robot;
        let ja = robot.joint_positions();
        robot.set_joint_positions_clamped(&ja);
        robot.update_transforms();
        self.viewer.update(robot);
    }

    fn update_ik_target(&mut self) {
        if let Some(obj) = self.viewer.scene_node_mut("ik_target") {
            obj.set_local_transformation(na::convert(self.ik_target_pose));
        }
    }

    fn run_default_viewer_task(&mut self) {
        self.viewer.draw_text(
            &mut self.window,
            HOW_TO_USE_STR,
            FONT_SIZE,
            &na::Point2::new(TEXT_POSE.0, TEXT_POSE.1),
            &na::Point3::new(TEXT_COLOR.0, TEXT_COLOR.1, TEXT_COLOR.2),
        );
    }

    fn set_ik_target_to_eef(&mut self) {
        self.ik_target_pose = self.ik_client.current_end_transform().unwrap();
        self.update_ik_target();
    }

    fn set_ik_target_to_init(&mut self) {
        self.ik_target_pose = self.init_ik_target_pose;
        self.update_ik_target();
    }

    pub fn run(&mut self) {
        self.update_viewer();
        self.update_ik_target();
        let mut plans: Vec<Vec<f64>> = Vec::new();

        while self.window.render_with_camera(&mut self.viewer.arc_ball) {
            self.run_default_viewer_task();
            if !plans.is_empty() {
                let positions = &plans.pop().unwrap();
                self.ik_client.set_joint_positions_clamped(positions);
                self.update_viewer();
                let _wf = self
                    .ik_client
                    .send_joint_positions(positions.clone(), std::time::Duration::from_millis(100))
                    .unwrap();
            }
            std::thread::sleep(std::time::Duration::from_millis(10));
        }
    }
}

impl<J> eframe::App for IkTargetSender<J>
where
    J: JointTrajectoryClient + 'static,
{
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        egui::CentralPanel::default().show(ctx, |ui| {
            ui.heading("Dummy");
        });
    }
}
