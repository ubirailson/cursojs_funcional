/*function composicao(fn1, fn2) {
    return function(valor) {
        return fn2(fn1(valor))
    }
}*/

function composicao(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
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
    return texto.split('').join(' ')
}

const exagerado = composicao(
    gritar, enfatizar, tornarLento
)

const umPoucoMenosExagerado = composicao(
    gritar, enfatizar
)

const resultado =  exagerado('PARA')
const resultado2 =  exagerado('COMEÇA')
const resultado3 = umPoucoMenosExagerado('Ó o muro')

console.log(resultado)
console.log(resultado2)
console.log(resultado3)