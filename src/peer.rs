//! peers
/// peer status
pub enum Status {
    Connected,
    Disconnected,
}

/// WebRTC Peers
pub struct Peer {
    /// pk
    pub pk: String,
    /// status
    pub status: Status,
}
