function textoComTamanhoEntre(min) {
    return function (max) {
        return function(erro) {
            return function(texto) {
                // Lazy evaluation
                const tamanho = (texto || '').trim().length
            
                if (tamanho < min || tamanho > max) {
                    throw erro
                }

            }

        }
    }
}

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }

textoComTamanhoEntre(4)(255)('Nome inválido')(p1.nome)

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)

forcarTamanhoPadrao('Nome inválido')(p1.nome)

const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')

forcarNomeProdutoValido(p1.nome)