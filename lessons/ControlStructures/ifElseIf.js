Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const printResultado = function(nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra :D')
    } 
    else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } 
    else if (nota.entre(4, 6.99)) {
        console.log('Recuperação...')
    }
    else if (nota.entre(0, 3.99)) {
        console.log('Reprovado.')
    }
    else {
        console.log('Nota Inválida!')
    }
}

printResultado(10)
printResultado(8.9)
printResultado(6.55)
printResultado(2.3)
printResultado(-1)
printResultado(11)