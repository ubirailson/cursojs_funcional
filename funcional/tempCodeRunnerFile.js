const resultado = letras
.map(l => l.toUpperCase())
.reduce((a, b) => a + b)
console.log(resultado)