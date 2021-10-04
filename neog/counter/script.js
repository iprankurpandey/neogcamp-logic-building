const counter = document.querySelector('#counter')
const text = document.querySelector('#text')
const resetButton = document.querySelector('#reset')
let count=0

counterApp=()=>{

count++
text.innerHTML= `the count is : ${count}`

if(count%2==0){
    document.body.style.backgroundColor= 'red'
}
else{
    document.body.style.backgroundColor= 'green'   
}
}

reset=()=>{
    count=0
    document.body.style.backgroundColor= 'white' 
    text.innerHTML= `the count is : ${count}`
}

counter.addEventListener('click',counterApp)
resetButton.addEventListener('click',reset)