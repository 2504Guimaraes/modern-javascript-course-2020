// first strategy to generate default parameter

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(
    soma1(),
    soma1(3),
    soma1(1,2,3),
    soma1(0,0,0)
)

// approaches 2, 3 and 4 to generate a default value

function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // <= best approach if ES6 isn't avaliable
    return a + b + c
}

console.log(
    soma2(),
    soma2(3),
    soma2(1,2,3),
    soma2(0,0,0)
)

// default value using ES2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(
    soma3(),
    soma3(3),
    soma3(1,2,3),
    soma3(0,0,0)
)
