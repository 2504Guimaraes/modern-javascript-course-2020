function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook Acer',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

console.log(produto.getPreco())

// Now if I wanted to use that same function in global scope,
// first I would define my global parameters, like this below
//(otherwise it wouldn't work :P):

global.preco = 20
global.desconto = 0.1

console.log(getPreco())


// Now using Call and Apply:

/*
    Both of them set which object has been assigned as the current scope in
    which the function was defined.
*/

const carro = {
    preco: 49990,
    desconto: 0.20
}

console.log(getPreco.call(carro)) // call + default parameters set
console.log(getPreco.apply(carro)) // apply + default parameters set

console.log(getPreco.call(carro, 0.17, '$')) // now using call plus my own parameters.
console.log(getPreco.apply(carro, [0.17, '$'] )) // now using apply + my own parameters.

// both them do the same work, but with apply needing an array
// to set the function's parameters.