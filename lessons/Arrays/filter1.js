const produtos = [
    { nome: 'Notebook', preco: 2499.0, fragil: true },
    { nome: 'iPad Pro', preco: 4199.0, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// constraint demanding a fragile product
console.log(produtos.filter((produto) => {
    return produto.fragil == true
}))

// constraint demanding a non fragile product
console.log(produtos.filter((produto) => {
    return produto.fragil == false
}))

//...demading all products with price above 2400
console.log(produtos.filter((produto) => {
    return produto.preco > 2400 
}))

// constraint denying all products
console.log(produtos.filter((produto) => {
    return false
}))

// constraint denying no one
console.log(produtos.filter((produto) => {
    return true
}))