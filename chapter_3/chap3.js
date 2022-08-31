// declaring variables  and printing them
//Declaring userAge
var console;

var userAge;
userAge = 20;
console.log(userAge);

//updating a variable

userAge = 33;
console.log(userAge);


// declaring array
var userInfo = [];
userInfo = ['JJ', 11, 1201];

//or
var userInfoTwo = ['Brian', 31, 1323];


//demonstration array to mess with a couple of buil in properties and methods

var demoArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log('demo array = ' + demoArray);

// Array properties

console.log('\n');
console.log(demoArray.length);

demoArray.length = 13;
console.log('\n');
console.log(demoArray.length);
console.log('demo array = ' + demoArray);


// Array methods
//push() - adds element at the end of the array
demoArray.length = 10;
demoArray.push(110);
console.log(demoArray);


//pop() - removes an item from the end of an array and returns that element
console.log('\n Pop');
var my_popped_number = demoArray.pop();
console.log('my popped number :' + my_popped_number);
console.log('demo array = ' + demoArray);
console.log('\n');


//unshift() - -adds an item to the front of the array and returns the new length
console.log('\n Unshift');
var newLength = demoArray.unshift(0);
console.log('\nNew Length = ' + newLength);
console.log('demoAyrray = ' + demoArray);
console.log('\n');

//shift() - removes an item from the front of an array and returns the item
console.log('\n shift');
var theShiftedItem = demoArray.shift();
console.log('the shifted array: ' + theShiftedItem);
console.log(demoArray);
console.log('\n');


//splice() - requires two arguments - start and n. It removes n number of items from the array, starting from the index start and returns the removed item(s)
console.log('\n Splice');
var itemsRemoved = demoArray.splice(1, 4);
console.log('Items spliced ' + itemsRemoved);
console.log('demoAyrray = ' + demoArray);
console.log('\n');


//slice() -selects all elements starting from the index start, and ending at, but not including, the item at index end. It returns these elements as a new array. The original array is not changed

var mySlicedArray = demoArray.slice(0, 3);
console.log('my sliced array = ' + mySlicedArray);
console.log('demoAyrray = ' + demoArray);
console.log('\n');


//indexOf() - gives us the index of a certain item in the array. If the item is not found, it returns -1

console.log(demoArray.indexOf(50));
console.log(demoArray.indexOf(80));


//sort() sorts an array in ascending alphabetical order
var secondDemoArray = [2, 3, 7, 200, 456, 546, 23, 5, 6, 6, 30];
console.log('before sorting: ' + secondDemoArray);
var sortedArray = secondDemoArray.sort();
console.log('After sorting: ' + sortedArray);

//**this ^^^ doesnt actually sort the array numerically*/

//sort in ascending
secondDemoArray.sort(function (a, b) {
    "use strict";
    return a - b;
});
console.log('after sorting in numeric function: ' + secondDemoArray);


//sort in desc
secondDemoArray.sort(function (a, b) {
    "use strict";
    return b - a;
});
console.log('after sorting in numeric function desc: ' + secondDemoArray);