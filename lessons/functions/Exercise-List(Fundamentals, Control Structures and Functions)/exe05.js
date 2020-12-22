function conveterNumero(numero, cedula) {
    return `${cedula} ${numero.toFixed(2).replace('.',',')}`
}

console.log(conveterNumero(0.3000000000000004,'R$'))