// almacenamiento
var accum = 0;

//variables 
var getNumber = () => parseInt(document.getElementById("number").value);
var clearInput = () => document.getElementById("number").value = "";

//operaciones
var sum = () => accum = getNumber() + accum;
var rest = () => accum = getNumber() - accum;
var multiply = () => accum = getNumber() * accum;
var divide = () => accum = getNumber() / accum;

//resultado
var calculate = () => document.getElementById("total").innerText = (accum);

//botones
document.getElementById("sum").addEventListener("click", sum);
document.getElementById("rest").addEventListener("click", rest);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("sum").addEventListener("click", clearInput);
document.getElementById("rest").addEventListener("click", clearInput);
document.getElementById("multiply").addEventListener("click", clearInput);
document.getElementById("divide").addEventListener("click", clearInput);
document.getElementById("calculate").addEventListener("click", calculate);

