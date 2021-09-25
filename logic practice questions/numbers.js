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

// Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

const input = require('readline-sync')
const Farenhite = input.question('enter Farenhite : ')

const Celcius = Number(Farenhite - 32) * 5/9 
console.log(`the Celcius is : ${Celcius.toFixed(2)}°C`)

// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
const input = require('readline-sync')
const side = input.question('enter side : ')
const area = Number(side)*Number(side)
const perimeter = Number(side)*4
console.log(`the area of square is : ${area} and perimeter is : ${perimeter}`)
const surfaceArea = Number(side)*Number(side)*6
const volume = Number(side)*Number(side)*Number(side)
console.log(`the surface area of cube is : ${surfaceArea} and volume is : ${volume}`)

// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const input = require('readline-sync')
const cp = Number (input.question('enter cost price : '))
const sp = Number (input.question('enter selling price : '))
if (cp>sp){
	console.log(`this is a loss of ${cp -sp}₹`)
}
else {
	console.log(`this is a profit of ${sp -cp}₹`)
}
// Write a program to calculate sum of N natural digits, as input by the users?

const input = require('readline-sync')
const num = Number (input.question('enter number : '))
const sum = num*(num+1)/2
console.log(`the sum of ${num} natural numbers are : ${sum}`)

// Write a Program to Print N Odd Number in Descending Order.

const input = require('readline-sync')
const num = Number (input.question('enter number : '))
const odd = 2*num -1 
for(i=1;i<=odd;i++){
	if(i%2!=0){
		// console.log(i)
console.log(`the ${num} Odd natural numbers in Descending order are:  ${i}`)
	}

}


// Write a JavaScript program to compute the sum of all digits that occur in a given string.

const input = require('readline-sync')
const num = input.question('enter number : ')
const result = Array.from(String(num), Number);
let sum = 0
for(i=0;i<result.length;i++){
	sum+=result[i]
	console.log(sum)
}