//Há valor aleatório como dependência externa
//impura
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min 
}
console.log(gerarNumeroAleatorio(5, 10))
console.log(gerarNumeroAleatorio(5, 50))
console.log(gerarNumeroAleatorio(5, 100))
console.log(gerarNumeroAleatorio(5, 100))
console.log(gerarNumeroAleatorio(5, 100))