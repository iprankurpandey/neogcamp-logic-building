// varibale and data types 

// let x : 10 
// let x : 20
// console.log(x)

// var  x : 10 
// var  x : 20
// console.log(x)

// const x : 10 
// const x : 20
// console.log(x)

// const number : [1,2,3,4,5,6]
// number [0] : 8
// console.log(number)
// number.push(17)
// console.log(number)

/* objects*/
// const car : {
//     type:"Fiat", 
//     model:"500", 
//     color:"white",

// };

// car.color : 'red'
// car.owner : 'lala'

// console.table(car)

// const person : {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// console.table(person.fullName)


const cars ={
    comp : 'tata',
    color : 'blue',
    year : 2009,
    fullname : function(){
        return this.comp+''+this.color+''+this.year
    }
}

console.table(cars)