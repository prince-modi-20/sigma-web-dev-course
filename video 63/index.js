let arr = [1, 2, 3, 4, 5, 7];
//  Index  0, 1, 2, 3, 4, 5

arr[0] = 2010;

// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr[5]);

console.log(arr.toString());
console.log(arr.join(" | "));
console.log(arr.join(" and "));

arr.pop(); /* [ Remove last element from array ] */
console.log(arr);

arr.push(2026); /* [ Add 2026 in last ] */
console.log(arr);

arr.push("Prince"); /* [ Add Prince in last ] */
console.log(arr);

arr.shift(); /* [ Remove first element from array ] */
console.log(arr);

arr.unshift("covid-19"); /* [ Add covid-19 in last ] */
console.log(arr);

delete arr[0];
console.log(arr);

// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]
// let a3 = [7, 8, 9]
// // a1.concat(a2, a3)
// console.log(a1.concat(a2, a3))

// let numbers = [1, 2, 3, 4, 5]  
// numbers.splice(1, 3, 2010, "covid-19")  /* splice used for add element and remove element from array */
// console.log(numbers)
