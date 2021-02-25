const nums = [1, 2, 3, 4, 5]


// Map is a for but with purpose :P

let result = nums.map((element) => {
    return element * 2
})

console.log({ original: nums, new_one: result })

let test = nums.forEach((element) => {
    return element * 2
})

console.log(test) // It will returns undefined, 'cause unlike Map, forEach
// just manipulates one element or value directly inside an array, without
// generating a new array with your specified features.

nums.forEach((element) => {
    element * 2
})
console.log(nums, 'As you can see again, nothing is really altered.')


// You would need to do something like that for the same purpose:

const newArray = []

nums.forEach((value) => {
   newArray.push(value * 2)
})

console.log({ new_one: newArray })

////////////////////////////////////////////////////////////////

const soma10 = elemnt => elemnt + 10
const triplo = elemnt => elemnt * 3
const paraDinheiro = elemnt => `R$ ${parseFloat(elemnt).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10)
            .map(triplo)
            .map(paraDinheiro)
             
console.log(resultado)