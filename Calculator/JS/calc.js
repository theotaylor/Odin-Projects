let num1 = null;
let num2 = null;
let operation = null;
let displayingNum = 0;
const display = document.querySelector("#displayValue");
let operationClicked = false;
let previouslyOperatedOn = false;

calculator();

function calculator() {
    clickNum();
    clickOperation();
    equal();
    clearAll();
}

function operate(num1, operation, num2) {
    switch (operation) {
        case "+":
            return add(num1, num2);
        case "-": 
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return 0;
    }       
}

function enter() {
    num2 = displayingNum;
    console.log(`${num1}${operation}${num2}`);
    displayingNum = operate(num1, operation, num2);
    display.textContent = displayingNum;
    num1 = displayingNum;
    num2 = null;
}

function equal() {
    const equal = document.querySelector('#equals');
    equal.addEventListener('click', function() {
        if (num1) {
            enter();
        }
        console.log("=");

    })
}

function clearAll() {
    const ac = document.querySelector(".clear button");
    ac.addEventListener('click', function() {
        console.log("cleared");
        displayingNum = 0;
        num1 = null;
        num2 = null;
        operation = null;
        display.textContent = displayingNum;
    })
}

function clickOperation() {
    const operationButtons = document.querySelectorAll('.operations button');
    operationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (num1) {
                enter();
            } else {
                num1 = displayingNum;
            }
            operationClicked = true;
            operation = this.getAttribute('data-value');
            console.log(`${operation}`);
        })
    })
}

function clickNum() {
    const digitButtons = document.querySelectorAll('.digitButtons button');

    digitButtons.forEach(button => {
        button.addEventListener('click', function() {
            const digit = Number(this.getAttribute('data-value'));
            console.log(`${digit}`);
            if (operationClicked) {
                displayingNum = 0;
                operationClicked = false;
            }
            displayingNum = displayingNum * 10 + digit;
            display.textContent = displayingNum;
            //to do: add the entire expression being inputted to the display
        })
    });
}

function round(num) {
    return Math.round(num * 10000)/10000;
}

function add(a, b) {
    return round(a + b);
}

function subtract(a, b) {
    return round(a - b);
}

function multiply(a, b) {
    return round(a * b);
}

function divide(a, b) {
    if (b === 0) {
        alert("ERROR CAN'T DIVIDE BY 0");
        return 0;
    } else {
        return round(a / b);
    }
}