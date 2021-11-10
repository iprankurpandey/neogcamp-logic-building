const counter= document.querySelector('#button1')
const text = document.querySelector('#text')
let count = 0;

function count1(){

count++

text.innerHTML = `the counter is : ${count}`
}

counter.addEventListener('click',count1)
