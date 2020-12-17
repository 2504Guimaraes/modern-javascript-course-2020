const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflict between paradigms, functional and OO.

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()