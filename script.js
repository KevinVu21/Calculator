const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
var first;
var operator;
var second;

var buttonX = document.querySelector("#x");
buttonX.addEventListener('click', function(){
    console.log(multiply(2, 3));
});

function operate(first, operator, second){
    if (operator === '+'){
        //call add function
    }
    else if(operator === '-'){
        //call subtract function
    }
    else if(operator === 'x'){
        //call multiply function
    }
    else if(operator === '/'){
        //call divide function
    }
}