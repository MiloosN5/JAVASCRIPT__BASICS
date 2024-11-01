export const letVar = () => {

    // +++++++++++++++ UNDEFINED VARIABLES 

    try {
        console.log('typeof(a) => ', typeof (a)); // undefined
        console.log('typeof(b) => ', typeof (b)); // undefined
    } catch (error) {
        console.error("Error with a or b:", error.message);
    }

    // +++++++++++++++ LET    

    try {
        let let_1 = let_2 = 2;
        console.log('let_1 = ', let_1); // let_1 = 2
        console.log('let_2 = ', let_2); // ReferenceError: let_2 is not defined 
        // NOTE: without 'module' -> let_2 = 2
    } catch (error) {
        console.error("Error with let_1 or let_2:", error.message) // let_2 is not defined
    }

    try {
        console.log('typeof(let_3) => ', typeof (let_3)); // Uncaught ReferenceError: Cannot access 'let_3' before initialization
        console.log('typeof(let_4) => ', typeof (let_4)); // Uncaught ReferenceError: Cannot access 'let_4' before initialization
    } catch (error) {
        console.error("Error with let_3 or let_4:", error.message); // Cannot access 'let_3' before initialization
    }

    let let_4;
    let let_3 = let_4 = 2;

    console.log('let_3 = ', let_3); // let_3 = 2
    console.log('let_4 = ', let_4); // let_4 = 2
    console.log('typeof(let_3) => ', typeof (let_3)); // typeof(let_3) => number
    console.log('typeof(let_4) => ', typeof (let_4)); // typeof(let_4) => number

    let_3 = 4;

    console.log('let_3 = ', let_3); // let_3 = 4
    console.log('let_4 = ', let_4); // let_4 = 2
    console.log('typeof(let_3) => ', typeof (let_3)); // typeof(let_3) => number
    console.log('typeof(let_4) => ', typeof (let_4)); // typeof(let_4) => number

    let_4 = 11;

    console.log('let_3 = ', let_3); // let_3 = 4
    console.log('let_4 = ', let_4); // let_4 = 11

    // +++++++++++++++ VAR

    try {
        var var_1 = var_2 = 2;
        console.log('var_1 = ', var_1); // var_1 = 2
        console.log('var_2 = ', var_2); // ReferenceError: var_2 is not defined 
        // NOTE: without 'module' -> var_2 = 2
    } catch (error) {
        console.error("Error with var_1 or var_2:", error.message) // var_2 is not defined
    }

    try {
        console.log('typeof(var_3) => ', typeof (var_3)); // undefined
        console.log('typeof(var_4) => ', typeof (var_4)); // undefined
    } catch (error) {
        console.error("Error with var_3 or var_4:", error.message); 
    }

    // NOTE: this is difference from LET because here we don't get error for wanting typeof before initialization!

    var var_4;
    var var_3 = var_4 = 2;

    console.log('var_3 = ', var_3); // var_3 = 2
    console.log('var_4 = ', var_4); // var_4 = 2
    console.log('typeof(var_3) => ', typeof (var_3)); // typeof(var_3) => number
    console.log('typeof(var_4) => ', typeof (var_4)); // typeof(var_4) => number

    var_3 = 4;

    console.log('var_3 = ', var_3); // var_3 = 4
    console.log('var_4 = ', var_4); // var_4 = 2
    console.log('typeof(var_3) => ', typeof (var_3)); // typeof(var_3) => number
    console.log('typeof(var_4) => ', typeof (var_4)); // typeof(var_4) => number

    var_4 = 11;

    console.log('var_3 = ', var_3); // var_3 = 4
    console.log('var_4 = ', var_4); // var_4 = 11
}

