console.log('Write a program to take a number input from user and determine whether the number is odd or even.')

const input = require('readline-sync')
const number = input.question('enter first number :')
if(number % 2 ==0 ){
	console.log('even number')
}
else{
		console.log('odd number')
}
