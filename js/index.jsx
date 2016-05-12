var React = require('react');
var ReactDOM = require('react-dom');
var Post = require('./modules.jsx').Post;
var Head = require('./modules.jsx').Head;
var Body = require('./modules.jsx').Body;
var LeftArm = require('./modules.jsx').LeftArm;
var RightArm = require('./modules.jsx').RightArm;
var LeftLeg = require('./modules.jsx').LeftLeg;
var X_X = require('./modules.jsx').X_X;

var stagesOfCharlie = [< Post />, < Head />, < Body />, < LeftArm />, < RightArm />, < LeftLeg />, < X_X />];

var HangmanCharlie = React.createClass({
    getInitialState: function() {
        return {title: 'Don\'t Kill Charlie!!', stage: 0, gameWord: 'moose'};
    },
    onSubmit: function(event) {
        event.preventDefault();
        var userGuess = this.refs.guessField
        this.setState({
            stage: this.state.stage += 1
        });
        if (this.state.stage === stagesOfCharlie.length) {
            this.setState({stage: 0});
        }
    },
    render: function() {

        return (
            <div>
                <div>{stagesOfCharlie[this.state.stage]}</div>
                <div>
                    <GuessForm onSubmit={this.onSubmit}/>
                </div>
                <div><WordBoard gameWord={this.state.gameWord} /></div>
            </div>
        );
    }
});

var WordBoard = function (props){
        var letterSpaces = "";
    for (var i = 0; i < props.gameWord.length; i+=1) {
        letterSpaces += "_ ";
    }
    letterSpaces.trim();
    return (
        <div>{letterSpaces}</div>
    )
}

var GuessForm = function(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
            <input type="text" ref="guessField"/>
                <button type="submit">Guess</button>
            </form>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <HangmanCharlie/>, document.getElementById('app'));
});
