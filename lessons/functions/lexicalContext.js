const valor = 'Global'

function myFunction() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    myFunction()
}

exec()