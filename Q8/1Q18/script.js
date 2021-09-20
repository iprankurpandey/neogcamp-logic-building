const input = document.querySelector('#input')

const button = document.querySelector('#button')

const output = document.querySelector('#output')

const url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text='

function geturl() {

  try {
    fetch(url + input.value)
      .then((response) => response.text())
      .then((data) =>
        output.innerHTML = 'this is response : ' + data);
  } catch (error) {
    ((error) => {
      console.error('Error:', error);
    });
  }

}

button.addEventListener('click', geturl)