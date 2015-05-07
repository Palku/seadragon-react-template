/** @jsx React.DOM */
'use strict';
require(__dirname + '/app.css');
var React = require('react');
var HelloTemplates = require('./components/helloTemplates.js');
React.render(React.createElement(HelloTemplates), document.getElementById('content'));