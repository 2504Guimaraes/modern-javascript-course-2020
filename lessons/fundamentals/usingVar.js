{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// as you can note, when you use var to do assignment of variables
// they'll be declared in a global scope or functional if they're
// put inside a function

function test() {
    var local = 123
    console.log(local)
}

// console.log(local) // error
