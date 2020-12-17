/*
    MAIN WARNING:
    Here we can see that THIS in JS can varies its functionality
    between being a default object referenced, and the current 
    function's caller. Which object it's will deppend of what
    enviroment you're using currently.
*/


// WARNING 2:
// run this code in your brownser, 'cause the default object referenced
// as THIS is different from the one in Node.js.

//---------------------------------------------------------------------

// 1. define the function f1 and then call it.

function f1() { console.log(this === window) }
f1()

// 1. Conclusion: it will return true.

// in our brownser "windows" will be the default "this", and
// inside Node.js it will be "document".


// 2. set f1 to be called when you click on the body element.

document.getElementsByTagName('body')[0].onclick = f1

// 2. Conclusion: 
// after you click on the body html element, the function
// will return FALSE, because in that case "this" will be
// the element "body", which is the CURRENT -->referenced<-- element.



/*
    WARNING 3: Now trying with arrow function:
*/


// 3. set f3

const f3 = () => console.log(this === window)

// 4. set f3 to be called when you click on the body element.

document.getElementsByTagName('body')[0].onclick = f1

// 4. Conclusion:

// It will return TRUE, because unlike normal functions, in arrow
// functions the keyword "this" NEVER VARIES... meaning that no matter
// which it the current function's caller.

/*
    Addition: "this" in arrow functions will be set through
    the context where the function is defined. 
    It's called "lexical this".
*/