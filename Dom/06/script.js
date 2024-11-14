// In this code we discuss about the dom child and siblings

let div = document.querySelector(".parent");
// If the div.firstChild that means it discribe the next value after div and this give the #text because after div container has the some spaces before the h1 and in js spaces is counted into text
console.log(div.firstChild);
// Same here nextSibling it only detect what the child after div
console.log(div.nextSibling);
// If the div.firstElementChild that means it discribe the next value after div and this give the which is element present in this case we have h1 element 
console.log(div.firstElementChild);
console.log(div.nextElementSibling);