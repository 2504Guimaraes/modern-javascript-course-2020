const aprovados = [
    'Ivan',
    'Nathalia',
    'Breno'
]

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => {
    console.log(aprovado)
}

aprovados.forEach(exibirAprovados)
aprovados.forEach(indice => exibirAprovados(indice))

const lista = ['um', 'dois', 'três']

lista.forEach((value, index, array) =>  {
    console.log(`Valor: ${value} - Index: ${index} - Array: ${array}`)
})