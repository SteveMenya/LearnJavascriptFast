function eventHanlderInlineDemo() {
    alert('Inline Event Handler')
}


function eventHandlerPropDemo() {
    alert('Event Handler Property 2')
}

function eventHandlerProperty2() {
    alert('Event Handler Property 2')
}

document.getElementById('propdemo').onclick = eventHandlerPropDemo


//using event Listeners


function eventListenerDemo() {
    alert('Event Listener')
}

function eventListenerDemo2() {
    alert('Event Listener 2')
}

document.getElementById('listenerdemo').addEventListener('click', eventListenerDemo)
document.getElementById('listenerdemo').addEventListener('click', eventListenerDemo2)



//event bubbling

function parentEventHandler() {
    alert('Parent Event Handler')
}


function childEventHandler(e) {
    alert('Child Event Handler');
    //prevents the parent event from ocuring as well
    e.stopPropagation();
}

document.getElementById('parent').addEventListener('click', parentEventHandler);

document.getElementById('child').addEventListener('click', childEventHandler);

document.getElementById('child').style.backgroundColor = 'Yellow';



function amazonLink(e) {
    alert('Permission Denied')
    //removes all default settings meaning it will stop you from going to amazon
    e.preventDefault();
    alert(e.cancelable)
}

document.getElementById('amazon').addEventListener('click', amazonLink)
