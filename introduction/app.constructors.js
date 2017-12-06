
var person = {
    firstName : 'John',
    lastName : 'Doe',
    greet : function(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    }
}
// person.greet();

// function constructor

function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
}

// creation of a method that Person object inherit by the prototype chain
Person.prototype.greeting = function (){
    console.log(`My name is ${this.firstName} ${this.lastName}`);
}

var john = new Person('John', 'Travolta');

// john now has greeting method thanks to prototypal inheritance
john.greeting();

var jane = new Person('Marilyn', 'Monroe');

jane.greeting();

console.log(john.__proto__);
console.log(jane.__proto__);
// check if it is the same prototype
console.log(john.__proto__ === jane.__proto__ );