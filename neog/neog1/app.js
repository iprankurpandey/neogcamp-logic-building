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

// q8 - output
const obj = { a: 1, b: 2 }
obj.a = 22
// output - 22
// reasone -constants are used to make "variables which cannot be re-assigned new content".The const keyword makes a variable itself immutable, not its assigned content. When the content is an object, this means the object itself can still be altered.Therefore, it's possible to change the content of the object that is declared with const variable, but you cannot assign a new object to a const variable.

// q9 - output
const obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obj = obj2
// output - TypeError: Assignment to constant variable.
// reason -constants are used to make "variables which cannot be re-assigned new content".The const keyword makes a variable itself immutable, not its assigned content. When the content is an object, this means the object itself can still be altered.Therefore, it's possible to change the content of the object that is declared with const variable, but you cannot assign a new object to a const variable.

// q10 - output
const array = [1, 2, 3, 4]
array.push(55)
// output - 55
// reason - It does NOT define a constant array. It defines a constant reference to an array.Because of this, we can still change the elements of a constant array.

// q11 - output


// ES5 function
function getNum() {
  return 2
}

// with no parameter ES6 function
const getNum = () => 2

// with no parameter
const isOne = (num) => num == 1
// Calling the function
console.log(isOne(12))
// output - false
