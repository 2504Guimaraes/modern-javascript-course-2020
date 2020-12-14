// Function in JS is a First Class Object / Citizen
// Highter Order Function

// create with a literal approach
function fun1() { }

// store it in a variable
const fun2 = function () { }

// store them inside an array
const array = [function (a,b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

// pass function as a parameter
function run(func) {
    func()
}

run(function() { console.log('Executando...') })

// a function can return / have another function inside it

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(5,10)(20)
const cincoMais = soma(2,3)
cincoMais(4)