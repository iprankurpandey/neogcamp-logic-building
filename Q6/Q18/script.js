const inputName = document.querySelector('#name')
const unitTestMark = document.querySelector('#unittest')
const preFinalMark = document.querySelector('#prefinal')
const finalMark = document.querySelector('#finalmarks')
const calculateButton = document.querySelector('#calculate')
const outputBox = document.querySelector('#output')


const studentOne = {
    inputName : inputName.value,
    unitTestMark: unitTestMark.value,
    preFinalMark:preFinalMark.value,
    finalMark:finalMark.value

}
const studentTwo = {
    inputName : inputName.value,
    unitTestMark: unitTestMark.value,
    preFinalMark:preFinalMark.value,
    finalMark:finalMark.value

}

function add(){
const students = [studentOne,studentTwo]

for(i=0;i<students.length;i++)
{
    console.log(students[i])
    outputBox.innerHTML= students[i]
}
}

calculateButton.addEventListener('click',add)


// ref https://jsbin.com/ufanep/2/edit?html,css,js,output