const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const reset = document.querySelector('#reset')
const text = document.querySelector('#text')
let result = 0;

function addition() {
    result = Number(input1.value) + Number(input2.value);

    text.innerHTML = `the result is : ${result}`
}

function subtraction() {
    result = Number(input1.value) - Number(input2.value);
    text.innerHTML = `the result is : ${result}`
}

function multiplication() {
    result = Number(input1.value) * Number(input2.value);
    text.innerHTML = `the result is : ${result}`
}

function division() {
    result = Number(input1.value) / Number(input2.value);

    if (isNaN(result)) {
        text.innerHTML = `the result is : dont divide zero`
    } else {
        text.innerHTML = `the result is : ${result}`
    }
}

function reset1() {
    input1.value = ''
    input2.value = ''
    text.innerHTML = `the result is : reset`
}

add.addEventListener('click', addition)
subtract.addEventListener('click', subtraction)
multiply.addEventListener('click', multiplication)
divide.addEventListener('click', division)
reset.addEventListener('click', reset1)