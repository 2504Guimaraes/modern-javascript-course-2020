const arredondar = numero => {

    let proxMultiploDe5

    if ((numero + 2) % 5 == 0) {
        proxMultiploDe5 = numero + 2
        return proxMultiploDe5 <= 100 && proxMultiploDe5 >= 0 ? proxMultiploDe5 : numero
    }
    else if ((numero + 1) % 5 == 0) {
        proxMultiploDe5 = numero + 1
        return proxMultiploDe5 <= 100 && proxMultiploDe5 >= 0 ? proxMultiploDe5 : numero
    }
    else {
        return numero
    }
}

const resultadoAvaliacao = (nota_final, nota) => {
    return { 
        arredondamento: `${nota} => ${nota_final}`,
        nota_final: nota_final,  
        situacao: nota_final >= 40 ? 'Aprovado' : 'Reprovado' 
    }
}


const definirNota = nota => {
    
    const NUMERO = !isNaN(nota)
    const INTEIRO = Number.isInteger(nota)
    const MENOR_IGUAL_CEM = nota <= 100
    const MAIOR_IGUAL_ZERO = nota >= 0

    if (NUMERO && INTEIRO && MENOR_IGUAL_CEM && MAIOR_IGUAL_ZERO) 
    {    
        const NOTA_FINAL =  arredondar(nota)
        return resultadoAvaliacao(NOTA_FINAL, nota)
    }

    else {
        return `${nota} é uma nota inválida.`
    }
}


console.log(definirNota(0))
console.log(definirNota(10))
console.log(definirNota(100))

console.log(definirNota(36))
console.log(definirNota(37))
console.log(definirNota(38))
console.log(definirNota(39))
console.log(definirNota(56))
console.log(definirNota(58))
console.log(definirNota(99))
console.log(definirNota(101))

console.log(definirNota(-10))
console.log(definirNota(500))
console.log(definirNota('frango'))
console.log(definirNota(10.5))