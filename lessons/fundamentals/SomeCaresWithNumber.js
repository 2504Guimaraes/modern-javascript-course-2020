/*

    More ambiguities and details you should
    take care when dealing with Numbers.

*/

console.log(7/0) // it returns infinity | other languages return an error
console.log("10" / 2) // instead of returning an error it will returns 5
console.log("Show" * 2)
console.log(0.1 + 0.7) // JS and most languages return 0.7999999 due.. to a performance reason.

console.log((10.345).toFixed(2))