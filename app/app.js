/** @jsx React.DOM */
'use strict';
require(__dirname + '/app.css');
var React = require('react');
var TestTemplate = require('./testTemplate.js');
React.render(React.createElement(TestTemplate), document.getElementById('content'));