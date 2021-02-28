"use strict";
//JavaScript 
// const input1 = document.getElementById('num1');
// const input2 = document.getElementById('num2');
// const btn = document.getElementById('btn')
// function soma(a, b) {
//     return a + b
// }
// btn.addEventListener('click', function () {
//     alert(soma(input1.value, input2.value));
// });
//TypeScript
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var btn = document.getElementById('btn');
function soma(a, b) {
    return a + b;
}
btn.addEventListener('click', function () {
    alert(soma(Number(input1.value), Number(input2.value)));
});
