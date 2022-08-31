//similar to if statement but uses a variable for switching


// var grade = prompt('Enter your grade: ');
var marks = prompt('Enter your marks: ');
console.log(marks)

switch (true) {
    case marks >= 75:
        console.log('Distinction');
        break;
    case marks >= 65:
        console.log('B Grade');
        break;
    case marks >= 50:
        console.log('C grade');
        break;
    default:
        console.log('Fail');
        break;

}