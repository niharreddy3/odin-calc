let firstNumber;
let operator;
let secondNumber;
let displayValue = [];

// display the selected buttons on the calc's display.

let display = document.querySelector(".calc-display");

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

function updateDisplay(btnChar) {
  if (btnChar === "clear") {
    firstNumber = null; 
    operator = null; 
    secondNumber = null;
    display.textContent = "";
  } else if (btnChar === "=") {
    let result = operate(operator, firstNumber, secondNumber); 
    display.textContent = result;
  } else {
    displayValue.push(btnChar);
    display.textContent = displayValue.join(" ");
  }
}

let numPad = document.querySelector(".num-pad");

numPad.addEventListener("click", (event) => {
  let target = event.target;

  updateDisplay(target.textContent);
});
