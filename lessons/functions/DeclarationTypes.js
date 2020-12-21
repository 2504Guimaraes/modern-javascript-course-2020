// notice that when you use function declaration,
// JS will be able to use Hoisting:
console.log(soma(3,4)) // <- clear Hoisting technique, in other words, *functions are 
// pre-loaded before the rest of code* (and at least for me that isn't good)

// function declaration
function soma(y, x) {
    return x + y
}

//function expression <- here you can't use Hoisting and you'll need to declare your functions before using them. :D
const sub = function (x, y) {
    return x - y
}

console.log(sub(3,4)) // <- >> you'll need to declare your functions before using them <<

//named function expression <- the advantage here is that when you debug your core
// the function's name will appear
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3,4))