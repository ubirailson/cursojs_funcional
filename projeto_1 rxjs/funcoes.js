const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {                
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

function lerArquivo() {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, { 
                    encoding: 'utf-8'
                })
                subscriber.next(conteudo.toString())
            } catch (error) {
                subscriber.error()
            }
        }
    }))
}

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(padraoTextual)) {
                subscriber.next(texto)
            }
        }
    }))

}

function removerElementosSeVazio() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.trim()) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerElementosIniciarComNumero() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const num = parseInt(texto.trim())
            //NaN === NaN dá sempre false, então a expressão abaixo significa que deu NaN
            if(num !== num) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerSimbolos(simbolos) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce(
                (acc, simbolo) => {
                    return acc.split(simbolo).join('')
                }, texto)
            subscriber.next(textoSemSimbolos)
        }
    }))
}

function separarPor(simbolo) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
}

function agruparElementos() {
    return createPipeableOperator(subscriber => ({
        next(palavras) {
            const agrupado = Object.values(
                palavras.reduce((agrupamento, palavra) => {
                    const el = palavra.toLowerCase()
                    const qtde = agrupamento[el] ? agrupamento[el].qtde + 1 : 1
                    agrupamento[el] = { elemento: el, qtde: qtde}
                    return agrupamento
                }, {}))
                subscriber.next(agrupado)
        }
    }))
}

function createPipeableOperator(operatorFn) {
    return function(source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            })
        })
    }
}

module.exports = {
    lerDiretorio
    , elementosTerminadosCom
    , lerArquivo
    , removerElementosSeVazio: removerElementosSeVazio
    , removerElementosIniciarComNumero: removerElementosIniciarComNumero
    , agruparElementos
    , removerSimbolos
    , separarPor
}

