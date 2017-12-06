var greetings = require('./greetings.json');

var greet = function () {
    console.log(  greetings.span +  ' -- greet -- spanish module');
}


module.exports = greet;