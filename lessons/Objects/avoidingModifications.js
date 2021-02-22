// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag

console.log(produto)

// Object.seal

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Ivan'
delete pessoa.nome
pessoa.idade = 21

console.log(pessoa)

// Object.freeze = sealed + constant values

const imutavel = Object.freeze({
    nome: 'Diamante',
    dureza: 10,
    valor: 'alto'
})

delete imutavel.dureza
imutavel.nome = 'Forró'
imutavel.valor = 'baixíssimo'

console.log(imutavel)