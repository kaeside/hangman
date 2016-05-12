var React = require('react');
var ReactDOM = require('react-dom');


//Post

//Hangman Part Components


    //Head

    //Arm 1

    // Arm 2

    // Leg 1

    // Leg 2

    // Body


var Post = function() {
    var view =
    `     0000000000000
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
     0
`
.replace(/ /g, '\u00a0');
    return (
        <div>
            <pre>{view}</pre>
        
        </div>
)};
/*
var Head =
    `0000000000000
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
     0
`

var body =
    `0000000000000
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
     0
`

var leftArm =
    `0000000000000
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
     0
`

var rightArm =
    `0000000000000
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
     0
`

var leftLeg =
    `0000000000000
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
     0
`

var x_X =
    `0000000000000
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
     0
`
*/

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Post />, document.getElementById('app'));
});
