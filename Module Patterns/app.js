/*jslint node: true*/

var greet = require('./greet1');

// gives us hello world
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';


var greet3b = require('./greet3');
greet3.greet();


var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();