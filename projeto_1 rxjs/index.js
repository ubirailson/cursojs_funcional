const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const { toArray, map } = require('rxjs/operators')
const caminho = path.join(__dirname, '..', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', 
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

function agruparElementosParaObjeto(palavras) {
    return palavras.reduce((agrupamento, palavra) => {
        const p = palavra.toLowerCase()

//let produto = { nome: 'Caneta', preco: 2.35 }
//Posso acessar das seguintes formas:
//produto.nome
//produto['nome']
//uso isso abaixo:

        if (agrupamento[p]) {
            agrupamento[p] += 1
        } else {
            agrupamento[p] = 1
        }
        return agrupamento
    }, {})
}

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosIniciarComNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosIniciarComNumero(),
        toArray(),
        fn.agruparElementos(),
        map(array => _.sortBy(array, el => -el.qtde)),
    )
    .subscribe(console.log)