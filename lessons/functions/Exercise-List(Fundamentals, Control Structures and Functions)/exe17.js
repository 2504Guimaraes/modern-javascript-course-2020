const receberAumento = (plano, salario) => {
    
    const aumento = (porcentagem, salario) =>  {
        return salario + (salario * porcentagem)
    }

    switch(plano.toUpperCase()) {
        case 'A':
            return aumento(0.10,salario)
        case 'B':
            return aumento(0.15,salario)
        case 'C':
            return aumento(0.20,salario)
        default:
            return 'Plano inválido'
    }
}

console.log(receberAumento('A',1000))
console.log(receberAumento('B',1000))
console.log(receberAumento('C',1000))
console.log(receberAumento('frango',1000))