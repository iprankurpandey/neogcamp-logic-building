const input = document.querySelector('#input')
const button = document.querySelector('#button')
const output = document.querySelector('#output')
// const url = 'https://api.funtranslations.com/translate/minion.json?text=' + input.value
const url = 'https://unitube-server.herokuapp.com/playlists' //401 Error
// const url = 'https://jsonplaceholder.typicode.com/dummyUsers' //404 Error


function geturl() {

    fetch(url)
        .then(response => response.text()) // convert to json
        .then(text => output.innerHTML = text) //print data to console
        .catch(error => output.innerHTML = 'Request Failed', error); // Catch errors
}
button.addEventListener('click', geturl)