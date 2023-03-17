use auto_impl::auto_impl;
use nalgebra::Vector3;

use crate::error::Error;

#[derive(Clone, Debug, Default)]
pub struct Scan2D {
    pub angle_min: f64,
    pub angle_max: f64,
    pub angle_increment: f64,
    pub time_increment: f64,
    pub scan_time: f64,
    pub range_min: f64,
    pub range_max: f64,
    pub ranges: Vec<f64>,
    pub intensities: Vec<f64>,
}

impl Scan2D {
    pub fn new() -> Self {
        todo!()
    }
}

#[derive(Clone, Debug, Default)]
pub struct PointCloud {
    pub field: PointCloudField,
    pub points: Vec<Vector3<f64>>,
    pub colors: Vec<Vector3<f64>>,
}

impl PointCloud {
    pub fn new() -> Self {
        todo!()
    }
}

impl From<PointCloud> for Scan2D {
    fn from(_: PointCloud) -> Self {
        todo!()
    }
}

impl From<Scan2D> for PointCloud {
    fn from(_: Scan2D) -> Self {
        todo!()
    }
}

#[derive(Clone, Debug, Default)]
pub enum PointCloudField {
    #[default]
    Xyz,
    XyzColors,
    XyzSurfaceNormals,
}

#[auto_impl(Box, Arc)]
pub trait LaserScan2D: Send + Sync {
    fn current_scan(&self) -> Result<Scan2D, Error>;
}

#[auto_impl(Box, Arc)]
pub trait LaserScan3D: Send + Sync {
    fn current_scan(&self) -> Result<PointCloud, Error>;
}
