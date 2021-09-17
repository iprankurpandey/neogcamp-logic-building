const button = document.querySelector('#loaded')
const text = document.querySelector('#text')
const image =  document.querySelector('#image')
button.addEventListener('click',loading)

function loading(){
   if(text.style.display === 'none')  {
    text.style.display ='block'
   }
   else{
    text.style.display ='none'
   }
}

// function loading(){
//     if(image.style.display === 'none')  {
//      image.style.display ='block'
//      document.body.style.backgroundColor = "red";
//     }
//     else{
//      image.style.display ='none'
//     }
//  }