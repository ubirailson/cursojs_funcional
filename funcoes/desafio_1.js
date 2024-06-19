//somar(3)(4)(5)

function somar(a) {
    return function (b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(somar(1)(2)(3))
const somarAB = somar(1)(2);
console.log(somarAB(6))

//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
//calcular(3)(7)(fn)

const somando = function somar(a, b) {
    return a + b
}

const subtraindo = function subtrair(a, b) {
    return a - b
}

function calcular(a) {
    return function (b) {
        return function(fn) {
            return fn(a, b);
        }
    }
}

console.log(calcular(2) (3) (somando));
console.log(calcular(2) (3) (subtraindo));