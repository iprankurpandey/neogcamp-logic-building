const input = document.querySelector('#inputbox')
const addition = document.querySelector('#add')
const subtraction = document.querySelector('#subtract')
const resetB = document.querySelector('#reset')
const outputBox = document.querySelector('#output')


function sum() {
  
    outputBox.innerText = input.value;
    outputBox.style.fontSize = '4rem'
    
}

function subtract() {
        outputBox.innerText = input.value;
    outputBox.style.fontSize = '2rem'
}

function reset() {
    outputBox.style.fontSize= ''
}

addition.addEventListener('click', sum)
subtraction.addEventListener('click', subtract)
resetB.addEventListener('click', reset)