function gerarNumerosEntre(min, max, numrerosProibidos) {
    if(min > max) {
        //destructuring à esquerda, array à direita
        [min, max] = [max, min]
    }
    return new Promise((resolve, reject) => {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numrerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtDeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtDeNumeros).fill()) {
            //await deve ser no método específico que retorna promise
           numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 10) {
            throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtDeNumeros, tentativas + 1)
        }
    }
}

// reject acontece se não for tratado ao final da função, ou se for tratado
//com invocação do reject ou throw num try catch

gerarMegaSena(8)
        .then(console.log)
        .catch(console.log)