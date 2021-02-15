const fazerSaque = (valorDesejado) => {
    
    const cedulas = {
        cem: 100,
        cinquenta: 50,
        dez: 10,
        cinco: 5,
        um: 1
    }

    cedulas_necessarias = []

    while (valorDesejado > 0) {
        for (let cedula in cedulas) {
            if (cedulas[cedula] <= valorDesejado) 
            {
                cedulas_necessarias.push(cedulas[cedula])
                valorDesejado -= cedulas[cedula]
            }
        }
    }

    return cedulas_necessarias
}

console.log(fazerSaque(100))
console.log(fazerSaque(10))
console.log(fazerSaque(18))
console.log(fazerSaque(39))