// Write a program to input 2 numbers and display the sum of the numbers to the console.

const input = require('readline-sync')
const num1 = input.question('enter number 1 : ')
const num2 = input.question('enter number 2 : ')
const sum = Number(num1)+Number(num2)
console.log( `the sum is : ${sum}`)