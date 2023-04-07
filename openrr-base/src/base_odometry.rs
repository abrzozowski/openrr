use arci::{BaseVelocity, Isometry2, Vector2};
use parking_lot::Mutex;

#[derive(Debug)]
pub struct BaseOdometry {
    position: Mutex<Isometry2<f64>>,
    last_update_timestamp: std::time::Instant,
}

impl BaseOdometry {
    pub fn translate(&self, velocity: &BaseVelocity) {
        let mut pose = self.position.lock();
        let x = pose.to_owned().translation.x;
        let y = pose.to_owned().translation.y;
        let theta = pose.to_owned().rotation.angle();
        let delta = self.last_update_timestamp.elapsed().as_secs_f64();

        *pose = Isometry2::new(
            Vector2::new(x + velocity.x * delta, y + velocity.y * delta),
            theta + velocity.theta * delta,
        );
    }

    pub fn current_pose(&self) -> Isometry2<f64> {
        self.position.lock().to_owned()
    }
}

impl Default for BaseOdometry {
    fn default() -> Self {
        Self {
            position: Default::default(),
            last_update_timestamp: std::time::Instant::now(),
        }
    }
}
