const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', 
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
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
    //.then(caminhos => caminhos.filter(fn.possuiExtensaoSrt))
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSrt => fn.lerArquivos(arquivosSrt))
    .then(fn.mesclarElementos)
    .then(linhas => fn.separarPor('\n', linhas))
    .then(linhas => fn.removerElementosSeVazio(linhas))
    .then(linhas => fn.removerElementosSeIncluir('-->', linhas))
    .then(linhas => fn.removerElementosSeApenasNumero(linhas))
    .then(linhas => fn.removerSimbolos(simbolos, linhas))
    .then(fn.mesclarElementos)
    .then(linhas => fn.separarPor(' ', linhas))
    .then(linhas => fn.removerElementosSeVazio(linhas))
    .then(linhas => fn.removerElementosSeApenasNumero(linhas))
    .then(fn.agruparElementosParaArray)
    .then(arrayDeElementos => fn.ordenarPorAtributoNumerico('qtde', arrayDeElementos, 'desc'))
    .then(array => console.log(array, Object.keys(array).length))
    