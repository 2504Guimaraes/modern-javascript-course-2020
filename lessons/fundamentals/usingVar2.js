var number = 1

{
    var number = 2
    console.log('dentro = ', number)
}

console.log('fora = ', number)

// both are assigned in global scope, causing
// both to return 2