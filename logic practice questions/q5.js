console.log('Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46')

const num1=35;
const num2=29;
const num3=46;

if(num1<num2 && num1<num3){
	console.log('num1 is minimum')
}
else if(num2<num1 && num2<num3){
	console.log('num2 is minimum')
}
else if(num3<num1 && num3<num2){
	console.log('num3 is minimum')
}
else{
	console.log('numbers are equal')
} 