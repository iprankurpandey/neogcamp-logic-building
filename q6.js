console.log('Write program to take a month as an input from the user and find out whether the month has 31 days or not.')

const input = require('readline-sync')
const month = input.question('enter month')

if ((month == 1) ||(month == 3) || (month == 5) ||(month == 7) || (month == 8) || (month == 10)||(month == 12))
{ 
console.log('Number of days is 31')
}
else if (month == 2)
{
console.log('Number of days is 28/29(leap year)')
}
else
{
	console.log('Number of days is 30')
}