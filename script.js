const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

var first = null;
var operator = null;
var second = null;
var result = null;

function operate(f, o, s) {
    var calculatedResult;
    if (o === '+') {
        calculatedResult = add(f, s);
    } else if (o === '-') {
        calculatedResult = subtract(f, s);
    } else if (o === 'x') {
        calculatedResult = multiply(f, s);
    } else if (o === '/') {
        calculatedResult = divide(f, s);
    }
    return calculatedResult;
}

var oper = document.querySelectorAll(".oper");
var display = document.querySelector("#result");

oper.forEach(function (x) {
    x.addEventListener('click', function () {
        if (operator !== null && second !== null) {
            result = operate(first, operator, second);
            display.textContent = result;
            first = result;
            second = null;
        }
        operator = x.textContent;
        first = parseFloat(display.textContent);
        display.textContent = operator;
    });
});

var numbers = document.querySelectorAll(".values");

numbers.forEach(function (button) {
    button.addEventListener('click', function () {
        if(operator === null){
            display.textContent += button.textContent;
            first *= 10;
            first += parseFloat(button.textContent);
        }else{
            if(display.textContent === operator){
                display.textContent = "";
            }
            display.textContent += button.textContent;
            second *= 10;
            second += parseFloat(button.textContent);
        }
    });
});

var clear = document.querySelector("#clear");
clear.addEventListener('click', function () {
    display.textContent = "";
    first = null;
    second = null;
    operator = null;
});

var equals = document.querySelector("#equal");
equals.addEventListener('click', function () {
    if (first !== null && operator !== null && second !== null) {
        result = operate(first, operator, second);
        if(result == (1/0)){
            result = "Don't divide by 0 idiot!";
            display.textContent = result;
            first = null;
            second = null;
        }else{
            result = parseFloat(result.toFixed(7));
            display.textContent = result;
            first = result;
            second = null;
        }
    }
});
