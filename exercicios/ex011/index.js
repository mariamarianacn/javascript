var idade = 45
console.log(`Sua idade é: ${idade}`)
if (idade < 16){
    console.log('não vota')
} else if (idade < 18 || idade > 67) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatório')
}