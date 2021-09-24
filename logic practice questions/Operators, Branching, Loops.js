5
// console.log( 'Operators, Branching, Loops')

//1- Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
 const num1=5, num2=13, num3=7, num4=21,num5=48
 sum = num1+num2+num3+num4+num5
 console.log(' sum is :' +sum)

//  //2-Write a program to take a number input from user and determine whether the number is odd or even.

const input = require('readline-sync')
const num = input.question('input number : ')
if (num %2 == 0 ){
	console.log('number is even')
}
else{
	console.log('number is odd')
}

// //3- Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const num1=129, num2=251
if(num1 > num2){
	console.log('num1 is greater')
}
else{
console.log('num2 is greater')
}

// //4-Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const num1=8000, num2=203,num3=1700

if(num1 > num2 && num1>num3){
	console.log('num1 is greater')
}
else if (num2 > num1 && num2> num3){
console.log('num2 is greater')
}
else if(num3 > num1 && num3 > num2){
	console.log('num3 is greater')
}
else{
	console.log('numbers are same ')
}
// // 5-Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.


const num1=80, num2=203,num3=170

if(num1 < num2 && num1<num3){
	console.log('num1 is least')
}
else if (num2 < num1 && num2< num3){
console.log('num2 is least')
}
else if(num3 < num1 && num3 < num2){
	console.log('num3 is least')
}
else{
	console.log('numbers are same ')
}

// //6-Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const input = require('readline-sync')
const month = input.question('enter month : ')
switch(month) {
	  case 'janury':
      case 'march':
      case 'may':
      case 'july':
      case 'august':
	  case 'october':
      case 'december':
	  days = 31 
	  break;
	  case 'february':
	  days = 28
	  break;
	  default :
	  days = 30
}


// // Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
for(i=1;i<100;i++)
{
	
	if(i%5 == 0 && i%3==0){
		console.log('FizzBuzz')
	}
	else if (i%3 == 0){
		console.log('Fizz')
	}
	else if(i%5 == 0){
	console.log('Buzz')
	
	}
	else{
	console.log(i)
	}
}

// // Print the following star pattern :-
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
const input = require('readline-sync')
const day = input.question('enter day : ')
const day = 5
        for (i = 0; i < day; i++) 
        {
            for (j = 0; j <= i; j++)
            {
                console.log('*');

            }
            console.log('\n');

        }
    


// // Write a program to take a number input from user and print multiplication table 12 times for that number.
const input = require('readline-sync')
const number = input.question('enter number : ')
for(i=1;i<=12;i++)
{
	console.log(number +'*'+ i +'=' +number*i)
}


// // Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
let n1=0,n2=1,n3=0;
console.log(n1+ '\n' +n2)
 for(i=2;i<10;++i)   
 {    
  n3=n1+n2;    
  console.log(" "+n3);    
  n1=n2;    
  n2=n3;    

}

// //Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const input = require('readline-sync')
const number = input.question('enter number : ')
let fact =1;
for(i=1; i<=number; i++){
fact = fact*i
}


// // Write a Program to take a number input from user and find if the number is Prime or not.
let isPrime = true;
let number = 8;
// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}


// // Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
const input = require('readline-sync')
const day = input.question('enter day : ')
if (day == 'sunday' || day == 'saturday')
{
	console.log('its weekend')
}
else{
	console.log('its weekday')
}