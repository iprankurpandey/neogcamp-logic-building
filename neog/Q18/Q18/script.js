const input  =  require ('readline-sync')
const newsInput = input.question('enter your news : ')
const newsSource = input.question('enter news source ')

if (newsSource === 'facebook' || 'whastapp' || 'telegram')
{

	console.log('dont believe things on FB and Whatsapp')
}
else{
	console.log('news is being evaulated')
}