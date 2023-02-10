var dia = new Date()
var diaSem = dia.getDay() // dia da semana // PRECISA do ()

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('hoje é domingo')
        break
    case 1:
        console.log('hoje é segunda')
        break
    case 2:
        console.log('hoje é terça')
        break
    case 3:
        console.log('hoje é quarta')
        break
    case 4:
        console.log('hoje é quinta')
        break
    case 5:
        console.log('hoje é sexta')
        break
    case 6:
        console.log('hoje é sábado') 
        break   
    default:
        console.log('[ERRO]. Não foi possível identificar o dia')    


}

/*
domingo- 0
segunda- 1
terça- 2
quarta- 3
quinta- 4
sexta- 5
sabado- 6

esses são os dias da semana para o javascript 
*/ 