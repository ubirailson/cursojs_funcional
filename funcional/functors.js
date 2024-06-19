//Functors são objetos que implementam a função MAP
//Também é um wrapper de um valor

//Array é um exemplo de functor

//um functor retorna objeto do mesmo tipo

const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums.map(el => el + 10).map(el => el * 2)
console.log(nums, novosNums)

function TipoSeguro(valor) {
    return {
        valor: valor,
        invalido() {
          return this.valor ===  null || this.valor === undefined
        },
        map(fn) {
            if(this.invalido()) {
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        },
        flatMap(fn) {
            if(this.invalido()) {
                return null
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        }
    }
}
const original = 'Esse é um texto'
const alterado = TipoSeguro(original).map(t => t.toUpperCase())
.map(t => `${t}!!!`)
.map(t => t.split('').join(' '))
console.log(alterado.valor)