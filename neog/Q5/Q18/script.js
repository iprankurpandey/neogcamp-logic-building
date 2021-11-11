const input = document.querySelector('#inputbox')
const redColor = document.querySelector('#red')
const greenColor = document.querySelector('#green')
const blueColor = document.querySelector('#blue')
const resetB = document.querySelector('#reset')
const outputBox = document.querySelector('#output')

function red() {

    outputBox.innerText = input.value;
    outputBox.style.color= 'red'
}

function green() {
    outputBox.innerText = input.value;
    outputBox.style.color= 'green'
}

function blue() {
    outputBox.innerText = input.value;
    outputBox.style.color='blue'
}

function reset() {
    input.value =''
    outputBox.innerText = '';
    outputBox.style.color=''
}

redColor.addEventListener('click', red)
greenColor.addEventListener('click', green)
blueColor.addEventListener('click', blue)
resetB.addEventListener('click', reset)