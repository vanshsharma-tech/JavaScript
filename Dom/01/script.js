// How to access the tag element in javascipt by using getElementsByTagName

let h1 = document.getElementsByTagName("h1")[0];
console.log(h1.innerText)
h1.innerText = "Hello, Duniya!";  // Here i change the text of Hello World 0 to this

let anotherH1 = document.getElementsByTagName("h1")[1];
console.log(anotherH1.innerText)
anotherH1.style.color="red"

// Here i am trying to access the value which is present in div container

let div = document.getElementsByTagName("div")[2];
console.log(div.innerText)  
div.style.backgroundColor="aqua"