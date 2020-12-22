const verDesempenho = listaString => {

  const lista_de_Pontuacoes = listaString.split(", ")

  let i = 0
  let maiorDesempenho = lista_de_Pontuacoes[0]
  let menorDesempenho = lista_de_Pontuacoes[0]
  let qnt_Recordes = []
  let localMenorDesempenho = 'Não existe pior desempenho nesse cenário.'


  while(i < lista_de_Pontuacoes.length) {

      if ( maiorDesempenho < lista_de_Pontuacoes[i]) {
        maiorDesempenho = lista_de_Pontuacoes[i]
        qnt_Recordes.push(
          lista_de_Pontuacoes[i]
        )
      }

      if ( menorDesempenho > lista_de_Pontuacoes[i]) {
        menorDesempenho = lista_de_Pontuacoes[i]
        localMenorDesempenho = i + 1
      }

      i++
  }

  return [qnt_Recordes.length, localMenorDesempenho]
}

console.log(verDesempenho('9 , 8, 7, 5'))
console.log(verDesempenho('5 , 6, 5, 5'))
console.log(verDesempenho('5, 5, 5, 5'))