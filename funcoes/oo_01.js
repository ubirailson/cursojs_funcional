//função construtora
function Produto(nome, preco, desc = 0.15) {
    //visibilidade fica pública
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }

    //fica privado, visível apenas na função
    //undefine se tentar acessar de fora
    let privado = 3
}

//function
console.log(typeof Produto)
console.log(typeof Promise)
console.log(typeof Object)
const p1 = new Produto('Caneta', 8.59)
console.log(p1)

//object
console.log(typeof p1)
const p2 = new Produto('Geladeira', 2345.98)
console.log(p2)
console.log(p2.preco)
console.log(p2.precoFinal())