const carrinho = [
    '{ "nome": "Borracha" , "preco": 3.45 }',
    '{ "nome": "Caderno" , "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.99 }',
    '{ "nome": "Caneta", "preco": 7.50 }'    
]

// Return an array with just the JSON objects's price.

// My approach:

const prices = carrinho.map(element => {
    const el = JSON.parse(element)
    return el.preco
})

console.log(prices)

// CODERS's approach:

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho
    .map(paraObjeto)
    .map(apenasPreco)
console.log(resultado)