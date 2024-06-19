//Scheduler é um contexto de execução. 
//Forma de modificar o comportamento padrão do Observable que é síncrono

//asyncScheduler ambiente de execução para rodar meus observables
const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Antes...')
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    //comportamento assíncrono
    .pipe(observeOn(asyncScheduler))
    
    .subscribe(console.log)
console.log('Depois')