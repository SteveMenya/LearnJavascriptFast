# Tools Used
```
 Visual Studio Code
 Bracket
 Chrome Browser
```


# Chapter 2
**Methods**
```
A method is a block of code that performs a certain task
EXAMPLE - The console.log() method allows us to display messages in the console window
```

**Comments**
```
For single line comments  use //my comment
For multiline comments use /*my comment*/
```

**Escape Sequence**
```
More info about this can be found here <a href="chapter_2/chap2.js">Chapter 2</a>
```

# Chapter 3
**Variables**
```
Variables are names given to data that we need to store and manipulate in our programs
All statements in Javascrips must end with a semi-colon

**Rules for creating variable**
A variable can only contain (a-z, A-B), numbers, underscores(_) or dollar signs($) however the first character cannot be a number

There are some reserved words that cannot be used as variable names.  Example var, if, while, class, return

Variable names are case sensitive. Meaning username and userName are two different variables

It is common practice to use camel case while naming variables. Example; thisIsMyVariable;
```


**Data Types in Javascript**
```
The most commonly used data types are;
**numbers**- numerical valurs represented using digits and decimal points
**strings**- text. Must be enclosed in a single or double quotation marks
**booleans**- true or false. used in comparison statements
**arrays**- a special data type that can hold multiple values
```

# Chapter 4
**Making Choices and Decisions**
```
A comparison operator is an operator that compares two or more values or variables and returns either a true or false result
```

**if statement**
```
Most commonly used control flow statement
It allows the program to evaluate if a certain condition is met, and to perform appropriate actions based on the evaluation
```

**Jump Statement**
```
A jump statement is a statement used to instruct the program to deviate from its normal flow sequence and jump to another line of code

The Break statement is used to to exit a loop when a condition is met

Continue - anything after continue will not be read when a condition is met
```


# Chapter 5
**Functions**
```
A function is a block of code that performs a certain task

IIFE - Immediately Invoked Function Expressions are invoked immediately once the browser reaches them
```

# Chapter 6
**Objects**
```
An object can be thought of as a grouping of variables and functions. 

These variables and functions are related to one another such that as a group, they form a representation of a concept or a real-life object
```

**Constructors**
```
Sometimes you may need to create several similar objects in your program. 

It is more convinient to use a constructor to do this. 

It is essentially a template to build multiple objects 
```


**Prototypes**
```
This is a special property that evey object in Javascript has by default

It associates the object with its contructor function and allows us to create functions and properties that are shared by all objects created by that constructor

Saves ram as only one instance is built. 

use prototypes for common functions and properties
```

**JavaScript Built-in Objects**
```
Some common build in objects include Math, Date, Number, String
For Math - math.round(5.1) gives you 5, math.pow(x,y) returns value of x to the power of y, Math.min(), Math.max(), Math.random()
```

# Chapter 7
**DOM**
```
In order to combine HTML, CSS & Javascript the DOM is needed
Stands for Document Object Model

It is a structural representation of a HTML document; it represents the document as a collection of nodes


HTML elements(element nodes)
Text insdie HTML elements(text nodes)
Comment(commend nodes) 
```

**Selecting Nodes in the DOM**
```
In order to access nodes in DOM, we need to use the document object.

The document object is a built in Javascript object that represents the HTML document. Comes with useful methods and properties for accessing and modifying DOM nodes

usefull methods() from the dom include. getElementsById(). getElementsByClassName(), getElementByTagName(), querySelector(), querySelectorAll()

```

# Event Handling

**What is this??**
```
Any interaction that a user makes with the web page.

These include interactions like clicking a button, resizing a window, loading a page

Commonly used events in javascrips include; 
onclick - occurs when a user clicks on a HTML element
onmouseover - when a user moves the pointing device
onmouseout - when a user moves the pointing device out of an element
onfocus - when an element receives focus. eg tabing through a "selected" window
onblur- when an element loses focus

```

**Three methods to handle Events**
```
Inline Event Handler
Using Event Handler Properties
Using Event Listeners
```

# The JavaScript Game.
