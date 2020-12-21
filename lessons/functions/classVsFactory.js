class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Ivan')
p1.falar()


/*
    NOTE:
    Unlike Classes, factory functions will be able to remember
    their object instance("this") in the browser without problems, don't confusing it with default object 'window'.

*/

function fazerPessoa(nome) {
    return {
        nome,
        falar: () => {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p2 = fazerPessoa('Nathalia')
p2.falar()