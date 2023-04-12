pub(crate) const COST_LETHAL: u8 = 254;
pub(crate) const COST_INSCRIBED: u8 = 253;
pub(crate) const COST_POSSIBLY_CIRCUMSCRIBED: u8 = 128;
pub(crate) const COST_LOWEST_NON_FREESPACE: u8 = 1;
pub(crate) const COST_FREESPACE: u8 = 0;

#[derive(Debug, Clone)]
pub struct Costmap2D {
    size: [usize; 2],
    /// (static, obstacle. inflation)
    cells: Vec<(u8, u8, u8)>,
    grid_size: f64,
}

impl Costmap2D {
    pub fn new(size_x: usize, size_y: usize, grid_size: f64) -> Self {
        let cells = vec![(0, 0, 0); size_x * size_y];
        Self {
            size: [size_x, size_y],
            cells,
            grid_size,
        }
    }

    pub fn update(&mut self) {}

    pub fn get_static_map(&self) -> Vec<u8> {
        let mut static_cells = vec![];

        for cell in &self.cells {
            static_cells.push(cell.0);
        }

        static_cells
    }

    pub fn get_obstacle_map(&self) -> Vec<u8> {
        let mut obstacle_cells = vec![];

        for cell in &self.cells {
            obstacle_cells.push(cell.1);
        }

        obstacle_cells
    }

    pub fn get_inflation_map(&self) -> Vec<u8> {
        let mut inflation_cells = vec![];

        for cell in &self.cells {
            inflation_cells.push(cell.2);
        }

        inflation_cells
    }

    pub fn get_range(&self) -> [f64; 2] {
        [
            self.size[0] as f64 * self.grid_size,
            self.size[1] as f64 * self.grid_size,
        ]
    }
}

#[cfg(test)]
mod test {
    use super::*;

    const MAP_SIZE_X: usize = 12;
    const MAP_SIZE_Y: usize = 15;
    const MAP_GRID_SIZE_METER: f64 = 0.5;

    #[test]
    fn test_costmap2d() {
        let costmap2d = Costmap2D::new(MAP_SIZE_X, MAP_SIZE_Y, MAP_GRID_SIZE_METER);
        println!("{:?}", costmap2d);
    }
}
