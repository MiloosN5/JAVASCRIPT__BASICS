export const prototype = () => {

    // + Object type

    console.log(Object.__proto__); // {}
    // browser console: ƒ () { [native code] }
    console.log(Object.prototype); // [Object: null prototype] {}
    // browser console: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
    console.log(Object.getPrototypeOf(Object.prototype)); // null
    console.log(Object.prototype.__proto__); // null

    try {
        console.log(Object.getPrototypeOf());
    } catch (error) {
        console.error(error.message); // Cannot convert undefined or null to object
    }

    // + Object type instance(s)

    const obj_1 = {};

    console.log(obj_1.prototype); // undefined
    console.log(obj_1.__proto__); // [Object: null prototype] {}
    // browser console: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
    console.log(Object.getPrototypeOf(obj_1)); // [Object: null prototype] {}
    // browser console: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
    console.log(Object.getPrototypeOf(obj_1) === Object.prototype); // true
    console.log(Object.getPrototypeOf(Object.prototype)); // null

    const obj_2 = { name: "Alisa" }

    console.log(obj_2.prototype); // undefined
    console.log(obj_2.__proto__); // [Object: null prototype] {}
    console.log(Object.getPrototypeOf(obj_2)); // [Object: null prototype] {}
    console.log(Object.getPrototypeOf(obj_2) === Object.prototype); // true

    // + Date object instance

    const obj_3 = new Date();
    let obj_4 = obj_3; // reference to the date object instance

    console.log(obj_3.prototype); // undefined
    console.log(obj_3.__proto__); // {}
    // browser console: {toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, toUTCString: ƒ, …}
    console.log(Object.getPrototypeOf(obj_3)); // {}
    // browser console: {toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, toUTCString: ƒ, …}
    console.log(obj_4.prototype); // undefined
    console.log(obj_4.__proto__); // {}
    // browser console: {toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, toUTCString: ƒ, …}
    console.log(Object.getPrototypeOf(obj_4)); // {}
    // browser console: {toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, toUTCString: ƒ, …}

    // + Array object instance

    const arr_1 = [1, 2, 9, 4, 11];
    console.log(arr_1.prototype); // undefined
    console.log(arr_1.__proto__); // Object(0) []
    // browser console: [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
    console.log(Object.getPrototypeOf(arr_1)); // Object(0) []
    // browser console: [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    /*
        NOTE: this is not a good solution since we shouldn't directly change prototype
        SOLUTION:
            1)
                class CustomArray extends Array {
                    last() {
                        return this[this.length - 1];
                    }
                }

                const arr_1 = new CustomArray(1, 2, 9, 4, 11);
                console.log(arr_1.last()); // 11

                const arr_2 = new CustomArray(3, 5, 7);
                console.log(arr_2.last()); // 7
            2)
                function last(array) {
                    if (Array.isArray(array)) {
                        return array[array.length - 1];
                    }
                    return undefined;
                }

                const arr_1 = [1, 2, 9, 4, 11];
                console.log(last(arr_1)); // 11
    */

    console.log(arr_1.last()); // 11

    // + Symbol object instance

    const symbol_1 = Symbol("id");
    console.log(symbol_1.prototype); // undefined
    console.log(symbol_1.__proto__); // Object [Symbol] {}
    console.log(Object.getPrototypeOf(symbol_1)); // Object [Symbol] {}

    // Boolean 

    // primitive value
    const boolean_1 = Boolean(true);
    console.log(boolean_1.prototype); // undefined
    console.log(boolean_1.__proto__); // {}
    console.log(Object.getPrototypeOf(boolean_1)); // {}
    console.log(Object.getPrototypeOf(boolean_1) === Boolean.prototype); // true
    console.log(boolean_1.__proto__ === Boolean.prototype); // true

    // + Boolean object instance
    const boolean_2 = new Boolean(true);
    console.log(boolean_2.prototype); // undefined
    console.log(boolean_2.__proto__); // {}
    // browser console:  Boolean {false, toString: ƒ, valueOf: ƒ}
    console.log(Object.getPrototypeOf(boolean_2)); // {}
    // browser console:  Boolean {false, toString: ƒ, valueOf: ƒ}
    console.log(Object.getPrototypeOf(boolean_2) === Boolean.prototype); // true
    console.log(boolean_2.__proto__ === Boolean.prototype); // true

    // + String object instance

    const str_1 = "hello";
    const str_2 = new String("hello");

    console.log(str_1.prototype); // undefined
    console.log(str_2.prototype); // undefined
    console.log(str_1.__proto__); // {}
    // // browser console:  String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
    console.log(str_2.__proto__); // {}
    // // browser console:  String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
    console.log(Object.getPrototypeOf(str_1)); // {}
    // // browser console:  String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
    console.log(Object.getPrototypeOf(str_2)); // {}
    // // browser console:  String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
    console.log(str_1.__proto__ === str_2.__proto__); // true
    console.log(Object.getPrototypeOf(str_1) === Object.getPrototypeOf(str_2)); // true

    // + Functions

    // arrow functions don't have prototype property (they can't be used as a constructor, so they don't have prototype)
    const func_1 = () => {
        let a = 5;
        let b = 10;
        let c = a + b;
        return c;
    }

    console.log(func_1.prototype); // undefined
    console.log(func_1.__proto__); // {}
    // browser console: ƒ () { [native code] }
    console.log(Object.getPrototypeOf(func_1)); // {}
    // browser console: ƒ () { [native code] }
    console.log(Object.getPrototypeOf(func_1) === Function.prototype); // true

    // regular functions have prototype property
    function func_2() {
        return "Hello";
    }

    console.log(func_2.prototype); // {}
    console.log(func_2.__proto__); // {}
    // browser console: ƒ () { [native code] }
    console.log(Object.getPrototypeOf(func_2)); // {}
    // browser console: ƒ () { [native code] }
    console.log(Object.getPrototypeOf(func_2) === Function.prototype); // true

    //  constructor  + prototype method
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function () {
        return `Hello, my name is ${this.name}`;
    }

    const person1 = new Person("Alisa");
    console.log(Person.prototype); // { greet: [Function (anonymous)] }
    console.log(person1.greet()); // Hello, my name is Alisa
    console.log(person1.prototype); // undefined
    console.log(person1.__proto__); // { greet: [Function (anonymous)] }
    console.log(Object.getPrototypeOf(person1)); // { greet: [Function (anonymous)] }
    console.log(person1.__proto__ === Person.prototype); // true
    console.log(Person.prototype.constructor === Person); // true

}