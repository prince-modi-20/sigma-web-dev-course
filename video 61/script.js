alert("This is faulty calculator so use at your own risk");

function faultycalculator() {
  let number1 = parseFloat(prompt("Enter the first number"));
  let operation = prompt("Enter operation(+,-,*,/,**)");
  let number2 = parseFloat(prompt("Enter the second number"));

  let random = Math.random();
  let result;

  if (random > 0.1) {
    if (operation === "+") {
      result = number1 + number2;
    } else if (operation === "-") {
      result = number1 - number2;
    } else if (operation === "*") {
      result = number1 * number2;
    } else if (operation === "/") {
      result = number1 / number2;
    } else if (operation === "**") {
      result = number1 ** number2;
    }
  } else {
    if (operation === "+") {
      result = number1 - number2;
    } else if (operation === "-") {
      result = number1 / number2;
    } else if (operation === "*") {
      result = number1 + number2;
    } else if (operation === "/") {
      result = number1 ** number2;
    }
  }

  alert("You final number is " + result);
  console.log("Your final number is " + result);
}

faultycalculator();
