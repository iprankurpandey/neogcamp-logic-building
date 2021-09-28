
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