function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log('Final')
}

function teste2(num) {
    if (num > 7); { // take care with semicolon in control structures..
        console.log(num)
    }
}
teste2(6)
teste2(8)