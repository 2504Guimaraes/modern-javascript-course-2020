const ver = func => console.log(func)

const eBissexto = ano => {
    
    if ((!isNaN(ano)) && (ano >= 0)) 
    {
        if (ano % 4 == 0) {
            return true
        }
        else if (ano % 100 == 0) {
            return true
        }
        else if (ano % 400 == 0) {
            return true
        } 
        else { return false }

    }
    else {
        return `${ano} inválido.`
    }
}

ver(eBissexto('Bolo'))
ver(eBissexto(-1000))
ver(eBissexto(1988))
ver(eBissexto(1992))
ver(eBissexto(1996))
ver(eBissexto(2000))
ver(eBissexto(2004))
