//changing css style if an element
//this is considered inline, hence will have higher precedence
var console;
document.getElementById('first').style.color = 'Red';
document.getElementById('first').style.backgroundColor = 'Yellow';


//className
//this property allows us to chang the className of an element

//changing the class name of the second div
document.getElementById("second").className = 'myclass';
console.log(document.getElementById('second').className);


//childNodes.length
console.log(document.querySelector('ul').childNodes.length);

//firstChild and lastChild
document.querySelector('ul').firstChild.textContent = 'First Child Changed';
document.querySelector('ul').lastChild.textContent = 'Last Child Changed';

//childNodes
document.querySelector('ul').childNodes[3].style.backgroundColor = 'green';


//previousSibling and nextSibling
document.querySelector('ul').childNodes[3].previousSibling.textContent = 'Previous Sibling';
document.querySelector('ul').childNodes[3].nextSibling.textContent = 'Next Sibling';

//parent Node
document.querySelector('li').parentNode.style.backgroundColor = 'red';


//interacting with form elements
console.log(document.getElementById('textInput').value);

//modifying the value property
document.getElementById('textInput').value = 'Hello Again'

//getting attribute of each option
console.log(document.getElementById('numbers').options[1]);
console.log(document.getElementById('numbers').options[1].value);


console.log(document.getElementById('numbers').selectedIndex);

console.log(document.getElementById('numbers').selectedIndex = 1)