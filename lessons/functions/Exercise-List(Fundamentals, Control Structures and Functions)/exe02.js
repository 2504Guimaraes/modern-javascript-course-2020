const TiposTriangulo = (a, b, c) => {
    
    const x =  c < a + b
    const y =  b < a + c
    const z =  a < c + b

    if (x && y && z) {      // if all x, y and z return true.
        
        if (a === b && b === c) {
            return 'Triângulo Equilatero.'
        }
        else if (a === b || b === c || c == a) {
            return 'Triângulo Isoceles'
        } 
        else {
            return 'Triângulo Escaleno'
        }

    } else {
        return 'Isso não é um triângulo :P'
    }
}

console.log(TiposTriangulo(20,20,20))
console.log(TiposTriangulo(20,20,15))
console.log(TiposTriangulo(19,18,20))
console.log(TiposTriangulo(-10,50,40))