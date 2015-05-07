/// <reference path="./typings/node/node.d.ts"/>
/// <reference path="./typings/mongodb/mongodb.d.ts"/>
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

import MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var assert = require('assert');

if (dev) {
  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

// Webserver
app.use(express.static(publicPath));
app.listen(port, function() {
  console.log('Server running on port ' + port);
});

//MongoDB
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});