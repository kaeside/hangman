var React = require('react');
var ReactDOM = require('react-dom');
var Post = require('./modules.jsx').Post;
var Head = require('./modules.jsx').Head;
var Body = require('./modules.jsx').Body;
var LeftArm = require('./modules.jsx').LeftArm;
var RightArm = require('./modules.jsx').RightArm;
var LeftLeg = require('./modules.jsx').LeftLeg;
var X_X = require('./modules.jsx').X_X;

var stagesOfCharlie = [<Post />, <Head />, <Body />, <LeftArm />, <RightArm />, <LeftLeg />, <X_X />, ];

var HangmanCharlie = React.createClass({
    getInitialState: function() {
        return {
            title: 'Don\'t Kill Charlie!!',
            stage: 0

        };
    },
    onSubmit: function(event) {
        event.preventDefault();
        console.log("die charlie!");
        this.setState({stage: this.state.stage +=1});
    },
    render: function() {

        return (
            <div>
            <div>{stagesOfCharlie[this.state.stage]}</div>
                <div><Buttonne onSubmit={this.onSubmit}/></div>
                </div>
            );
    }
});

var Buttonne = function(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
            <button type="submit">Keel Charlie</button>
            </form>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <HangmanCharlie />, document.getElementById('app'));
});
