const escolherVeiculo = veiculo => {
    switch(veiculo.toLowerCase()) {
        case 'hatch':
            console.log('Compra evetuada com sucesso.')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere esse modelo?')
            break
        default:
            console.log('Não trabalhamos com esse tipo automóvel aqui')
    }
}

escolherVeiculo('hatch')
escolherVeiculo('sedan')
escolherVeiculo('motocicleta')
escolherVeiculo('caminhonete')
escolherVeiculo('frango')