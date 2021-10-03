const button = document.querySelector('#count')
const reset = document.querySelector('#reset')
const text = document.querySelector('#text')
let counter = 0

function count() {
    counter++
    text.innerHTML = `the count is : ${counter}`

    if (counter % 2 == 0) {
        document.body.style.backgroundColor = 'green'
    } else if (counter % 3 == 0) {
        document.body.style.backgroundColor = 'red'
    } else if (counter % 5 == 0) {
        document.body.style.backgroundColor = 'yellow'
    } else {
        document.body.style.backgroundColor = 'orange'
    }
}

function resetbutton() {
    counter = +0
    text.innerHTML = `the count is : ${counter}`
    document.body.style.backgroundColor = 'white'
}
reset.addEventListener('click', resetbutton)
button.addEventListener('click', count)