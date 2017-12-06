

// passing by value
function change(b){
     b = 2;
}

var a  = 1;
change(a);
console.log(a);
// what happens inside change function doesn't impact on variable 'a'

function changeObj(d){
    d.prop1 = function (){};
    d.prop2 = {};
}

var c = {};
c.prop = {};
changeObj(c);
console.log(c);
// when you send an object instead of a primitive, you pass by reference. so that object will have the 
// changes reflected outside the function scope