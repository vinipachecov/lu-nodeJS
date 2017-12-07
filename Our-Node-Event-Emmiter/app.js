var Emmiter = require('./emitter');

var emtr = new Emmiter();

emtr.on('greet', function (){
    console.log('Somewhere, someone said hello ;x');
});

emtr.on('greet', function(){
    console.log('A greeting occurred!');
})

emtr.emit('greet');