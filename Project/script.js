let btn = document.getElementsByTagName("button")[0]
let res = document.querySelector(".result")
let text;
btn.addEventListener("click",()=>{
  let inp = document.getElementsByTagName("input")[0].value
  if (isNaN(inp) || inp < 1 || inp > 10) {
    text = "Wrong Input❌";
    // text.syle.color="red"
    res.style.color="red"
  } else {
    text = "Right Input ✅";
    res.style.color="green"
  }
  
  res.innerText=text
})