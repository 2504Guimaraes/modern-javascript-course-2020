const listaDias = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Lasanha'
]

const diaUtil = lista => {
    for (let i = 0; i < lista.length; i++) {

        switch (i) {
            case 0:
            case 6:
                console.log(`${lista[i]} dia ${i+1}: Feriado`)
                break
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                console.log(`${lista[i]} dia ${i+1}: Dia Útil`)
                break
            default:
                console.log(`${lista[i]} dia ${i+1}: Dia Inválido`)
        }
    }
}

diaUtil(listaDias)