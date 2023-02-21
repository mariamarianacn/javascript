function clicar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let resp = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || fim.value.length == 0){
        window.alert('ERRO!')
    } else{
        resp.innerHTML = 'Contando: '

        let i = Number(ini.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){ // do 1 até 10
            for (let c = i; c <= f ; c += p) { 
                resp.innerHTML += ` ${c}  \u{1F449}` 
            }
        } else { // do 10 até 1
            for (let c; c >= f; c -= p){
                resp.innerHTML = ` ${c}  \u{1F449}`
            }
            resp.innerHTML += ` Fim!`
        }
    }
} 