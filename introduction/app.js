var obj = {
    greet : 'Hello'
}

console.log(obj.greet);


console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

// about functions and arrays

var arr = [];
arr.push(function ( ) {
    console.log('hello world 1');
});

arr.push(function ( ) {
    console.log('hello world 2');
});

arr.push(function ( ) {
    console.log('hello world 3');
});

arr.forEach(element => {
    element();    
});