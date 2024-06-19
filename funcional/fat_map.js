const letras = [
    ['O','l','á'],
    [' '],
    ['m','u','n','d','o'],
    ['!','!','!','!']
]

const letrasArray2Niveis = [
    ['O',['l','á']],
    [' '],
    ['m','u','n','d','o'],
    ['!','!','!','!']
]
//flat coloca arrays com sub arrays num array só
//console.log(letrasArray2Niveis.flat())
//console.log(letrasArray2Niveis.flat(1)) ou letrasArray2Niveis.flat(2) roda flat nos 
//subarrays um nivel a mais de profundidade
//assim como chamar letrasArray2Niveis.flat().flat()
//flat(Infinity) faz recursivamente até acabarem os subarrays

/* const resultado = letras
.map(l => l.toUpperCase())
.reduce((a, b) => a + b)
console.log(resultado) */

const resultado2 = letras
.flatMap(l => [l, ','])
.reduce((a, b) => a + b)
console.log(resultado2)
