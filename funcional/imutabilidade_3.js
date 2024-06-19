const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo'
}

//Atribuição por referência
const novaPessoa = pessoa

novaPessoa.nome = 'João'
novaPessoa.cidade = 'Fortaleza'

//modifiquei pessoa
console.log(pessoa)

//Passagem por referência(objeto, array, etc)
function alteraPessoa(novaPessoa) {
    novaPessoa.nome = 'Jonas'
    novaPessoa.cidade = 'Teresina'
}
alteraPessoa(pessoa)
//modifiquei pessoa
console.log(pessoa)

//função pura
function alteraPessoaFuncaoPura(pessoa) {
    const novaPessoa = { ... pessoa }
    novaPessoa.nome = 'Jujuba'
    novaPessoa.cidade = 'Jujubalândia'
}

alteraPessoaFuncaoPura(pessoa)
//não modifiquei pessoa
console.log(pessoa)

const pessoaAtributoProfundo = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz!'
    }
}
//função impura
function alteraPessoaSpreadImperfeito(pessoa) {
    //esse clone foi raso, por isso ficou uma referência
    const novaPessoa = { ... pessoa }
    novaPessoa.nome = 'Jujuba'
    novaPessoa.cidade = 'Jujubalândia'
    novaPessoa.end.rua = 'Infiliz das costa oca!'
}

alteraPessoaSpreadImperfeito(pessoaAtributoProfundo)
//modifiquei pessoa pq tem subobjeto e o spread não pega
console.log(pessoaAtributoProfundo)


//Passagem por valor. Variáveis simples(primitivas) ocupam pouca memória, por isso criou-se cópia.
//Diferentemente de objetos complexos que ocupam mais espaço na memória
let a = 3;
let b = a //atribuição por valor(cópia)

a++
b--
console.log(a)
console.log(b)

//Object.freeze precisa ocorrer em cada nível de objeto. Por exemplo:
const pessoaAtributoProfundo2 = Object.freeze( {
    nome: 'Zézé',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'Feliz!'
    })
})