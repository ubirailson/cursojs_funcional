//Arrow function
const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

//somente uma linha não tem return
const saudacao = (nome) => "Fala " + nome + "!!!"
//somente um parametro não precisa de parentesis
//const saudacao =(nome => "Fala " + nome + "!!!"

//interpolação
//const saudacao =(nome => `Fala ${nome} !!!`
console.log(saudacao('Maria'))
console.log(saudacao())

//array function com corpo(mais de uma expressão) e parâmetros variáveis. Converte a lista de 
//parâmetros em um array
const somar = (...numeros) => {
    //typeof de array dá object
    //testando se é array
    console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(2, 4, 7))
console.log(somar(2, 4, 7, 10, 11))

//função de função com arrow function
const potenciaFuncaoDeFuncao = (base) => {
    return expoente => Math.pow(base, expoente)
}
console.log(potenciaFuncaoDeFuncao(2)(4))

//this se usar arrow function vai dar undefined
Array.prototype.log = function() {
    console.log(this)
}

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

const numeros = [1, 2, 3]
numeros.log()
numeros.ultimo()