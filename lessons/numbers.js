// Showing different number types in JS
// and some ways about how to handle them.


const peso1 = 1.0
const peso2 = Number('2.0')
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const prova1 = 9.871
const prova2 = 6.871

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(Number.isInteger(media.toString()))

// turning my average value into a binary value:

console.log(
    `Média = ${media.toFixed(2)} \nMédia em binário = ${media.toString(2)}`
)

console.log(typeof media)
console.log(typeof Number)