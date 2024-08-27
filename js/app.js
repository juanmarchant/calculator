const display = document.querySelector('.display');

let firstNumber = '';
let symbol = '';
let secondNumber = '';

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};


function operate(operator, firstNumber, secondNumber) {
    // call any function
    let result = 0;
    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = substract(firstNumber, secondNumber);
            break;
        case 'x':
            result = multiply(firstNumber, secondNumber);
            break;
        case '÷':
            result = divide(firstNumber, secondNumber);
            break;
        default:
            break;
    }
    console.log(operator, firstNumber, secondNumber);
    firstNumber = result;
    symbol = '';
    secondNumber = '';
    display.textContent = result;
    console.log(operator, firstNumber, secondNumber);
}

function updateHTML(value, type) {


    if (secondNumber === '' && symbol === '' && type === 'number') {
        firstNumber += value
        display.textContent += value
    }

    if (firstNumber !== '' && type === 'symbol' && value !== '=') {
        if (symbol === '+' || symbol === '-' || symbol === 'x' || symbol === '÷') {
            return;
        }
        symbol += value;
        display.textContent += ' ' + value + ' '
    }

    if (firstNumber !== '' && symbol !== '' && type === 'number') {
        secondNumber += value
        display.textContent += value
    }

    // console.log(display.textContent.trim().length, firstNumber, symbol, secondNumber)
}

function clearDisplay() {
    //Reset
    display.textContent = ''
    firstNumber = '';
    secondNumber = '';
    symbol = '';
    return;
}

document.addEventListener('DOMContentLoaded', () => {

    const calculator = document.querySelector('.col');

    calculator.addEventListener('click', (e) => {
        updateHTML(e.target.textContent, e.target.classList[0])

        if (e.target.textContent === 'C') {
            clearDisplay();
        }

        if (e.target.textContent === '=' && symbol !== '' && firstNumber !== '' && secondNumber !== '') {
            operate(symbol, parseInt(firstNumber), parseInt(secondNumber));
        }

    });
});