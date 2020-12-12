let valor // not initialized
console.log(valor)

valor = null // value's abscence
console.log(valor)
// console.log(valor.toString()) // error

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // with no price
console.log(!!produto.preco)
console.log(produto)