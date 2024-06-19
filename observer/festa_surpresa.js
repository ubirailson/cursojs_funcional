//Observer -> interessado
//Subject -> aquele que monitora e avisa
//Padrão orientado a evento

//Observer se registra no subject pra notificar que tem interesse em ser informsdo do evento
//Pode haver N observers pra um subject
//Subject detecta evento e notifica todos os observers

const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve =>{
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

//obterResposta('Esse é um teste? ').then(console.log)

//observer
function namorada() {
    setTimeout(() => {
        console.log('N: apagar as luzes')
        console.log('N: pedir silêncio')
        console.log('N: gritar Surpresa')
    }, 2000)
}

//observer
function sindico(evento) {
    console.log(`Evento: ${evento.resp}`)
    console.log(`Data: ${evento.data}`)
    setTimeout(() => {
        console.log('S: Monitorando barulho')
    }, 1000)
}

//subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q) ')
        if (resp.toLowerCase() ==='s') {
            //observadores são notificados
            (interessados || []).forEach(obs =>  obs({resp, data: Date.now()}))
        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}


porteiro([namorada, sindico])


/*
Chamada da função -> Registrei dois observadores
Os observadores são:namorada e sindico
Subject é o porteiro
[namorada, sindico]
*/