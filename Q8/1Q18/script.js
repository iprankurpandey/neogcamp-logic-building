const input = document.querySelector('#input')
console.log(input.value)
const button = document.querySelector('#button')
const output = document.querySelector('#output')
const url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=' + input.value;

function geturl() {
    fetch(url)
        .then(response => response.text())
        .then(data =>
            console.log(data));
}

button.addEventListener('click', geturl)