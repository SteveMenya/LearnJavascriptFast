//creating new paragraph node
var para = document.createElement('p');

//new text node
var text = document.createTextNode('New paragraph added');

//adding text node to the new paragraph node
para.appendChild(text);

document.querySelector('#original').appendChild(para);

var para = document.createElement('p');
text = document.createTextNode('New Paragraph inserted')
para.appendChild(text)
document.querySelector('#original').insertBefore(para, document.getElementsByTagName('p')[1]);


//adding nodes to the html directly requires the browser to rerender the html page every time we modify it.
//this involves recalculating the layout, css styles e.t.c
//better way is to use document fragments


//my first document fragment
var docFrag = document.createDocumentFragment();
var paraToAdd;
var textContent;


for (i = 1; i <= 5; i++) {
    paraToAdd = document.createElement('p');
    textContent = document.createTextNode('Paragragh ' + i + ' Added');
    paraToAdd.appendChild(textContent);

    docFrag.appendChild(paraToAdd);
}

document.querySelector('#original').appendChild(docFrag)


//removing nodes

//removeChild()

var nodeToRemove = document.getElementsByTagName('p')[0];
nodeToRemove.parentNode.removeChild(nodeToRemove)



//adding id attribute with javascript

var elementsToModify = document.getElementsByTagName('p');

for (i = 0; i < elementsToModify.length; i++) {
    if(elementsToModify[i].getAttribute('id') === null) {
        elementsToModify[i].setAttribute('id', 'no' + i)
    }
}