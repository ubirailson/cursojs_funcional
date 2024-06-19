function exec(fn, a, b) {
    return fn(a, b);
}

function somarNoTerminal(a, b) {
    return a + b
}

function subtrairNoTerminal(a, b) {
    return a - b
}

console.log(exec(somarNoTerminal, 56, 38))
console.log(exec(subtrairNoTerminal, 182, 27))

const subtrair = (w, z) => w -z

const r = exec(subtrair, 50, 25)
console.log(r)

const cb = () => console.log('Exec...') 
setInterval(cb, 2000)