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
const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const btn = document.getElementById('btn')!;

function soma(a: number, b: number) {
    return a + b
}

btn.addEventListener('click', function () {
    alert(soma(Number(input1.value), Number(input2.value)));
});

