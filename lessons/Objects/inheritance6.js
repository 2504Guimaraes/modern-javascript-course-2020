function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 1)
const aula2 = new Aula('Até Breve!', 2)

console.log(aula1, aula2)

function novo(f, ...argumentos) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, argumentos)
    return obj
}

const aula3 = novo(Aula, 'Criando um novo "new" :D', 3)
const aula4 = novo(Aula, 'Olha só que legal! :S', 4)

console.log(aula3, aula4)
