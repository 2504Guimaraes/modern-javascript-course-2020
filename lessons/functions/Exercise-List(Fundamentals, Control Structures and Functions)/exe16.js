const calculadora = (a, string, b) => {
    switch(string) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '/':
            return a / b
        case '*':
            return a * b
        default:
            return 'Operação Inválida'
    }
}

console.log(calculadora(5,'+',5))
console.log(calculadora(5,'-',5))
console.log(calculadora(5,'/',5))
console.log(calculadora(5,'*',5))
console.log(calculadora(5,'~',5))