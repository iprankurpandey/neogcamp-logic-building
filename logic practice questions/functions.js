
// Given a and b, your function should return the value of ab
// Example:Input: power(2,3) ––> Output: 8

let a,b=0;
function power(a,b){
	const power = Math.pow(a,b)
	return power
}
power(5,3)

// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:// Input: areaOfHexagon(10) ––> Output: 259.80
 
 let s ;
 function areaOfHexagonre(s){
	const area = ((3 * Math.sqrt(3) * (s * s)) / 2); 
	return area;   

 }
areaOfHexagonre(10)

// Given a sentence, your functions should return the number of words in the sentence.
// Example:// Input: noOfWords(We are neoGrammers) ––> Output: 3
let my_string =''
function wordCount(my_string){
	let wordCount = (my_string.split(" ").length);
	return wordCount
}
wordCount('We are neoGrammers')

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

function min(...args) {
    var minValue = args[0];
    for (var i = 1; i < args.length; i++) {
        if (minValue > args[i]) {
            minValue = args[i];
        }
    }
    return minValue;
}

min(1,2,3,4444,5,78,-1)
