// an object is dynamic collection of attributes / values
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Genérica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 36,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        { nome: 'Junior', idade: 19 },
        { nome: 'Ana', idade: 42 }
    ],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)