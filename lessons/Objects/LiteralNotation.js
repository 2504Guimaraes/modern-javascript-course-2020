const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttri = 'nota'
const valorAttri = 7.87

const obj3 = {}
obj3[nomeAttri] = valorAttri
console.log(obj3)

const obj4 = {[nomeAttri]: valorAttri}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    function2() {
        // ...
    }
}

console.log(obj5)
