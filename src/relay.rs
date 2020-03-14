//! Relay Server
use crate::{Channel, Config};

/// main struct
pub struct Relay {
    /// peers
    pub channels: Vec<Channel>,
    /// servie config
    pub config: Config,
}

impl Relay {
    /// start relay service
    pub fn run() {}

    /// sync peers
    fn sync() {}
}
