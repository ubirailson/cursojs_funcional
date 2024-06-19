//sem efeito colateral, função pura
function ordenarClonandoNaoModificando(array) {
    //uso de destructure para clonagem
    return [...array].sort()
    
}
//com efeito colateral, função impura
function ordenarAlterando(array) {
    return array.sort()
    
}
const nums = [3, 1, 7, 9, 4, 6]
ordenarClonandoNaoModificando(nums)
console.log(nums) 

ordenarAlterando(nums)
console.log(nums) 

//garante imutabilidade
const numsCongelados = Object.freeze([3, 1, 7, 9, 4, 6])
numsCongelados[0] = 1000
console.log(numsCongelados)