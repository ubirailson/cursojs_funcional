const { Observable, subscribeOn } = require('rxjs')
//importar noop seria útil para declarar no local da função de tratamento de erro para que não
//se faça nada

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso!')
    
    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que problema?!?')
    }
})

//chamada ao subscribe chamando 3 funções, uma pra cada objetivo
obs.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`),
    () => console.log('Chamado no Complete!')
)

//chamada ao subscribe passando objeto contendo os 3 métodos
obs.subscribe(
    {
        next(valor) {
            console.log(`Valor: ${valor}`)
        },
        error(msg){
            console.log(`Erro: ${msg}`)
        },
        complete() {
            console.log('Chamado no Complete!')
        }
    }
)

//No caso da promise é como se o resolve fosse next e complete do RxJS
//error do RxJS é equivalente ao reject da Promise