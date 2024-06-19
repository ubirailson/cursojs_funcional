//Comparação estrita '1' === 1 é false, pois leva em consideração o tipo
//Comparação flexível '1' == 1 é true, pois está comparando valores

function bomDia() {
    console.log('Bom dia')
}


const boaTarde = function () {
    console.log('Boa tarde')
}

//1) Passar função como parâmetro para outra função
function executarQualquerFuncao(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerFuncao(3)
executarQualquerFuncao(bomDia)
executarQualquerFuncao(boaTarde)


//2) Retornar função a partir de outra função

function potencia(base, expoente) {
    return Math.pow(base, expoente)
}

const bits8 = potencia(2, 8)

console.log(bits8)


function potenciaFuncaoDeFuncao(base) {
    return function(expoente) {
        return Math.pow(base, expoente);
    }
}

const potenciaDe2 = potenciaFuncaoDeFuncao(2)

console.log(potenciaDe2(8))
console.log(potenciaFuncaoDeFuncao(2)(4))


