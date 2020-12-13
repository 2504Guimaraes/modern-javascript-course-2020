const pessoa = {
    nome: 'Ana',
    idade : 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

let { nome, idade } = pessoa;

console.log({
    nome,
    idade
})

let { nome: nm, idade: age } = pessoa

console.log({
    nm,
    age
})

let { gostaDeCafe } = pessoa // it will returns undefined 'cause there are none of these attributes

// BUT we can set a default value too if we don't want to get undefined

let { sobrenome, bemhumorada = true } = pessoa

console.log({
    sobrenome,
    bemhumorada
})

let { endereco: { logradouro, numero } } = pessoa

console.log({
    logradouro,
    numero
})