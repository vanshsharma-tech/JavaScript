In JavaScript, getElementById is a method used to select an HTML element by its unique id attribute. Here’s how you can use it:

// HTML
// <div id="myElement">Hello, World!</div>

// JavaScript
let element = document.getElementById("myElement");
console.log(element.textContent); // Outputs: Hello, World!

Explanation:-
document.getElementById("myElement") finds the element with the id of "myElement".
You can then access or modify the element's properties, such as textContent, innerHTML, style, and more.