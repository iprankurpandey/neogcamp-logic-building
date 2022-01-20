// q1 - output 
if (true) {
    let a = 2
    // var a = 2;
  }
  console.log(a)
//   output - a is not defined .
//   reason 
// as let and const  are block scoped, they are not accessible outside the block, in this fuctionn we have defined let a=2 ,therefore it is not accesable outside the block and throwing error.

// q2 - output
let a = 42
{
  let a = 100
}
console.log(a)
// output - 42
// reason - as let and const are block scoped, they are not accessible outside the block, in this fuctionn we have defined let a=42 which is declared globally,therefore it is accesable outside the block.

// q3 - output
let a = 100
function App() {
    console.log('1', a)
    let a = 42
    console.log('2', a)
    {
      let a = 100
    }
    console.log('3', a)
  }
//   output - undefined
// reason - as let and const are block scoped, they are not accessible outside the block, in this program we have defined let a=100 which is declared globally but if we closely moniter the function we have not defined anything for that global variable ,rest all the variables are declared in the function scope and dont calling the fucntion won't produce any output.

// q4 - output
let a = 100
function App() {
  a = 42
  console.log('1', a)
}
//  output - undeiined
// reason - as let and const are block scoped, they are not accessible outside the block, in this program we have defined let a=100 which is declared globally but if we closely moniter the function we have not defined anything for that global variable ,rest all the variables are declared in the function scope and dont calling the fucntion won't produce any output.

// q5 - output
function something() {
    console.log(a)
    let a = 2
  }
  
  something()
//   output - ReferenceError: a is not defined
// reason - in this program we printing the value of the variable first, and later we are trying to define the variable a,therefore it is throwing error. this is the part of hoisting.variable delcared with let and const are not hoisted but not initialized with a default value.Accessing a let or const variable before it's declared will result in a ReferenceError:

// q6 - output
function something() {
    // a = undefined
    console.log(a)
    var a = 2
  }
  
  something()
//   output - undefined
// reason - in this program we printing the value of the variable first, and later we are trying to define the variable a,therefore it is throwing error. this is the part of hoisting When the interpreter hoists a variable declared with var, it initializes its value to undefined 

// q7 - output
const tanay = 2
tanay = 3
// output - TypeError: Assignment to constant variable.
// reason - In JS valuses assigned to const cannot be redeclared .therefore Error.

// 