// console.log(div.src)
// div.src="https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg"

const username = "vanshsharma-tech";

const API = `https://api.github.com/users/${username}`;
let div = document.querySelector("#img")
let span = document.querySelector("span")
let span1 = document.querySelector("#following")
fetch(API)
.then((res)=>{
  return res.json()
})
.then((data)=>{
  span.innerText=`${data.followers}`
  span1.innerText=`${data.following}`
  div.src=data.avatar_url
  // console.log(data.repos_url)
})
.catch((err)=>{
  console.log(err)
})

let repo = document.querySelector("#repos")

fetch("https://api.github.com/users/vanshsharma-tech/repos")
.then((data)=>{
  return data.json();
})
.then((res)=>{
  // console.log(res)
  res.map((items)=>{
    // console.log()
    repo.innerText=`${items.full_name}`
  })
})
.catch(()=>{
  console.log("Somthing went wrong")
})

fetch("")