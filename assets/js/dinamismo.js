function resultado(){
    let ini = document.getElementById('inicio')
    let fim = document.querySelector('.fin')
    let pas = document.getElementById('passos')
    let res = document.querySelector('#res')
 
    
    if (ini.value.length == 0 || fim.value.length == 0 ){
        res.innerHTML = 'Impossível Contar'
    } else {
        res.innerHTML = 'Contanto: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO = 1')
            p = 1
        }

        if (i < f){
            //Contagem Crescente 
            for(let c = i ; c <= f; c+=p ) {
             res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem Decrescente
            for(let c = i ; c >= f ; c -= p) {
                res.innerHTML +=`${c} \u{1F449}`
            }
        }
        res.innerHTML += `⛿`
        } 
    }

    document.addEventListener("keypress", (event) => {
        console.log(event.key);
        if(event.key === 'Enter') 
                resultado()
    })