const pilotos = [
    'Vettel',
    'Alonso',
    'Raikkonen',
    'Massa'
]

pilotos.pop() // massa quebrou o carro kkk :P
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // removes the first!
console.log(pilotos)

pilotos.unshift('Hamilton') // adds a new one in the first index
console.log(pilotos)

// splice can both add and remove an index

// adding an index:
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// removing indexes:
pilotos.splice(3, 1) // massa quebrou dnv kkk
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // slice can generate a new array starting from the chosen index
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // but it can generate an array starting from the first parameter, and going 'till one index before the second argument.
// In the case above, from the first index 'till one index before the fourth index:
console.log(algunsPilotos2)