var SocketIO = require('socket.io');

function DataTransfer() {
    this.listen = DataTransfer.listen;
}
DataTransfer.listen = function (port) {
    var io = SocketIO(port);
    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('disconnect', function () {
      console.log('a user disconnected');
        });
    });
};

module.exports = DataTransfer; 
