let arr = [
  {
    id: "1",
    name: "Vansh Sharma",
    friend: "all",
  },
  {
    id: "2",
    name: "Annu",
    friend: "Vansh",
  },
  {
    id: "3",
    name: "Prince",
    friend: "Vansh Sharma",
  },
];

arr.map((items)=>{
  console.log(`The id is ${items.id} and name of this person is ${items.name}`);
})

let array = [1,2,3,4,5];
let count = 0;

const values = array.filter((nums)=>(nums>3))
console.log(values)