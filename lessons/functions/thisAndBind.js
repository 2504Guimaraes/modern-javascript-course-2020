const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflict between paradigms, functional and OO.

// Object Oriented would try to call "pessoa" and functional is calling 
// "window" or "document" object (it'll depend if you're in brownser
// or inside node.js).

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()