const input = document.querySelector('#input')

const button = document.querySelector('#button')

const output = document.querySelector('#output')

const url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=' 

function geturl() {
  fetch(url + input.value)
    .then((response) => response.text())
    .then((data) =>
    output.innerHTML = data);
}

button.addEventListener('click', geturl)