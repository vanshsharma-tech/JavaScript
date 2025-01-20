let val = new Number(300)
// console.log(val)
// console.log(typeof(val))
// console.log(typeof(val.toString()))
let user = {
  id : 1,
  id : 2,
  username: "Vansh sharma",
}
let user2 = {
  id : 1,
  id : 2,
  username: "Vansh sharma",
}
// console.log(user==user2)
let user1 = user
user1.username="XYZ"
console.log(user==user1)
console.log(user.username)
console.log(Math.floor(Math.random()*100))