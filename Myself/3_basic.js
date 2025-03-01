let arr = [1,2,3,4,5,6];
const count = 3;

// const val = arr.reduce((value,nums)=>{
//   return ((value + nums));
// },count)
// console.log(val);

const myArray = [
  {
    item : "Java course",
    price : 300
  },
  {
    item : "React course",
    price : 3000
  },
  {
    item : "Java course",
    price : 200
  },
];
let val=0;
let totalShoping = myArray.reduce((count,items)=>{
  return (count+items.price)
},val)

console.log(totalShoping)