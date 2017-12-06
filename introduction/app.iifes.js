
//  IIFES - immeadiately invoked function expression
var firstname = 'Jane';

(function (lastname){
    var firstname = 'John';

    console.log(`${firstname} ${lastname}`);
})('Bird');


// because of iife private scope  here will be printed 'jane' instead of 'john'.
console.log(firstname);