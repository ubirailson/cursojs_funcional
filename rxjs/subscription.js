//esperar 3000
// gerar números de 500
const { timer } = require('rxjs')

const obs = timer(3000, 500)
const sub1 = obs.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`)
})

const sub2 = obs.subscribe(num => {
    console.log(`#2 Gerou o número ${num}`)
})

//Posso adicionar uma inscrição que é filha de outra
//Ao parar o pai, paro os filhos
sub1.add(sub2)

//Depois de 5000 chamar unsubscribe
setTimeout(() => {
    sub1.unsubscribe()
    //sub2.unsubscribe()
}, 5000)