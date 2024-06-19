
//Function declaration, função normal
function bomDia() {
    console.log('Teste declaration')
}

bomDia()

//Function expression, função anônima dentro de variável
//Poderia ser let, var, const
const boaTarde = function () {
    console.log('Teste expression');
}

boaTarde()

//parâmetro padrão usado em "b"
function somar(a, b = 0) {
    return a + b
}

let resultado = somar(3, 4)

console.log(resultado)

resultado = somar(3)
console.log(resultado)