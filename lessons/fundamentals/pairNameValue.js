// pair name / value
const saudacao = 'Opa'  // lexical scope 1

function exec() {
    const saudacao = 'Falaaaa' // lexical scope 2
    return saudacao
}

// objects are aligned groups of pairs containing names and values

const client = {
    nome: 'Rafael',
    idade: 24,
    peso: 85,
    endereco: {
        logradouro: 'Rua mto legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)