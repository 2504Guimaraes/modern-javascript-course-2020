// Prototype Chain
Object.prototype.attri0 = 'Z' // don't do that at home! 
const avo = { attri1: 'A' }
const pai = { __proto__: avo,  attri2: 'B', attri3: '3' }
const filho = { __proto__: pai, attri3: 'C' }
console.log(filho.attri1)
console.log(filho.attri0)
console.log(filho.attriZ)
console.log(filho.attri0, filho.attri1, filho.attri2, filho.attri3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Hm/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'Volvo V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())