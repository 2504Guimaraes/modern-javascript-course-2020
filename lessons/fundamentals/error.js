function handlingErrorAndThrow(error) {
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    }
}

function printShoutedName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        handlingErrorAndThrow()
    } finally {
        console.log('Finally.')
    }
}

const obj = { name: 'Ivan' }
printShoutedName(obj)