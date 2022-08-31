var console;

function printWelcome(userName) {
    "use strict";
    console.log('Hello ' + userName);
}

function addNumbers(num1, num2) {
    "use strict";
    console.log(num1 + num2);
}

printWelcome('JJ');

addNumbers(4, 4);


var var1 = "var1: declared outside myFunc";
var var2 = "var2: declared OUTSIDE myFunc";

function myFunc() {

    var var2 = "var2: declared INSIDE myFunc";
    var var3 = "var3: declared inside myFunc";
    var var4 = "var4: declared inside myFunc";
    console.log("Inside myFunc");
    console.log(var1);
    console.log(var2);
    console.log(var3);
    console.log(var4);

}



myFunc();

(function simpleFunc() {
    console.log('Just a simple function')
})();