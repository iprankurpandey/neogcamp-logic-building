const God1 = {
    Name: 'ram',
    power: '2500',
    yuga: 'treta'
}

const God2 = {
    Name: 'krishna',
    power: '2325',
    yuga: 'dwapar'
}


power=(God1, God2)=>
{
    if (Number(God1.power) > Number(God2.power))
    {
        console.log('God 1 ,has more power')
    } 
    else 
    {
        console.log('God 2 ,has more power')
    }
}

power(God1,God2)
