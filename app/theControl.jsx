/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>
/** @jsx React.DOM */
'use strict'
require(__dirname + '/app.css');
var React = require('react');
React.render(
  <h1>Hello, world</h1>,
  document.getElementById('content')
);
