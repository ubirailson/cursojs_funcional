const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')


//forma de dizer que parâmetro não importa: "_". É uma convenção
//function exibirConteudo(err, conteudo) {
function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

console.log('Início...')
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')


console.log('Início Sync...')
const conteudoSync = fs.readFileSync(caminho)
console.log(conteudoSync.toString())
console.log('Fim Sync...')