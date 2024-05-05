const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

var buttonX = document.querySelector("#x");
buttonX.addEventListener('click', function(){
    console.log(multiply(2, 3));
});
