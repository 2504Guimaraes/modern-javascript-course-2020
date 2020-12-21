const printResult = (a, b) => {
    console.log({
        resultado: `${a} / ${b} = ${(a/b).toFixed(2)}`,
        resto_da_divisao: `O resto de ${a} / ${b} é igual à ${a % b}`
    })
}

printResult(10, 5)
printResult(10, 6)
