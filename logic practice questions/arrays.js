//Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
const array = [10,4,5,2,5,6,9]
let sum =0;
for(i=0;i<array.length;i++){
	sum +=array[i]
}

// Find average of an array and display the output.
const array = [10,4,5,2,5,6,9]
let sum =0;
let average = 0;
for(i=0;i<array.length;i++){
	sum +=array[i]
	average = sum/array.length;
	
}

// Find maximum and minimum of an array.

const array = [10,4,5,2,5,6,9]
const min = Math.min(...array)
console.log(min)
const max=Math.max(...array)
console.log(max)
// let max =array[0]
// let min = array[0]
// for(i=0;i<array;i++){
// 	array[i]
// 	if(array[i]>max){
// 		max = array[i]
// 	}
//  if(array[i]<min){
// 	 min = array[i]
//  }
//  console.log(min)
// }
