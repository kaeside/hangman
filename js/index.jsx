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
            stage: 0,
            guesses: '',
            word: 'kilogram',
            example: function(){
                console.log('hello world')
            }
        };
    },

    wordGenerator: function(){
        return(
            word: 'Kilogram'
        )
    },

    onSubmit: function(event) {
        event.preventDefault();
        var guessedLetter = document.getElementById('guess').value;
        console.log(this.state.word);
        this.wordGenerator();
        this.state.example();
        this.setState({guesses: guessedLetter});
        this.setState({stage: this.state.stage +=1});
        if (this.state.stage === stagesOfCharlie.length) {
            this.setState({stage: 0});
        }
    },
    render: function() {

        return (
            <div>
            <div>{stagesOfCharlie[this.state.stage]}</div>
                <div><Buttonne onSubmit={this.onSubmit}/></div>
                <div>{this.state.guessedLetter}</div>
                </div>
            );
    }
});


var Buttonne = function(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
            <input type="text" id='guess' placeholder="Guess a Letter"/>
            <button type="submit">Keel Charlie</button>
            </form>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <HangmanCharlie />, document.getElementById('app'));
});
