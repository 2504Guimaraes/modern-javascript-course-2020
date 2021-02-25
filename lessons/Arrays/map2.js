const carrinho = [
    '{ "nome": "Borracha" , "preco": 3.45 }',
    '{ "nome": "Caderno" , "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.99 }',
    '{ "nome": "Caneta", "preco": 7.50 }'    
]

// Return an array with just the JSON objects's price.

const prices = carrinho.map(element => {
    const el = JSON.parse(element)
    return el.preco
})

console.log(prices)
