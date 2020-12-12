for (let i = 0; i < 10; i++) {
    console.log(` i = ${i}`)
}

console.log(` FORA: i = ${i}`)

// that won't works cause LET assignments are only declared
// in local scope, don't giving us access to it ouside the loop.
