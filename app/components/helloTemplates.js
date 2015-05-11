var React = require('react');
var helloRT = require('./helloTemplates.rt');

module.exports = React.createClass({
    render: function () {
        return helloRT.apply(this);
    }
});

