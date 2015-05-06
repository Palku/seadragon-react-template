var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
}); 
var app = express();
var dev = true;
var port = dev ? 3000 : 80;
var publicPath = path.resolve(__dirname, 'public');


app.use(express.static(publicPath));

if (dev) {

  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
