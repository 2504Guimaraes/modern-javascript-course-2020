const sequencia = {
    _valor: 1, // social convention telling that this attribute's private
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor 
            // unless you're using GET end SET methods, 
            // JS doesn't supports overload...
        } 
    } 

}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
