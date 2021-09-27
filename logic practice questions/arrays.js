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

// Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term
let array1 = [10,4,7,2,5,11,5,4,0]
let array = array1.concat(78)
let median,sum=0;
let arraySort=array.sort(function(a, b){return a - b})
let nthTerm=arraySort.length

if(nthTerm%2==0){
 median = (nthTerm/2)

 median= array[median]
}
else if (nthTerm%2 != 0){
	median = ((nthTerm+1)/2)

	median= array[median]
}

else{
	console.log('numbers are zero')
}

let  mean = 0;
for(i=0;i<array.length;i++){
	sum +=array[i]
	mean =(sum/array.length)
	
}


const set = new Set(array);
const mode = array.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(`the mean is :  ${mean}`)
console.log(`the median is :  ${median}`)
console.log(`the mode is :  ${mode}`)

