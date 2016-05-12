var React = require('react');
var ReactDOM = require('react-dom');
var Post = require('./modules.jsx').Post;
var Head = require('./modules.jsx').Head;
var Body = require('./modules.jsx').Body;
var LeftArm = require('./modules.jsx').LeftArm;
var RightArm = require('./modules.jsx').RightArm;
var LeftLeg = require('./modules.jsx').LeftLeg;
var X_X = require('./modules.jsx').X_X;

var stagesOfCharlie = [<Post />, <Head />];

var HangmanCharlie = React.createClass({
    getInitialState: function() {
        return {
            title: 'Don\'t Kill Charlie!!',
            stage: 0

        };
    },
    render: function() {

        return (<div>{stagesOfCharlie[this.state.stage]}</div>);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <HangmanCharlie />, document.getElementById('app'));
});
