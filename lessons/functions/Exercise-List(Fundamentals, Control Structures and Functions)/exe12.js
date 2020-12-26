const fatorialDe = numero => {
    let fatorial = 1
    let i = 1

    while(i <= numero) {            
        if (i < Number.MAX_SAFE_INTEGER) {
            fatorial *= i
            i++
        } 
        else { return Infinity }
    }
    return fatorial
}

const fatorial = numero => {
    return numero <= 0 ? 1 : numero * fatorialDe(numero - 1)
}

console.time()
console.log(fatorial(5))
console.log(fatorial(251))
console.timeEnd()

console.time()
console.log(fatorialDe(1))
console.log(fatorialDe(2))
console.log(fatorialDe(3))
console.log(fatorialDe(4))
console.log(fatorialDe(5))
console.log(fatorialDe(8))
console.log(fatorialDe(10))
console.log(fatorialDe(12))
console.log(fatorialDe(14))
console.log(fatorialDe(16))
console.log(fatorialDe(21))
console.log(fatorialDe(26))
console.log(fatorialDe(31))
console.log(fatorialDe(36))
console.log(fatorialDe(51))
console.log(fatorialDe(151))
console.log(fatorialDe(251))
console.timeEnd()