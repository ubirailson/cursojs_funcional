class Produto {
    constructor(nome, preco, desc = 0.5) {
        //this.nome = nome
        //forma de fazer getter
        this._nome = nome

        this.preco = preco
        this.desc = desc
    }
    get nome() {
        return `O produto é ${this._nome}`
    }
    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    //se eu usar get, vai ser invocado como atributo:
    //get precoFinal() {
    precoFinal() {
        return this.preco * (1-this.desc)
    }
}

const p1 = new Produto('Caneta', 8.59)
p1.nome = 'caneta'
console.log(p1)

//object
console.log(typeof p1)
const p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.preco)
//se eu usar get, vai ser invocado como atributo:
//console.log(p2.precoFinal)
console.log(p2.precoFinal())

//function
console.log(typeof Produto)