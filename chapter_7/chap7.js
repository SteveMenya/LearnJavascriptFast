// the getElementById() dom method
document.getElementById('first')

//textContent and innerHTML

var firstDiv = document.getElementById('first');
firstDiv.textContent = 'I\'ve changed';

//formating the text
firstDiv.innerHTML = '<em>I\'ve changed</em>';


//getting element by class name
var myClassDiv = document.getElementsByClassName('myclass');
myClassDiv[0].textContent = 'My class 1';
myClassDiv[1].textContent = 'My class 2';



//getting elements by tag name
document.getElementsByTagName('div')[0].textContent = 'Tag name 1';
document.getElementsByTagName('div')[1].textContent = 'Tag name 2';
document.getElementsByTagName('div')[2].textContent = 'Tag name 3';


//getting elements using querySelector()
document.querySelector('.myclass').textContent = 'Query Selector CN';

//selecting all in a class with querySelector
document.querySelectorAll('.myclass')[0].textContent = 'Query Selector CN 1';
document.querySelectorAll('.myclass')[1].textContent = 'Query Selector CN 2';

//using querySelector to select tag name
document.querySelector('div').textContent = 'Query Selector TN';
document.querySelectorAll('div')[2].textContent = 'Query Selector ALL TN';


//selecting by id
// document.querySelectorAll('#first')[0].textContent = 'Query Selector All ID'
document.querySelector('#first').textContent = 'Dont need index if its just one';