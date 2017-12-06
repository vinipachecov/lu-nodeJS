/*jslint devel: true*/

// Remeber of javascript 


// // function statement
// function greet(){
//     console.log('hi');
// }


// // functions are first-class
// function logGreeting(fn){
//     fn();
// }
// logGreeting(greet);


// // anonymous function | functino expressino | still first-class, still can pass it as a parameter
// var greetMe = function() {
//     console.log('Hi tony');
// }

// greetMe();



var person = {
    firstName = 'John',
    lastName = 'Doe',
    greet : function(){
        console.log(`Hello my namy is ${firstName} ${lastName}`);
    }
}
person.greet();