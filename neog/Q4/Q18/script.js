const H1 = document.querySelector('#H1')
const H2 = document.querySelector('#H2')
const H3 = document.querySelector('#H3')
const text = document.querySelector('#text')
const inputtext = document.querySelector('#inputtext')

function headingOne() {
    inputtext.innerHTML = text.value
    inputtext.style.fontSize = '2em'

}

function headingTwo() {
    inputtext.innerHTML = text.value
    inputtext.style.fontSize = '1.5em'

}

function headingThree() {
    inputtext.innerHTML = text.value
    inputtext.style.fontSize = '1.17em'
}

H1.addEventListener('click', headingOne)
H2.addEventListener('click', headingTwo)
H3.addEventListener('click', headingThree)