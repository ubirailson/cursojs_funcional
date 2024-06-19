//tratamento de erro em promise

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    //Depois do catch posso por outro then, mas não haverá mais dados vindos do resolve
    //posso ter N "then"(s) antes do catch. Se qualquer um der erro, cai nele e ele trata


    funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    //posso adicionar uma function de tratamento de erro junto com a function do them
    //Mas não ocorrerá o catch e ele seguirá o fluxo de thens
    .then(
        v => consol.log(v),
        err => console.log(`Erro específico: ${err}`)
    )
    .then(v => console.log('Quase fim'))
    
    .catch(err => console.log(`Erro: ${err}`))
    //Depois do catch posso por outro then, mas não haverá mais dados vindos do resolve
    //posso ter N "then"(s) antes do catch. Se qualquer um der erro, cai nele e ele trata

    //via de regra colocamos o catch no fim porque no primeiro erro já não teremos dado da execução anterior

    //o erro cairá no primeiro tratamento que encontrar 
    function funcionarOuNaoComTryCatch(valor, chanceErro) {
        return new Promise((resolve, reject) => {
            try {
                confirm.log('teste')
                if (Math.random() < chanceErro) {
                    reject('Ocorreu um erro!')
                } else {
                    resolve(valor)
                }
            } catch(e) {
                reject(e)            
            }
        })
    }
    
    funcionarOuNaoComTryCatch('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro específico: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(console.log('Fim'))    