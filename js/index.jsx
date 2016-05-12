var React = require('react');
var ReactDOM = require('react-dom');

var HangmanCharlie = React.createClass({
    getInitialState: function() {
        return {
            title: 'Don\'t Kill Charlie!!',
            stage: 0

        };
    },
    render: function() {
        return (<div><Post /></div>);
    }
});

var Post = function() {
    var view = `
  0000000000000
  0           0
  0
  0
  0
  0
  0
  0
  0
  0
  0
  0
  0
  0
  0
  0`.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>

        </div>
    )
};

var Head = function() {
    var view = `
  0000000000000
  0           0
  0           1
  0          1 1
  0           1
  0
  0
  0
  0
  0
  0
  0
  0
  0
  0
  0`.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>

        </div>
    )
};

var Body = function() {
    var view = `
  0000000000000
  0           0
  0           1
  0          1 1
  0           1
  0           2
  0           2
  0           2
  0
  0
  0
  0
  0
  0
  0
  0`.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>

        </div>
    )
};

var LeftArm = function() {
    var view = `
  0000000000000
  0           0
  0           1
  0          1 1
  0           1
  0         3 2
  0        3  2
  0       3   2
  0
  0
  0
  0
  0
  0
  0
  0`.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>

        </div>
    )
};

var RightArm = function() {
    var view = `
  0000000000000
  0           0
  0           1
  0          1 1
  0           1
  0         3 2 4
  0        3  2  4
  0       3   2   4
  0
  0
  0
  0
  0
  0
  0
  0`.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>

        </div>
    )
};

var LeftLeg = function() {
    var view = `
  0000000000000
  0           0
  0           1
  0          1 1
  0           1
  0         3 2 4
  0        3  2  4
  0       3   2   4
  0          5
  0         5
  0        5
  0       5
  0
  0
  0
  0`.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>

        </div>
    )
};

var X_X = function() {
    var view = `
  0000000000000
  0           0
  0           1
  0          1 1
  0           1
  0         3 2 4
  0        3  2  4
  0       3   2   4
  0          5 6
  0         5   6
  0        5     6
  0       5       6
  0
  0
  0
  0`.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>

        </div>
    )
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <HangmanCharlie />, document.getElementById('app'));
});
