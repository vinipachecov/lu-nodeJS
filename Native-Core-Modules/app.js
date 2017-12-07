var util = require('util');

var name = 'Tony';

// string formating
var greeting = util.format('Hello, %s', name);
// works similar to console.log
util.log(greeting);
