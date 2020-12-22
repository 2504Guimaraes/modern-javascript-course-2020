const pontuacoes = [6.5, 7, 5.5, 8, 9.5, 9, 4.5, 3, 10, 7]

function desempenho(lista) {

    let c = 0

    while (c < lista.length) 
    {
        console.log({index: c, valor: lista[c]})
        c++
    }
}

desempenho(pontuacoes)