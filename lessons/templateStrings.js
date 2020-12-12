const nome = 'Ivan'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá 
    ${nome}!`

console.log(concatenacao, template)

// expressions

console.log(`1 + 4 = ${1 + 4}`)

const up = txt => txt.toUpperCase()

console.log(`Hey... ${up('cuiado')}!`)