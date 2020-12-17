function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ 
        
        // 'this' will be set through lexical context -> this === Pessoa 
        
        console.log(this.idade)
    }, 1000)
}

new Pessoa