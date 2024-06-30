let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = null;

function appendNumber(number) {
    if (currentInput.length < 15) {
        currentInput += number;
        updateDisplay(currentInput);
    }
}

function appendOperator(operator) {
    if (currentInput === '' && operator === '-') {
        currentInput = '-';
        updateDisplay(currentInput);
        return;
    }
    if (currentInput !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else {
            firstOperand = calculate();
        }
        currentOperator = operator;
        currentInput = '';
    }
}

function calculate() {
    if (firstOperand === null || currentInput === '') return firstOperand;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return secondOperand;
    }
    firstOperand = result;
    currentInput = '';
    currentOperator = '';
    updateDisplay(result);
    return result;
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = null;
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}

function updateDisplay(value) {
    display.innerText = value;
}
