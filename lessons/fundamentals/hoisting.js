// showing how hoisting works in JS

console.log('a = ', a)
var a = 2
console.log('a = ', a)

// let won't have  the same behavior of hoisting

console.log('a = ', b)
let b = 4
console.log('a = ', b)