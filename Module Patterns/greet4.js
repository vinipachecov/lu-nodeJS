
function Greetr(){
    this.greeting = 'Hello world -- GREETR4';
    
    this.greet = function (){
        console.log(this.greeting);
    }
}

module.exports = Greetr;