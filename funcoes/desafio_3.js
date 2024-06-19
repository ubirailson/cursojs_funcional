//Minha resposta de leitura de arquivo encapsulada em promise
const retornarArquivo = (pathArquivo) => {
    return new Promise(arquivo => {
        const fs = require('fs')
        const path = require('path')
        const caminho = path.join(__dirname, pathArquivo)
        arquivo(fs.readFileSync(caminho))
    })
}

retornarArquivo('dados.txt').then((arquivo) => console.log(arquivo.toString()))

const fs = require('fs')
const path = require('path')

//Resposta do instrutor
function lerArquivo(caminho) {
    return new Promise(resolve => {
        
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

//lerArquivo(caminho).then(conteudo => console.log(conteudo))

lerArquivo(caminho).then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(','))
.then(conteudo => console.log(conteudo))
                    //.then(conteudo => console.log(conteudo))
                    //.then(conteudo => `O valor final é ${conteudo}`)
                    //.then(conteudo => console.log(conteudo))