const [a] = [10]
console.log(a)

const [n1, , n3, n5, n6 = 0] = [
    10,
    7, // it will go to undefined
    9, // it will go to n3
    8 // it will go to n5
]

console.log(n1, n3, n5 , n6)