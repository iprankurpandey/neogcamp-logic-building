// Write a program to input 2 numbers and display the sum of the numbers to the console.

const input = require('readline-sync')
const num1 = input.question('enter number 1 : ')
const num2 = input.question('enter number 2 : ')
const sum = Number(num1)+Number(num2)
console.log( `the sum is : ${sum}`)


// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

const input = require('readline-sync')
const principal = input.question('enter prinicipal : ')
const time = input.question('enter time : ')
const rate = input.question('enter rate : ')
const SI = Number(principal)*Number(time)*Number(rate)/100
console.log(`the SI is : ${SI}`)

// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
const input = require('readline-sync')
const mass = input.question('enter mass : ')
const velocity = input.question('enter velocity : ')
const KE = (0.5)*Number(mass)*Number(velocity)*Number(velocity)
console.log(`the KE is : ${KE} J`)
