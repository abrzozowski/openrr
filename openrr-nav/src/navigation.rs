use arci::{MoveBase, Navigation};

pub struct OpenrrNavigation {}

impl OpenrrNavigation {}

impl Navigation for OpenrrNavigation {
    fn send_goal_pose(
        &self,
        goal: arci::Isometry2<f64>,
        frame_id: &str,
        timeout: std::time::Duration,
    ) -> Result<arci::WaitFuture, arci::Error> {
        todo!()
    }

    fn cancel(&self) -> Result<(), arci::Error> {
        todo!()
    }
}
