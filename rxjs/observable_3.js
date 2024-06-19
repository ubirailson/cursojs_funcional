//desafio!
// criar um strem de numeros
// entre mn e max com Observable!

const { Observable, noop } = require('rxjs')


function entre(min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Observable(subscriber => {
        for(let i = min; i <= max; i++) {
            subscriber.next(i)
        }
        subscriber.complete()
    })
}

entre(4, 10) 
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim!')
    )


//Outra forma sem mutabilidade, mais funcional
function entreV2(min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Observable(subscriber => {
        Array(max - min).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

entreV2(4, 10) 
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim V2!')
    )

