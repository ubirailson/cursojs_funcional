//função construtora
function Produto(nome, preco, desc = 0.15) {
    //visibilidade fica pública
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this._desc)
    }

    //fica privado, visível apenas na função
    //undefine se tentar acessar de fora
    let privado = 3
}

Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc
    },
    set: function(novoDesc) {
        if(novoDesc >= 0 && novoDesc <=1) {
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}%`
    }
})

const p1 = new Produto('Caneta', 8.59)
console.log(p1)

p1.log()
const p2 = new Produto('Geladeira', 2345.98)
p2.desc = 0.99
console.log(p2.desc)
console.log(p2.descString)
