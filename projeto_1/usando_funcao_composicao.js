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

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    arquivos => fn.elementosTerminadosCom(arquivos, '.srt'),
    arquivosSrt => fn.lerArquivos(arquivosSrt),
    fn.mesclarElementos,
    linhas => fn.separarPor('\n', linhas),
    linhas => fn.removerElementosSeVazio(linhas),
    linhas => fn.removerElementosSeIncluir('-->', linhas),
    linhas => fn.removerElementosSeApenasNumero(linhas),
    linhas => fn.removerSimbolos(simbolos, linhas),
    fn.mesclarElementos,
    linhas => fn.separarPor(' ', linhas),
    linhas => fn.removerElementosSeVazio(linhas),
    linhas => fn.removerElementosSeApenasNumero(linhas),
    fn.agruparElementosParaArray,
    arrayDeElementos => fn.ordenarPorAtributoNumerico('qtde', arrayDeElementos, 'desc') 
)

palavrasMaisUsadas(caminho).then(array => console.log(array, Object.keys(array).length))

//outra forma de invocar usando currying
/* fn.composicao(
    fn.lerDiretorio, 
    console.log
)(caminho)

 */