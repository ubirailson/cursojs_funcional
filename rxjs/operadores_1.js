    // Operadores São funções. Há dois tipos:
    // Pipeable(encadeáveis)
    // Creation(aqueles que iniciam processo)

    //Piping/encadeamento é composição de funções

    //Observable que gera outros observable: Higher-order Observable
    //Observable que gera valores, apenas: First-order Observable

    // 1. Operadores de Criação
    const { of } = require('rxjs')

    // 2. Ioeradires encadeáveis(Pipeable Op.)
    const { last, first, map } = require('rxjs/operators')

    of(1, 2, 'ana', false, 'último')
        .pipe(last())
        .pipe(map(v => v[0]))
        .subscribe(function(valor) {
            console.log(`O valor gerado foi: ${valor}`)
        })


    //outra forma:

    of(1, 2, 'ana', false, 'último')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    
    .subscribe(function(valor) {
        console.log(valor)
    })