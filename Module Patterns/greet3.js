
function Greetr(){
    this.greeting = 'Hello world -- GREETR';
    
    this.greet = function (){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();