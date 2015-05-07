/** @jsx React.DOM */
'use strict';
require(__dirname + '/app.css');
var React = require('react');
var HelloTemplates = require('./components/helloTemplates.js');
var io = require('socket.io-client');

io.connect('http://127.0.0.1:7000');
React.render(React.createElement(HelloTemplates), document.getElementById('content'));