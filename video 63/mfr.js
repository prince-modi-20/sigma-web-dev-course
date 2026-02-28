let arr = [1, 13, 5, 7, 11];
// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];

//   newArr.push(element ** 2);
// }
// console.log(arr);
// console.log(newArr);  /* Push square values in arr using "for loop" */

// let newArr = arr.map((e)=>{
//     return e**2             /* Push square values in arr using ".map" */
// })
// console.log(newArr);

let newArr = arr.map((e) => {
  return e ** 2; /* Push square values in arr using ".map" */
});
console.log(newArr);

const greaterThanSeven = (e) => {
  if (e > 7) {
    return true; /* Give only those number who is greater than seven */
  }
  return false;
};
console.log(arr.filter(greaterThanSeven));



let arr2 = [1, 2, 3, 4, 5, 6, 7];

const red = (a, b) => { 
  return a * b;   
};

console.log(arr2.reduce(red));   /* Reduce used for all array element calculate and give final result */