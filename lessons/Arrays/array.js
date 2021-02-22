console.log(
    typeof Array,
    typeof new Array,
    typeof []
)

let aprovados = new Array('Ivan', 'Nathalia', 'Breno')
console.log(aprovados)

aprovados = ['Ivan', 'Nathalia', 'Breno']
console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Antônio'
aprovados.push('Manoel Vitor')
console.log(aprovados.length)

aprovados[9] = 'Novo Aluno'
console.log(aprovados.length)
console.log(aprovados)

console.log(aprovados[8] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Maria', 'Rose', 'Sina']
aprovados.splice(1,2)
console.log(aprovados)

aprovados2 = ['Eren', 'Mikasa', 'Armin']
aprovados2.splice(1,2,'Annie', 'Levi')
console.log(aprovados2)

aprovados3 = ['Ataque', 'Fêmea', 'Encouraçado']
aprovados3.splice(1,0, 'Colossal')
console.log(aprovados3)

aprovados3.splice(1,1, 'Substituto do Colossal')
console.log(aprovados3)