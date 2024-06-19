let a = 1
//ja tenho o valor à disposição
console.log(a)


console.log(typeof Promise) // é uma function

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)    
}) 

console.log(typeof p) // é um object, posto que dei um new na Promise
//Para acessar o valor contido na promessa:
p.then(function(valorRelizado){
    console.log(valorRelizado)
})

//No caso acima, por exemplo, a function recebe o retorno de cumprirPromessa com o nome "valorRealizado"
//e só será executada quando o valor for cumprido/realizado

//Pode ser reescrito como:
p.then(valorRelizado => console.log(valorRelizado))


let p2 = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])    
}) 

p2.then(valorRelizado => {
    console.log(valorRelizado)
    return valorRelizado[0]
})
.then(primeiroValor => {
    console.log(primeiroValor)
    return primeiroValor[0]
})
.then(letra => {
    console.log(letra)
    return letra.toLowerCase()
})
.then(letraMinuscula => console.log(letraMinuscula))