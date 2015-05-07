var React = require('react');
var helloRT = require('./testTemplate.rt');

module.exports = React.createClass({
    render: function () {
        return helloRT.apply(this);
    }
});