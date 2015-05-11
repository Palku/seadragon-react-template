var SocketIO = require('socket.io');
var io = SocketIO(7000);
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('a user disconnected');
    });
});
    