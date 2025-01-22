let aHref1 = document.getElementsByTagName("a")[0];
let aHref2 = document.getElementsByTagName("a")[1];

let button1 = document.getElementsByTagName("button")[0];
let button2 = document.getElementsByTagName("button")[1];

button1.addEventListener("click",(e)=>{
  aHref1.style.backgroundColor="black";
})
button2.addEventListener("dblclick",(e)=>{
  aHref2.style.backgroundColor="black";
})