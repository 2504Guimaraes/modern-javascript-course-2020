console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Ivan Guimarães'.reverse())

Array.prototype.first = function() {
    return this[0]
}

const caes = ['Rotweeiler', 'Fila', 'Labrador']
console.log(caes.first())

/* Now that we've learned we can custom very well
known classes in Javascript by using their prototypes,
stay something in your mind, NEVER change a default JS method
such as forEach, filter, toString and so on.

That can cause very dangerous side effects in your code!!!! */