const valorProduto = (codigo, qt) => {
    const preco = (qt, valor) => (qt * valor).toFixed(2).replace('.',',')

    switch(codigo) {
        case 100:
            return `Valor Cachorro Quente x ${qt}:\nR$ ${preco(qt,3)}`
        case 200:
            return `Valor Hambúrguer Simples x ${qt}:\nR$ ${preco(qt,4)}`
        case 300:
            return `Valor Cheese Burguer x ${qt}:\nR$ ${preco(qt,5.5)}`
        case 400:
            return `Valor Bauru x ${qt}:\nR$ ${preco(qt,7.5)}`
        case 500:
            return `Valor Refrigerante x ${qt}:\nR$ ${preco(qt,3.5)}`
        case 600:
            return `Valor Suco x ${qt}:\nR$ ${preco(qt,2.8)}`
        default:
            return 'Inválido.'
    }
}

console.log(valorProduto(100,3))
console.log(valorProduto(200,3))
console.log(valorProduto(300,3))
console.log(valorProduto(400,3))
console.log(valorProduto(500,3))
console.log(valorProduto(600,3))
console.log(valorProduto(700,3))