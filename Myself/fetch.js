// const promise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     let data = fetch("https://jsonplaceholder.typicode.com/todos")
//     setTimeout(() => {
//       let response = data.json();
//     if (response) {
//       resolve(response)
//     }else{
//       reject("error")
//     }
//     }, 2000);
//   },2000)
// })

// promise.then((data)=>{
//   console.log(data)
// }).catch((data)=>{
//   console.log(data)
// })

async function myPromise() {
  
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(data)
  let response = await data.json();
  // console.log(response[1].id)
  response.map((items)=>{
    console.log(items.title)
  })
  } catch (error) {
    console.log(error)
  }
}

myPromise()