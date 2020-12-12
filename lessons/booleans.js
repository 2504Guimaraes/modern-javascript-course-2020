// behavior of booleans in JS

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // by default 1 represents true value
console.log(!!isAtivo)

console.log('os elementos naturalmente representados como verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os elementos naturalmente representados como falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo= false))

console.log('finalizando lógica de verdadeiro e falso:')
console.log(( '' || null || 0 || 'epa')) 

/* 
    We'll get "epa" 'cause it's the only true value in within the sentence
*/

let nome = 'Ivan G.'
console.log(( nome || 'Outro'))

// Here we take "Ivan G." because the first value is already true.