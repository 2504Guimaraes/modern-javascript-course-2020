const eMultiploDe5 = numero => {
    return numero % 5 == 0 ? true : false
}

const definirNota = nota => {
    
    const NUMERO = !isNaN(nota)
    const INTEIRO = Number.isInteger(nota)
    const MENOR_IGUAL_CEM = nota <= 100
    const MAIOR_IGUAL_ZERO = nota >= 0

    if (NUMERO && INTEIRO && MENOR_IGUAL_CEM && MAIOR_IGUAL_ZERO) 
    {    
        
    }

    else {
        return 'Nota inválida.'
    }
}


console.log(definirNota(10))
console.log(definirNota(0))
console.log(definirNota(100))
console.log(definirNota(-10))
console.log(definirNota(500))
console.log(definirNota('frango'))
console.log(definirNota(10.5))