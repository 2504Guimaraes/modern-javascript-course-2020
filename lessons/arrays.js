// showing some array's features

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) // there isn't index at the fourth position... so it'll return undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'Testando')
console.log(valores)

/*
     Just explaning that, the "const" statement only determines
     that "valores" always will be a data of the type array. But
     it doesn't affects its internal content.
*/