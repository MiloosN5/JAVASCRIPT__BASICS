export const hoisting = () => {

    // VAR

    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5

    // LET

    try {
        console.log(y);
    } catch (error) {
        console.error(error.message) // Cannot access 'y' before initialization
    }

    let y = 10;
    console.log(y); // izlaz: 10

    // CONST

    try {
        console.log(z);
    } catch (error) {
        console.error(error.message) // Cannot access 'z' before initialization
    }
    const z = 15;
    console.log(z); // 15

    // FUNCTIONS

    myFunc1(); // myFunc1

    function myFunc1() {
        console.log("myFunc1");
    }

    // function + var

    try {
        myFunc2(); // myFunc2 is not a function
    } catch (error) {
        console.error(error.message)
    }
    
    var myFunc2 = function () {
        console.log("myFunc2");
    };

    // function + let

    try {
        myFunc3(); // myFunc3 is not a function
    } catch (error) {
        console.error(error.message)
    }
    

    let myFunc3 = function () {
        console.log("myFunc3"); // Cannot access 'myFunc3' before initialization
    };    

    // function + const

    try {
        myFunc4(); 
    } catch (error) {
        console.error(error.message) // Cannot access 'myFunc3' before initialization
    }
    

    let myFunc4 = function () {
        console.log("myFunc4");
    };  

    // arrow (var)

    try {
        myFunc5(); 
    } catch (error) {
        console.error(error.message) // myFunc5 is not a function
    }

    var myFunc5 = () => {
        console.log("myFunc5");
    }

    // arrow (let)

    try {
        myFunc6(); 
    } catch (error) {
        console.error(error.message) // Cannot access 'myFunc6' before initialization
    }

    let myFunc6 = () => {
        console.log("myFunc6");
    }    

    // arrow (const)

    try {
        myFunc7(); 
    } catch (error) {
        console.error(error.message) // Cannot access 'myFunc7' before initialization
    }

    const myFunc7 = () => {
        console.log("myFunc7");
    }      

}