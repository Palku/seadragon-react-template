/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/mongodb/mongodb.d.ts"/>
/// <reference path="../../typings/socket.io/socket.io.d.ts"/>

import SocketIO = require('socket.io');
var io = SocketIO(7000);

//Socket.IO
io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });
});

module.exports = {
  status: function() { return "Data transfer loaded : OK"; }
};
