let currentNum = '';
let previousNum = '';
let currentOperator = '';

function displayNum(num) {
  currentNum += num;
  document.getElementById('display').value = currentNum;
}

function calculate(operator) {
  if (currentOperator === '') {
    previousNum = currentNum;
  } else {
    previousNum = operate(currentOperator, previousNum, currentNum);
  }
  currentNum = '';
  currentOperator = operator;
  document.getElementById('display').value = previousNum;
}

function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '=':
      return num2;
    case '%':
        return num1*0.01;
    default:
      return 'Error';
  }
}

function clearDisplay() {
  currentNum = '';
  previousNum = '';
  currentOperator = '';
  document.getElementById('display').value = '';
}
