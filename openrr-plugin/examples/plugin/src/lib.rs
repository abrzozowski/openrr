use std::{sync::Mutex, time::Duration};

use arci::{DummyLocalization, DummyMoveBase, DummyNavigation, Error, TrajectoryPoint, WaitFuture};
use openrr_client::PrintSpeaker;
use openrr_plugin::{
    GamepadProxy, JointTrajectoryClientProxy, LocalizationProxy, MoveBaseProxy, NavigationProxy,
    Plugin, SpeakerProxy,
};
use serde::Deserialize;

openrr_plugin::export_plugin!(MyPlugin);

pub struct MyPlugin;

impl Plugin for MyPlugin {
    fn name(&self) -> String {
        "Example".into()
    }

    fn new_joint_trajectory_client(
        &self,
        args: String,
    ) -> Result<Option<JointTrajectoryClientProxy>, arci::Error> {
        let config: MyClientConfig =
            serde_json::from_str(&args).map_err(|e| arci::Error::Other(e.into()))?;
        let dof = config.joint_names.len();
        Ok(Some(JointTrajectoryClientProxy::new(
            MyJointTrajectoryClient {
                joint_names: config.joint_names,
                joint_positions: Mutex::new(vec![0.0; dof]),
            },
        )))
    }

    fn new_speaker(&self, _args: String) -> Result<Option<SpeakerProxy>, arci::Error> {
        Ok(Some(SpeakerProxy::new(PrintSpeaker::default())))
    }

    fn new_move_base(&self, _args: String) -> Result<Option<MoveBaseProxy>, arci::Error> {
        Ok(Some(MoveBaseProxy::new(DummyMoveBase::default())))
    }

    fn new_navigation(&self, _args: String) -> Result<Option<NavigationProxy>, arci::Error> {
        Ok(Some(NavigationProxy::new(DummyNavigation::default())))
    }

    fn new_localization(&self, _args: String) -> Result<Option<LocalizationProxy>, arci::Error> {
        Ok(Some(LocalizationProxy::new(DummyLocalization::default())))
    }

    #[cfg(unix)]
    fn new_gamepad(&self, _args: String) -> Result<Option<GamepadProxy>, arci::Error> {
        Ok(Some(GamepadProxy::new(
            arci_gamepad_keyboard::KeyboardGamepad::new(),
        )))
    }
}

#[derive(Deserialize)]
struct MyClientConfig {
    joint_names: Vec<String>,
}

struct MyJointTrajectoryClient {
    joint_names: Vec<String>,
    joint_positions: Mutex<Vec<f64>>,
}

impl arci::JointTrajectoryClient for MyJointTrajectoryClient {
    fn joint_names(&self) -> Vec<String> {
        self.joint_names.clone()
    }

    fn current_joint_positions(&self) -> Result<Vec<f64>, Error> {
        Ok(self.joint_positions.lock().unwrap().clone())
    }

    fn send_joint_positions(
        &self,
        positions: Vec<f64>,
        duration: Duration,
    ) -> Result<WaitFuture, Error> {
        println!("positions = {:?}, duration = {:?}", positions, duration);
        *self.joint_positions.lock().unwrap() = positions;
        Ok(WaitFuture::new(async move { async { Ok(()) }.await }))
    }

    fn send_joint_trajectory(
        &self,
        _trajectory: Vec<TrajectoryPoint>,
    ) -> Result<WaitFuture, Error> {
        // panic across the ffi boundary will be converted to abort.
        panic!()
    }
}
