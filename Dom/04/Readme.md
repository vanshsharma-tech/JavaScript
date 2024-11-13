document.querySelector is a JavaScript method used to select the first element that matches a specified CSS selector. It’s very versatile because it allows you to use any CSS selector (like IDs, classes, attributes, or tags) to find elements in the DOM.
Syntax:-
document.querySelector(selector);

selector: This is a string representing the CSS selector you want to match.

Example:-
let anotherH1 = document.querySelector(".first") // It detects the only first element of that class
console.log(anotherH1)

let div = document.querySelector("#id")
console.log(div)
div.innerText="This is my div box edited by javascript..."
