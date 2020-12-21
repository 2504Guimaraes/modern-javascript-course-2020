function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Computador',3800))
console.log(criarProduto('Mesa Digitalizadora',1800))