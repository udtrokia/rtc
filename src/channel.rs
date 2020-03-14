//! Channels.
use crate::peer::Peer;

/// channel
pub struct Channel {
    /// channel name
    pub name: String,
    /// WebRTC peers
    pub peers: Vec<Peer>,
}
