In javascript getElementsByClassName is the way to access the html component which has the class.
Syntax:-
{ document.getElementsByClassName("box")[indexes]; }
Example:-
let box = document.getElementsByClassName("box")[1];
console.log(box.innerText);
box.innerHTML = "<p>Hello World</p>";
