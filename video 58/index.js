console.log("I am reading Javascript function");

function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " your tshirt is nice!");
  console.log("Hey " + name + " your course is good too!");
}

nice("Prince");

function sum(a, b, c = 3) {
  //   console.log(a+b)
  return a + b + c;
}

result = sum(9, 5);
result1 = sum(2, 6);
result2 = sum(8, 3);
result3 = sum(4, 1, 2);

console.log(result);
console.log("The some of these number is: ", result1);
console.log("The some of these number is: ", result2);
console.log("The some of these number is: ", result3);

const func1 = (x) => {
  console.log("I am an arrow function", x);
};
func1(34);
func1(75);
func1(63);
