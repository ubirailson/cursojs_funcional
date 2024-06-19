// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada sem efeitos colaterais observáveis

const PI = 3.14

//Pura ou impura? Impura porque PI está externo à função
function areaCirc(raio) {
    return raio * raio * PI
}

//mesmo neste caso isso ocorr. Muito embora seja uma impureza estável
function areaCirc2(raio) {
    return raio * raio * Math.PI
}

console.log(areaCirc(10))
console.log(areaCirc2(10))

//Pura. Passei PI por parâmetro
function areaCircPura(raio, pi) {
    return raio * raio * pi
}