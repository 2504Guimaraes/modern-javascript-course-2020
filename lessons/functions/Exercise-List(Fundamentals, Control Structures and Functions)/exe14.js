const receberFruta = nmFruta => {
    const FRUTA = nmFruta.toLowerCase()
    switch (FRUTA) {
        case 'maçã':
            console.log('Não recebemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.')
            break
        default:
            console.log('Fruta inválida :P')
    }
}

receberFruta('maçã')
receberFruta('kiwi')
receberFruta('melancia')
receberFruta('Melancia')
receberFruta('frango')