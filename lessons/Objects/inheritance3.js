const pai = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // Even with pai settled as its prototype, by default
// if I hadn't assigned 'Ana' as an filha1's value. nome would not appear by Default.
console.log(Object.keys(filha2)) // If I had defined filha2's name as not enumerable it would
// not appears on screen.

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}