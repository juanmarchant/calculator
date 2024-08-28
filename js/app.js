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
function resto(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
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
        case '%':
            result = resto(firstNumber, secondNumber);
            break;
        default:
            break;
    }
    if (isNaN(result)) {
        result = 'Error'
    }
    cleanAndUpdate(result);
    return;
}

function updateHTML(value, type) {


    if (value === '±' && type === 'inverted') {
        if (firstNumber !== '' && symbol === '') {
            firstNumber *= -1;
            display.textContent = ''
            display.textContent += firstNumber;
            return;
        }

        if (secondNumber !== '' && symbol !== '') {
            secondNumber *= -1;
            display.textContent = ''
            display.textContent = `${firstNumber} ${symbol} ${secondNumber}`;
            return;
        }
    }

    if (secondNumber === '' && symbol === '' && type === 'number') {
        if (value === '.') {
            if (firstNumber === '' || firstNumber.includes('.')) {
                return;
            }
            firstNumber += '.'
            display.textContent += value
            return;
        } else {
            firstNumber += value
            display.textContent += value
        }
    }

    if (firstNumber !== '' && type === 'symbol' && value !== '=' && value !== '±') {
        if (symbol === '+' || symbol === '-' || symbol === 'x' || symbol === '÷' || symbol === '%') {
            return;
        }
        symbol += value;
        display.textContent += ' ' + value + ' '
    }

    if (firstNumber !== '' && symbol !== '' && type === 'number') {

        if (value === '±') {
            secondNumber *= -1;
        }

        if (value === '.') {
            if (secondNumber === '' || secondNumber.includes('.')) {
                return;
            }
            secondNumber += '.'
            display.textContent += value
            return;
        } else {
            secondNumber += value
            display.textContent += value
        }
    }
}


function cleanAndUpdate(result) {
    firstNumber = result;
    symbol = '';
    secondNumber = '';
    if (result === 'Error') {
        display.textContent = result;
        return;
    }
    display.textContent = parseFloat(result.toPrecision(3));
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
            operate(symbol, parseFloat(firstNumber), parseFloat(secondNumber));
        }
    });
});