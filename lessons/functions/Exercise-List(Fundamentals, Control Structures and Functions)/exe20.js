const calcularNumeroCedulas = (valorSacado, listaCedulas, listaCedulasDoSaque) => {

    while (valorSacado > 0) {       
        for (let cedula in listaCedulas) 
        {
            if (listaCedulas[cedula] <= valorSacado) {

                listaCedulasDoSaque.push(listaCedulas[cedula])
                valorSacado -= listaCedulas[cedula]
            }
        }
    }

    return listaCedulasDoSaque
}



const fazerSaque = (valor) => {

    const cedulas = { cem: 100, cinquenta: 50, dez: 10, cinco: 5, um: 1 }
    
    let cedulas_para_o_saque = []

    const cedulasNecessarias = calcularNumeroCedulas(
        valor, 
        cedulas, 
        cedulas_para_o_saque
    )
    
    return cedulasNecessarias
}

console.log(fazerSaque(100))
console.log(fazerSaque(13))
console.log(fazerSaque(150))
console.log(fazerSaque(200))
