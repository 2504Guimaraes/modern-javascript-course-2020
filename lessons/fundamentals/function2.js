// function to see values 
// without console.log in everytime

function show(value) {
    console.log(value)
}

// storing a function inside a variable
const printSum = function(a, b) {
    console.log(a + b)
}

printSum(2, 3)

// storing an arrow function inside a variable

const sum = (a, b) => {
    return a + b
}

console.log(sum(21,25))

// implicit return

const subtraction = (a, b) => a - b
show(subtraction(15, 4))

const print2 = a => console.log(a)
print2('Legal!!! :D')