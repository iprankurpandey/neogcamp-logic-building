const plus = document.querySelector('#button1')
const minus  =  document.querySelector('#button2')
const reset  =  document.querySelector('#reset')
const text =  document.querySelector('#text')

function plus1(){

    text.style.fontSize = '4rem'
}

function minus1(){

    text.style.fontSize = '2rem'
}
function reset1(){

    text.style.fontSize = ''
}

plus.addEventListener('click',plus1)

minus.addEventListener('click',minus1)

reset.addEventListener('click',reset1)
