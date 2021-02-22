class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Programador") {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

// Showing that it's actually the same thing as JS functions:
// And it goes the same for JS inheritance:

console.log(filho.__proto__ === Filho.prototype)
console.log(filho.__proto__.__proto__ === Pai.prototype)
console.log(Pai.prototype.__proto__ === Avo.prototype)
