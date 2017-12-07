'use strict';




var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor(){
        super();
        this.gretting = 'Hello world!';

    }
    greet (data){
        console.log( `${this.gretting} : ${data}`);
        this.emit('greet', data);
    }
}

// function Greetr() {
//     EventEmitter.call(this);
//     this.gretting = 'Hello world!';
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function (data) {
//     console.log(this.gretting + ': ' + data);
//     this.emit('greet', data);
// }

var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
    console.log('someone greeted! : ' + data);
});

greeter1.greet('Tony');
