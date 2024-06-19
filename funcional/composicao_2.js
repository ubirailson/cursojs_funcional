/*function composicao(fn1, fn2) {
    return function(valor) {
        return fn2(fn1(valor))
    }
}*/

function composicao(...fns) {
    return function(valor) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!`
}

function tornarLento(texto) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(texto.split('').join(' '))
        }, 3000)
    })
}

const exagerado = composicao(
    gritar, enfatizar, tornarLento
)

const umPoucoMenosExagerado = composicao(
    gritar, enfatizar
)

exagerado('PARA').then(console.log)
exagerado('COMEÇA').then(console.log)
umPoucoMenosExagerado('Ó o muro').then(console.log)

//Teste se objeto é Array: Array.isArray([])
//Teste se objeto é Promise: Promice.resolve(objeto)
//Exemplo: Promise.resolve(2) === 2 -> resulta em false
//Exemplo: 
//const p = new Promise((){})
//Promise.resolve(p) === p -> resulta em true