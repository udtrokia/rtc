/**************/
/*** CONFIG ***/
/**************/
var PORT = 3000;


/*************/
/*** SETUP ***/
/*************/
var express = require('express');
var http = require('http');
var main = express()
var server = http.createServer(main)
var io = require('socket.io').listen(server);

server.listen(PORT, null, function() {
  console.log("Listening on port " + PORT);
});

main.get('/', function(req, res) { res.sendFile(__dirname + '/client.html'); });


/*************************/
/*** INTERESTING STUFF ***/
/*************************/
var channels = {};
var sockets = {};

io.sockets.on('connection', function(socket) {
  socket.channels = {};
  sockets[socket.id] = socket;
  socket.emit(
    'peerid', {
    'peer_id': socket.id,
    'should_create_offer': true
  });
  console.log("[" + socket.id + "] connected");
  socket.on('disconnect', function() {
    for (var channel in socket.channels) {
      part(channel);
    }
    console.log("[" + socket.id + "] disconnected");
    delete sockets[socket.id];
  });


  socket.on('join', function(config) {
    var channel = config.channel;
    if (channel in socket.channels) {
      return;
    }

    if (!(channel in channels)) {
      channels[channel] = {};
    }

    for (id in channels[channel]) {
      channels[channel][id].emit('addPeer', { 'peer_id': socket.id, 'should_create_offer': false });
      socket.emit('addPeer', { 'peer_id': id, 'should_create_offer': true });
    }

    channels[channel][socket.id] = socket;
    socket.channels[channel] = channel;
  });

  function part(channel) {
    if (!(channel in socket.channels)) {
      return;
    }

    delete socket.channels[channel];
    delete channels[channel][socket.id];

    for (id in channels[channel]) {
      channels[channel][id].emit('removePeer', { 'peer_id': socket.id });
      socket.emit('removePeer', { 'peer_id': id });
    }
  }

  socket.on('relayICECandidate', function(config) {
    var peer_id = config.peer_id;
    var ice_candidate = config.ice_candidate;
    if (peer_id in sockets) {
      sockets[peer_id].emit(
        'iceCandidate', {
        'peer_id': socket.id,
        'ice_candidate': ice_candidate
      });
    }
  });

  socket.on('relaySessionDescription', function(config) {
    var peer_id = config.peer_id;
    var session_description = config.session_description;
    if (peer_id in sockets) {
      sockets[peer_id].emit(
        'sessionDescription', {
        'peer_id': socket.id,
        'session_description': session_description
      });
    }
  });
});
