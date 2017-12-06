

var greeting = 'Hello world - g5';

function greet() {
     console.log(greeting);
}


// with this pattern you can make the variablies hidden, and by this they are getting protected,
// from beign changed

module.exports = {
    greet: greet,    
}