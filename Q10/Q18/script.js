const input = document.querySelector('#input')
const button = document.querySelector('#button')
const output = document.querySelector('#output')
// const url = 'https://api.funtranslations.com/translate/minion.json?text=' + input.value
// const url = 'https://unitube-server.herokuapp.com/playlists' //401 Error
const url = 'https://jsonplaceholder.typicode.com/dummyUsers' //404 Error

function geturl() {

    fetch(url + input.value)

        .then((response) => {
            const statusCode = response.status;
            switch (statusCode) {
                case 200:
                    return output.innerHTML = response.text();
                case 404:
                    throw "page not found";
                case 401:
                    throw "you are not logged in";
            }
        })

        .then((text) => (output.innerHTML = text)) //print data to console
        .catch((error) => (output.innerHTML = "Request Failed due to " + error));

}
button.addEventListener('click', geturl)