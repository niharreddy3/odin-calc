let firstNumber;
let operator;
let secondNumber;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(op, num1, num2) {
  const operation = op;

  switch (operation) {
    case "+":
      return add(operation, num1, num2);
    case "-":
      return subtract(operation, num1, num2);
    case "*":
      return multiply(operation, num1, num2);
    case "/":
      return divide(operation, num1, num2);
  }
}
