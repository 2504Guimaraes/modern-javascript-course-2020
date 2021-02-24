Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const pessoas = ['Ivan Guimarães', 'Nathalia Caroline', 'Breno Lins']

pessoas.forEach2((value, index, array) => {
    console.log(`${index + 1}) ${value}`)
    console.log(array)
})