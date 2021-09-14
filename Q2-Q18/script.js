const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const addition = document.querySelector('#add')
const subtraction = document.querySelector('#subtract')
const multiplication = document.querySelector('#multiply')
const division = document.querySelector('#divide')
const outputBox = document.querySelector('#output')

function sum() {
	const sum =Number(input1.value) + Number(input2.value)
	outputBox.innerHTML = sum;
	return sum;
}


function subtract() {
	const subtract = Number(input1.value) - Number(input2.value)
	outputBox.innerHTML = subtract;
	return subtract;

}
function mulitiply() {
	const mulitiply = Number(input1.value) * Number(input2.value)
	outputBox.innerHTML= mulitiply
	return mulitiply;
}

function divide() {
	const divide = Number(input1.value) / Number(input2.value)
	outputBox.innerHTML= divide
	return divide;
}


addition.addEventListener('click', sum)
subtraction.addEventListener('click', subtract)
multiplication.addEventListener('click', mulitiply)
division.addEventListener('click', divide)
