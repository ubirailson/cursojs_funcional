const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

//1. elementos fragil true
//2. pegar quantidade * preco -> total
//3. gerar media dos totais 

getFrageis = (el) => el.fragil

console.log(carrinho.filter(getFrageis));

getTotalPorProduto = (el) => el.qtde * el.preco

console.log(carrinho.map(getTotalPorProduto));

getMediaGlobal = (acc, el, idx, src) => {
    acc = acc + el
//    console.log(idx, src.length)
    if (idx === src.length - 1) {
        acc = acc / src.length
    }
    return acc
}

console.log(carrinho.map(getTotalPorProduto).reduce(getMediaGlobal))

const getMediaGlobalMelhorada = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {qtde: novaQtde, 
            total: novoTotal, 
            media: novoTotal / novaQtde}
}

const mediaInicial = {qtde: 0, total: 0, media: 0}

const media = carrinho.filter(getFrageis)
        .map(getTotalPorProduto)
        .reduce(getMediaGlobalMelhorada, mediaInicial)

console.log(media)