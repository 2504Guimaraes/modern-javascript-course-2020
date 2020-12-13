const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado :P') 
        // take care!! even if it's not a number it will go here...
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')