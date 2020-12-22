const pontuacoes = [6,7,5,8,9,9,4,3,10,7]

const verDesempenho = lista_de_Pontuacoes => {

    let i = 0
    let maiorDesempenho = lista_de_Pontuacoes[0]
    let menorDesempenho = lista_de_Pontuacoes[0]
    let qnt_Recordes = []

    while(i < lista_de_Pontuacoes.length) {

        if ( maiorDesempenho < lista_de_Pontuacoes[i]) {
          maiorDesempenho = lista_de_Pontuacoes[i]
          qnt_Recordes.push(
            lista_de_Pontuacoes[i]
          )
        }

        if ( menorDesempenho > lista_de_Pontuacoes[i]) {
          menorDesempenho = lista_de_Pontuacoes[i]
        }

        i++
    }

    return [
        {'lista de Records': qnt_Recordes},
        {'Nº vezes que bateu o próprio record': qnt_Recordes.length},
        {'pior nota já tirada': menorDesempenho}
    ]
}

console.log(verDesempenho(pontuacoes))
console.log(verDesempenho([9,8,7,5]))
console.log(verDesempenho([5,6,5,5]))
console.log(verDesempenho([5,5,5,5]))
