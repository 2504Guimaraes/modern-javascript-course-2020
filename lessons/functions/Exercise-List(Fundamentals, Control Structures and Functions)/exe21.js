const tedoDoPlano = faixaEtaria => {

    let valorBase = 100
    let valorConvenio
    
    if (faixaEtaria < 10) {
        valorConvenio = valorBase + 80
    }
    else if (faixaEtaria >= 10 && faixaEtaria <= 30) {
        valorConvenio = valorBase + 50
    }
    else if (faixaEtaria >= 30 && faixaEtaria <= 60) {
        valorConvenio = valorBase + 95
    }
    else if (faixaEtaria > 60) {
        valorConvenio = valorBase + 130
    }

    return `Valor pago por uma pessoa de ${faixaEtaria} anos: ${valorConvenio}`
}

console.log(tedoDoPlano(5))
console.log(tedoDoPlano(10))
console.log(tedoDoPlano(15))
console.log(tedoDoPlano(25))
console.log(tedoDoPlano(35))
console.log(tedoDoPlano(45))
console.log(tedoDoPlano(65))