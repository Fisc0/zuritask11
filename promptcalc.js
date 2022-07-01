const num1 = parseFloat(prompt("Enter first number"));
const num2 = parseFloat(prompt("Enter second number"));
const operator = prompt("Enter an operator");

let result = 0;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
}

document.write(result);
