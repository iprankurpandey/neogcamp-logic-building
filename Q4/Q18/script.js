const input = document.querySelector('#inputbox')
const h1 = document.querySelector('#h1')
const h2 = document.querySelector('#h2')
const h3 = document.querySelector('#h3')
const resetB = document.querySelector('#reset')
const outputBox = document.querySelector('#output')


function headH1() {

    outputBox.innerText = input.value;
    outputBox.style.fontSize = '32px'
}

function headH2() {
    outputBox.innerText = input.value;
    outputBox.style.fontSize = '24px'
}

function headH3() {
    outputBox.innerText = input.value;
    outputBox.style.fontSize = '18.72px'
}

function reset() {
    outputBox.style.fontSize = ''
}

h1.addEventListener('click', headH1)
h2.addEventListener('click', headH2)
h3.addEventListener('click', headH3)
resetB.addEventListener('click', reset)