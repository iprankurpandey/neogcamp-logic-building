console.log('Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.')

const num1=801;
const num2=802;
const num3=803;

if(num1>num2 && num1>num3){
	console.log('num1 is maximum')
}
else if(num2>num1 && num2>num3){
	console.log('num2 is maximum')
}
else if(num3>num1 && num3>num2){
	console.log('num3 is maximum')
}
else{
	console.log('numbers are equal')
}