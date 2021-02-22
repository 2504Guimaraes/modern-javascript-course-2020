const obj1 = {
    name: 'Ivan',
    age: 21,
    sayHello: function() {
        return `Hello! My name's ${this.name} and I'm ${this.age} old.`
    }
}

console.log(obj1.sayHello())

console.log(JSON.stringify(obj1)) // Json is a form of share data, it doesn't make sense it converts obj1's method.

// Converting a JSON into an object:

const obj2 = '{ "name": "Ivan Guimarçaes" , "age": 21, "gender": "male" }'
const obj3 = '{ "object": {} ,"array": [ 1, 2, 3], "boolean": [ true, false ], "number": { "float": 1.0, "int": 1 }, "string": "Hello", "obj_array": [{ "attri1": "hello" }, { "attri2": "how" }, { "attri3": "are you?" }] }'

console.log(JSON.parse(obj2))
console.log(JSON.parse(obj3))