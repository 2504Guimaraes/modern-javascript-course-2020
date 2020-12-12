const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

/*

    Again, following the fact VAR doesn't obey local scopes,
    my "i" variable will assumes 10 as the array current length
    and it will returns 10 in both calls.

*/