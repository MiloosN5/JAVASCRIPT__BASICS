export const dataTypes = () => {

    // +++++++++++++++ PRIMITIVE

    // 1. NUMBER
    var int_1 = 10;
    console.log('int_1', int_1, typeof (int_1)); // int 10 number
    var float_1 = 5.423;
    console.log('float_1', float_1, typeof (float_1)); // float_1 5.423 number

    // 2. STRING
    var string_1 = "John";
    console.log('string_1', string_1, typeof (string_1)); // string_1 John string
    var string_2 = 'John';
    console.log('string_2', string_2, typeof (string_2)); // string_2 John string
    var string_3 = "A";
    console.log('string_3', string_3, typeof (string_3)); // string_3 A string
    var string_4 = 'A';
    console.log('string_4', string_4, typeof (string_4)); // string_4 A string

    // 3. BOOLEAN
    var boolean_1 = true;
    console.log('boolean_1', boolean_1, typeof (boolean_1)); // boolean_1 true boolean
    var boolean_2 = false;
    console.log('boolean_2', boolean_2, typeof (boolean_2)); // boolean_2 false boolean

    // 4. NULL
    var data_1 = null;
    console.log('data_1', data_1, typeof (data_1)); // data null object

    // 5. UNDEFINED
    var undefined_1;
    console.log('undefined_1', undefined_1, typeof (undefined_1)); // undefined_1 undefined undefined

    // 6. SYMBOL
    var symbol_1 = Symbol('id1');
    console.log('symbol_1', symbol_1, typeof (symbol_1)); // symbol_1 Symbol(id1) symbol
    var symbol_2 = Symbol("id2");
    console.log('symbol_2', symbol_2, typeof (symbol_2)); // symbol_2 Symbol(id2) symbol
    var symbol_3 = Symbol("id2");
    console.log('symbol_3', symbol_3, typeof (symbol_3)); // symbol_3 Symbol(id2) symbol
    console.log('symbol_2 == symbol_3', symbol_2 == symbol_3); // symbol_2 == symbol_3 false
    console.log('symbol_2 === symbol_3', symbol_2 === symbol_3); // symbol_2 === symbol_3 false

    // 7. BIGINT
    var bigNum_1 = 878482039283002;
    console.log('bigNum_1', bigNum_1, typeof (bigNum_1)); // bigNum_1 878482039283002 number
    var bigNum_2 = 878482039283002n;
    console.log('bigNum_1', bigNum_2, typeof (bigNum_2)); // bigNum_1 878482039283002n bigint
    var bigNum_3 = 83;
    console.log('bigNum_1', bigNum_3, typeof (bigNum_3)); // bigNum_1 83 number
    var bigNum_4 = 83n;
    console.log('bigNum_1', bigNum_4, typeof (bigNum_4)); // bigNum_1 83n bigint    

    // +++++++++++++++ NON-PRIMITVE

    // 1. OBJECT
    var person_1 = {
        name: "John",
        age: 30,
        adress: {
            city: "City1",
            street: "Street1",
            number: "17"
        }
    }
    console.log('person_1', person_1, typeof (person_1));
    /*
        person_1 {
            name: 'John',
            age: 30,
            adress: { city: 'City1', street: 'Street1', number: '17' }
        } object
    */

    var obj_2 = { name: "John", age: 30 }
    console.log('obj_2', obj_2, typeof (obj_2)); // obj_2 { name: 'John', age: 30 } object

    // OBJECT + SYMBOLS
    var user_1 = { name: "David", age: 22 };
    var id_1 = Symbol("id1");
    var id_2 = Symbol("id2");
    user_1[id_1] = 123;
    user_1[id_2] = 134;
    console.log('user_1', user_1); // user_1 { name: 'David', age: 22, [Symbol(id1)]: 123, [Symbol(id2)]: 134 }
    console.log('user_1[id_1]', user_1[id_1]); // user_1[id_1] 123

    for (var key in user_1) {
        console.log('key', key);
    }
    /*
        key name
        key age
    */
    console.log('Object.keys(user_1)', Object.keys(user_1)); // Object.keys(user_1) [ 'name', 'age' ]
    console.log('Object.getOwnPropertySymbols(user)', Object.getOwnPropertySymbols(user_1)); // Object.getOwnPropertySymbols(user) [ Symbol(id1), Symbol(id2) ]

    var globalSymbol_1 = Symbol.for("id3");
    var globalSymbol_2 = Symbol.for("id3");
    var regularSymbol_1 = Symbol("id3");
    var regularSymbol_2 = Symbol("id3");
    console.log('globalSymbol_1', globalSymbol_1, typeof (globalSymbol_1)); // globalSymbol_1 Symbol(id1) symbol
    console.log('globalSymbol_1 == globalSymbol_2', globalSymbol_1 == globalSymbol_2); // globalSymbol_1 == globalSymbol_2 true
    console.log('globalSymbol_1 === globalSymbol_2', globalSymbol_1 === globalSymbol_2); // globalSymbol_1 === globalSymbol_2 true
    console.log('regularSymbol_1 == regularSymbol_2', regularSymbol_1 == regularSymbol_2); // regularSymbol_1 == regularSymbol_2 false
    console.log('regularSymbol_1 === regularSymbol_2', regularSymbol_1 === regularSymbol_2); // regularSymbol_1 === regularSymbol_2 false
    console.log('globalSymbol_1 == regularSymbol_1', globalSymbol_1 == regularSymbol_1); // globalSymbol_1 == regularSymbol_1 false
    console.log('globalSymbol_1 === regularSymbol_1', globalSymbol_1 === regularSymbol_1); // globalSymbol_1 === regularSymbol_1 false
    console.log('Symbol.keyFor(globalSymbol_1)', Symbol.keyFor(globalSymbol_1)) // Symbol.keyFor(globalSymbol_1) id1

    // ... symbol.iterator
    const myIterable = {
        items: ['apple', 'banana', 'cherry'],

        // defining Symbol iterator
        [Symbol.iterator]() {
            let index = 0;

            // returning a object that implement the 'next' method
            return {
                next: () => {
                    // if there are more elements -> return them
                    if (index < this.items.length) {
                        return { value: this.items[index++], done: false };
                    } else {
                        // when there is no more elements -> return { done: true }
                        return { done: true };
                    }
                }
            };
        }
    };

    console.log('myIterable', myIterable)
    /* 
        myIterable {
            items: [ 'apple', 'banana', 'cherry' ],
            [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]
        }
    */
   
    for (const fruit of myIterable) {
        console.log(fruit);
    }
    /*
        apple
        banana
        cherry
    */

    // 2. ARRAYS
    var arr_1 = [1, 2, 3, 4];
    console.log('arr_1', arr_1, typeof (arr_1)); // arr_1 [ 1, 2, 3, 4 ] object
    var arr_2 = [1, 'abc', 3, false];
    console.log('arr_2', arr_2, typeof (arr_2)); // arr_2 [ 1, 'abc', 3, false ] object

    // 3. FUNCTIONS
    const func_1 = () => {
        console.log("func_1 - Hello1"); // func_1 - Hello1
    }
    func_1();
    console.log('typeof(func_1)', typeof (func_1)); // typeof(func_1) function

    function func_2() {
        console.log("func_2 - Hello2"); // func_2 - Hello2
    }
    func_2();
    console.log('typeof(func_2)', typeof (func_2)); // typeof(func_2) function

    // DINAMICALLY CHANGED TYPE
    var changedVal_1 = 42;
    changedVal_1 = "Hello";
    console.log('changedVal_1', changedVal_1, typeof (changedVal_1)); // changedVal_1 Hello string

    // +++++++++++++++ LITERALS (both)

    let literal_1 = 5; // numeric (integer)
    let literal_2 = 5.4; // numeric (floating-point)
    let literal_3 = "apple"; // string 
    let literal_4 = 'apple'; // string
    let literal_5 = true; // boolean
    let literal_6 = false; // boolean
    let literal_7 = [5, 4, 9]; // array
    let literal_8 = {
        property1: 'value1',
        property2: 5
    } // object
    let literal_9 = /^a/; // regexp

}

