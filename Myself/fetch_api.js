// async function getUserData() {
//   try {
//     let data = await fetch("https://github.com/vanshsharma-tech");
//     console.log(data)
//     let response = await json.parse(data);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserData();
// https://api.github.com/users/your-username/followers
// fetch("https://github.com//vanshsharma-tech/")
// .then(response => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   return response.json();
// })
// .then(data => {
//   console.log('Followers:', data);
// })
// .catch((error)=>{
//   console.log(error)
// })

// fetch('https://api.github.com/users/vanshsharma-tech/followers')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Followers:', data);
//   })
//   .catch(error => {
//     console.error('Error fetching followers:', error);
//   });

const username = "vanshsharma-tech";

const API = `https://api.github.com/users/${username}`;

fetch(API)
.then((response)=>{
  if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
})
.then((data)=>{
  console.log(data.followers)
})
.catch((err)=>{
  console.log(err)
})