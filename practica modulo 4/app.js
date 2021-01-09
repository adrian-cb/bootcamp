
var numberA = () => parseInt(document.getElementById("number1").value);
var numberB = () => parseInt(document.getElementById("number2").value);


var sum = () => numberA() + numberB();
var rest = () => numberA() - numberB();
var multiply = () => numberA() * numberB();
var divide = () => numberA() / numberB();


var resultSum = () => document.getElementById("result").innerText = sum();
var resultRest = () => document.getElementById("result").innerText = rest();
var resultMultiply = () => document.getElementById("result").innerText = multiply();
var resultDivide = () => document.getElementById("result").innerText = divide();

document.getElementById("sum").addEventListener("click", ifNotSum);
document.getElementById("rest").addEventListener("click", ifNotRest);
document.getElementById("multiply").addEventListener("click", ifNotMultiply);
document.getElementById("divide").addEventListener("click", ifNotDivide);



function ifNotSum () {
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, debes incluir dos números";
    }else if (sum) {
        document.getElementById("sum").addEventListener("click", resultSum);
    }
}
function ifNotRest () {
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, debes incluir dos números";
    }else if (rest) {
        document.getElementById("rest").addEventListener("click", resultRest);
    }
}
function ifNotMultiply () {
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, debes incluir dos números";
    }else if (multiply) {
        document.getElementById("multiply").addEventListener("click", resultMultiply);
    }
}
function ifNotDivide () {
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, debes incluir dos números";
    }else if (sum) {
        document.getElementById("divide").addEventListener("click", resultDivide);
    }
}