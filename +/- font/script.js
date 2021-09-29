const input = document.querySelector('#input1')
const addition = document.querySelector('#add')
const subtraction = document.querySelector('#subtract')
const resetB = document.querySelector('#reset')
const outputBox = document.querySelector('#output')

function sum() {
    input.style.fontSize = "6rem";
    document.body.style.backgroundColor= 'red'

}

function subtract() {
    input.style.fontSize = '3rem';
    document.body.style.backgroundColor= 'green'
}

function reset() {
    input.style.fontSize = ''
    document.body.style.backgroundColor= ''

}
addition.addEventListener('click', sum)
subtraction.addEventListener('click', subtract)
resetB.addEventListener('click', reset)