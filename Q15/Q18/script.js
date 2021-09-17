const God1 = {
    Name: 'ram',
    age: '20500',
    yuga: 'treta'
}

const God2 = {
    Name: 'krishna',
    age: '3010',
    yuga: 'dwapar'
}

console.log(God1.age)
console.log(God2.age)

age=(God1, God2)=>
{
    if (Number(God1.age) > Number(God2.age))
    {
        console.log('God 1 ,age is greater')
    } 
    else 
    {
        console.log('God 2 ,age is greater')
    }
}

age(God1,God2)
