const textbox = document.querySelector('#textbox')
const outputbox = document.querySelector('#outputbox')
const button = document.querySelector('#button')
const reset = document.querySelector('#reset')

const passwordCheck = textbox.value
console.log(passwordCheck)

checker = () => {
    if ((textbox.value).length >= 10) {

        outputbox.innerHTML = 'success'
        textbox.style.color = 'green'
        outputbox.style.color = 'green'
    } else {
        outputbox.innerHTML = 'erroorr...'
        button.disabled = 'true'
        textbox.style.color = 'red'
        outputbox.style.color = 'red'

    }
}

function update() {
    textbox.value = ''
    outputbox.value = ''
    button.disabled = 'false'
    window.location.reload()

}      

button.addEventListener('click', checker)
reset.addEventListener('click', update)