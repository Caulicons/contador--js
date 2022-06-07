let inic = 5
let fim = 12


if (inic.value < 0 || inic.value > fim.value) {
    console.log('Erro')
} else {
    while (inic < fim) {
        console.log(`${inic.value}`)
        inic++
    }
}
