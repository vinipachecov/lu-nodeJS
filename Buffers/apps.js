
var buf = new Buffer('My name is Batman.... not!', 'utf8');

console.log(buf);
console.log(buf.toJSON());
console.log(buf.toString());

buf.write('wololo');

console.log(buf);
console.log(buf.toJSON());
console.log(buf.toString());

