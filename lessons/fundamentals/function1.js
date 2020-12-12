// function without return

function printSum(a, b) {
    console.log(a + b)
}

printSum(2, 3)
printSum(2)
printSum(2, 10, 4, 5 ,6 ,7, 8)
printSum()

// funtion that returns

function soma(a = 1, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

// if there's no default value our function
// will try to sum undefined with our chosen number
// and you will get Not is Number as returned.