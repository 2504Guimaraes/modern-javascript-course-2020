/*
    Closure is the created scope when a function is
    declared, or the function's memory about its surrounding.

    This scope allows a function to access and handle
    external variables to that same function.
*/

// Lexical Context in action! 

const x = 'Global'

function fora() {  
    const x = 'Local'
    function dentro() { 
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())


/*
    The function 'dentro' will remember the variables
    assigned within that lexical context where it was declared.
    In other words, it will remember x set as 'Local'.


function fora() {  
    

    -------- Closure starts --------

    const x = 'Local'

    function dentro() { 
        return x
    }

    -------- Closure Ends  --------


    return dentro
}

*/