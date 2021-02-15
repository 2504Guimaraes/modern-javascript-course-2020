const funcBhaskara = (a, b, c) => {

    const delta = (b * b) - (4 * a * c)
    const x1 = ((-b) + Math.sqrt(delta)) / (2 * a)
    const x2 = ((-b) - Math.sqrt(delta)) / (2 * a)

    return delta >= 0 ? [x1, x2] : 'Delta é negativo.'
}

console.log(funcBhaskara(3, -5, 12))
console.log(funcBhaskara(1, 12, -13))
console.log(funcBhaskara(2, -16, -18))
console.log(funcBhaskara(2, -1, 8))
console.log(funcBhaskara(1, 1, 1))
