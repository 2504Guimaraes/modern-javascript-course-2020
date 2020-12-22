const jurosSimples = (capitalInic, taxaJuros, tempoAplic) => {
    
    const juros = capitalInic * taxaJuros * tempoAplic
    const montanteFinal = capitalInic + juros
    return montanteFinal.toFixed(2).replace('.',',')
}

console.log(jurosSimples(1200, 0.02, 10))

const jurosCompostos = (capitalInic, taxaJuros, tempoAplic) => {
    
    const montante = capitalInic * ((1 + taxaJuros) ** tempoAplic)
    return montante.toFixed(2).replace('.',',')
}

console.log(jurosCompostos(1400, 0.07, 2))