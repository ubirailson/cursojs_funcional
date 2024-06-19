const fs = require('fs')
const path = require('path')

/*function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (e) {
            reject(e)
        }
    })
}*/

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const arquivos = fs.readdirSync(caminho)
            const arquivosCompletos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivosCompletos)
        } catch (e) {
            reject(e)
        }
    })
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch (e) {
            reject(e)
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}


//const possuiExtensaoSrt = path => path.includes('.srt')

//function possuiExtensaoSrt(path) {
//    if (path.includes('.srt')) {
//        return true
//    } else {
//        return false
//    }
//}
const elementosTerminadosCom = (array, padraoTextual) => array.filter(el => el.endsWith(padraoTextual))

function removerElementosSeVazio(array) {
    return array.filter(el => el.trim())
}

const removerElementosSeIncluir = (padraoTextual, array) => array.filter(el => !el.includes(padraoTextual))

const removerElementosSeApenasNumero = (array) => {
    return array.filter(el => {
        const num = parseInt(el.trim())
        //NaN === NaN dá sempre false, então a expressão abaixo significa que deu NaN
        return num !== num
        //outra forma
        //return !(num != 0 && !!num)
    })
}

/*const removerSimbolos = (simbolos, array) => {
    return array.map(el => {
        let textoSemSimbolos = el
        simbolos.forEach(simbolo => {
            textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
        })
        return textoSemSimbolos
    })
}*/

const removerSimbolos = (simbolos, array) => {
    return array.map(el => {
        return simbolos.reduce((acc, simbolo) => {
            return acc.split(simbolo).join('')
        }, el)
    })
}

const mesclarElementos = conteudos => conteudos.join(' ')

const separarPor = (simbolo, texto) => texto.split(simbolo)

function agruparElementosParaArray(palavras) {
    //Object.values converterá o objeto de elementos em array de elementos
    return Object.values(palavras.reduce((agrupamento, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = agrupamento[el] ? agrupamento[el].qtde + 1 : 1
        agrupamento[el] = { elemento: el, qtde: qtde}
        return agrupamento
    }, {}))
}

function ordenarPorAtributoNumerico(attr, array, ordem = 'asc') {
    const asc = (o1, o2) => o1[attr] - o2[attr]
    const desc = (o1, o2) => o2[attr] - o1[attr]
    return [...array].sort(ordem === 'asc' ? asc: desc)
}

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

module.exports = {
    lerDiretorio
    //lerDiretorio: lerDiretorio
    , composicao
    , elementosTerminadosCom
    , lerArquivo
    , lerArquivos
    , removerElementosSeVazio: removerElementosSeVazio
    , removerElementosSeIncluir: removerElementosSeIncluir
    , removerElementosSeApenasNumero: removerElementosSeApenasNumero
    , agruparElementosParaArray
    , removerSimbolos
    , mesclarElementos
    , separarPor
    , agruparElementosParaArray
    , ordenarPorAtributoNumerico
    // possuiExtensaoSrt
}

