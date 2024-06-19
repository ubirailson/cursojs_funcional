// Closure é quando uma função "lembra"
// seu escopo léxico(escopo onde a função foi definida), mesmo qundo a função
//é executada fora desse escopo léxico

const somarXMais3 = require('./closure_escopo')
const x = 1000
console.log(somarXMais3())