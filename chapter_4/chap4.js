var console;


var prompt;
var input = prompt('Please enter a number: ');
if (input === '0') {
    console.log('Hello');
    console.log('You entered: ' + input);
} else if (input > 0) {
    console.log('You entered the positive number: ' + input);
} else if (input < 0) {
    console.log('You entered the negative number: ' + input);
} else {
    console.log('You did not enter a number');
}

//Ternary Operator

var num1;
var input2 = prompt('Please enter a letter: ');

num1 = (input2 == 'A' ? 12 : 13);
console.log(num1);