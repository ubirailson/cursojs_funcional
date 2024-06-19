const nums = [1,2,3,4,5]
//omiti os outros parâmetros esperados pelo map na função callback
const dobro = n => n * 2
console.log(nums.map(dobro))


//explicitei índice e estou usando-o
const dobroComIndice = (n, i) => n * 2 + i
console.log(nums.map(dobroComIndice))

//explicitei índice e estou usando-o. Usei os 3 parâmetros esperados
const dobroComIndiceMaisArray = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobroComIndiceMaisArray))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)

console.log(nomes, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const getNome = item => item.nome

const getTotal = item => item.qtde * item.preco

const totais  = carrinho.map(getTotal)
console.log(totais)

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i< this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const totaisMeuMap  = carrinho.meuMap(getTotal)
console.log(totaisMeuMap)