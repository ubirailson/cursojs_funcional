qtExecucoes = 0

//previsivel, controlavel, facil de ser testado
//pura
function somar(a, b) {
    qtExecucoes++ //efeito colateral observável que tira a pureza da função
    return a + b
}

console.log(qtExecucoes)
console.log(somar(68, 31))
console.log(qtExecucoes)

//uma boa prática é isolar dependências externas que geram efeito colateral observável
//Por exemplo: funções de leitura de arquivo, banco ou serviço