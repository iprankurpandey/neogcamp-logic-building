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
    const god1Power= (God1.Name).length*35+Number(God1.power)

    const god2Power= (God2.Name).length*35+Number(God2.power)

    if (Number(god1Power) > Number(god2Power))
    {
        console.log('God 1 ,has more power')
    } 
    else 
    {
        console.log('God 2 ,has more power')
    }
}

power(God1,God2)
