let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // run this on node.js

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global) // it won't appoint to global 'casue global in node need to be called as module.exports...
comparaComThisArrow(module.exports) 

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // arrow function is stronger than bind :D
