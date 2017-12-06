/*jslint node: true*/


var greet = function(){
    console.log('My first app');    
}

// by exporting, other module can use the functions inside this module instead of just running it.
module.exports = greet;