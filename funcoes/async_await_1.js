//é necessário criar funcão assincrona para usar await nela

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

//esperarPor(2000)
//    .then(() => console.log('Executando promessa 1...'))
//    .then(esperarPor)
//    .then(() => console.log('Executando promessa 2...'))
//    .then(esperarPor)    
//    .then(() => console.log('Executando promessa 3...'))

//Async/await parece síncrono, embora seja assíncrono
//Em vez de chamar função then, ele ficará parado esperando execução e só irá pra próxima linha
//quando terminar execução
//Sempre que uso função que retorna Promise posso colocar await

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor() 
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
    return valor + 3
}

//entre assíncronos tudo bem usar await. Ao sair deste mundo
//assíncrono, é necessário usar o then para acessar o valor
//mudei executar para ser um return, necessariamente precisei
//de then

executar().then(console.log)