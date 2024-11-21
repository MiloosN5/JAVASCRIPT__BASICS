import * as mod from "./example_import.js";

export const expressionsOperators = () => {

    // Expressions & operators

        // primary expressions - have higher precendence than operators

            // this

                // ------ 1
                const this_1 = {
                    prop1: 42,
                    function1: function () {
                        return 5
                    },
                    // prop2: function1(), // ReferenceError: function1 is not defined
                    // prop3: this.function1(), // TypeError: Cannot read properties of undefined (reading 'function1')
                    function2: function () {
                        return 5 + prop1
                    },
                    function3: function () {
                        return this.prop1;
                    }
                }
                console.log(this_1.function3()); // 42
                // console.log(this_1.function2()); // ReferenceError: prop1 is not defined

                // ------ 2
                const this_2 = {
                    prop1: 42,
                    function1: () => {
                        return 5
                    },
                    // prop2: function1(), // ReferenceError: function1 is not defined
                    // prop3: this.function1(), // TypeError: Cannot read properties of undefined (reading 'function1')
                    function2: () => {
                        return 5 + prop1 // ReferenceError: prop1 is not defined
                    },
                    function3: () => {
                        return this.prop1;
                    }
                }
                // console.log(this_2.function3()); //  TypeError: Cannot read properties of undefined (reading 'prop1')
                // console.log(this_2.function2()); // ReferenceError: prop1 is not defined

                // ------ 3
                var this_globalVar_3a = 5;

                function this_3a() {
                    return this.this_globalVar_3a; // TypeError: Cannot read properties of undefined (reading 'this_globalVar_3a')
                }
                // console.log(this_3a()); // TypeError: Cannot read properties of undefined (reading 'this_globalVar_3a')

                /*
                    NOTE: in strict mode 'this' referes to UNDEFINED, while in non-strict mode it refers to the 'global object'
                */

                function this_3b() {
                    return this.this_globalVar_3b; // TypeError: Cannot read properties of undefined (reading 'this_globalVar_3b')
                }
                // console.log(this_3b()); // TypeError: Cannot read properties of undefined (reading 'this_globalVar_3b')

                // ------ 4
                global.this_globalVar_4 = 5;

                function this_4a() {
                    return this.this_globalVar_4;
                }
                // console.log(this_4a()); //TypeError: Cannot read properties of undefined (reading 'this_globalVar_4')

                function this_4b() {
                    return this.global.this_globalVar_4;
                }
                // console.log(this_4b()) //TypeError: Cannot read properties of undefined (reading 'global')

                // ------ 5
                const this_5_arrow1 = () => { // before context
                    return this.this_var_5;
                };

                const this_context_5 = { var_5: "Value" };
                //console.log(this_5_arrow1()); // TypeError: Cannot read properties of undefined (reading 'this_var_5')
                //console.log(this_5_arrow1.call(this_context_5)); // TypeError: Cannot read properties of undefined (reading 'this_var_5')
                //console.log(this_5_arrow1.apply(this_context_5)) // TypeError: Cannot read properties of undefined (reading 'this_var_5')
                const this_bound_5a = this_5_arrow1.bind(this_context_5);
                //console.log(bound_5a()); // TypeError: Cannot read properties of undefined (reading 'this_var_5')

                const this_5_arrow2 = () => { // after context
                    return this.this_var_5;
                };
                // console.log(this_5_arrow2()); //TypeError: Cannot read properties of undefined (reading 'this_var_5')
                //console.log(this_5_arrow2.call(this_context_5)); // TypeError: Cannot read properties of undefined (reading 'this_var_5')
                //console.log(this_5_arrow2.apply(this_context_5)) // TypeError: Cannot read properties of undefined (reading 'this_var_5')
                const this_bound_5b = this_5_arrow2.bind(this_context_5);
                // console.log(this_bound_5b()); // TypeError: Cannot read properties of undefined (reading 'this_var_5')

                // ------ 6
                function this_6_funcdeclaration1() { // before context
                    return this.this_var_6;
                };

                const this_context_6 = { this_var_6: "Value" };
                // console.log(this_6_funcdeclaration1()); // TypeError: Cannot read properties of undefined (reading 'this_var_6')
                console.log(this_6_funcdeclaration1.call(this_context_6)); // Value
                console.log(this_6_funcdeclaration1.apply(this_context_6)) // Value
                const this_bound_6a = this_6_funcdeclaration1.bind(this_context_6);
                console.log(this_bound_6a()); // Value

                function this_6_funcdeclaration2() { // after context
                    return this.this_var_6;
                };
                //console.log(this_6_funcdeclaration2()); //TypeError: Cannot read properties of undefined (reading 'this_var_6')
                console.log(this_6_funcdeclaration2.call(this_context_6)); // Value
                console.log(this_6_funcdeclaration2.apply(this_context_6)) // Value
                const this_bound_6b = this_6_funcdeclaration2.bind(this_context_6);
                console.log(this_bound_6b()); // Value

                // ------ 7
                function this_7(c, d) {
                    return this.a + this.b + c + d;
                }
                const this_context_7 = { a: 1, b: 3 };
                console.log(this_7.call(this_context_7, 5, 7)); // 16
                console.log(this_7.apply(this_context_7, [10, 20])); // 34

                // ------ 8
                function this_8() {
                    return this;
                }

                const this_obj_8a = { this_name: "obj_8a " };
                const this_obj_8b = { this_name: "obj_8b " }

                this_obj_8a.this_8 = this_8;
                this_obj_8b.this_8 = this_8;

                console.log(this_obj_8a); // { this_name: 'obj_8a ', this_8: [Function: this_8] }
                console.log(this_obj_8a.this_8()); // { this_name: 'obj_8a ', this_8: [Function: this_8] }
                console.log(this_obj_8b); // { this_name: 'obj_8b ', this_8: [Function: this_8] }
                console.log(this_obj_8b.this_8()); // { this_name: 'obj_8b ', this_8: [Function: this_8] }

                const this_obj_8c = {
                    __proto__: this_obj_8a,
                    name: "this_obj_8c",
                };
                console.log(this_obj_8c.this_8()); // { name: 'this_obj_8c' }

                // ------ 9
                var this_var_9 = 10;

                function this_9() {
                    return this.this_var_9;
                }

                const this_obj_9a = { this_var_9: "this_obj_9a " };
                const this_obj_9b = { this_var_9: "this_obj_9b " }

                this_obj_9a.this_9 = this_9;
                this_obj_9b.this_9 = this_9;

                console.log(this_obj_9a); // { this_var_9: 'this_obj_9a ', this_9: [Function: this_9] }
                console.log(this_obj_9a.this_9()); // this_obj_9a
                console.log(this_obj_9b); // { this_var_9: 'this_obj_9b ', this_9: [Function: this_9] }
                console.log(this_obj_9b.this_9()); // this_obj_9b

                // ------ 10
                const this_obj_10a = {
                    name: "this_obj_10a",
                    this_10() {
                        return this;
                    },
                };

                const this_obj_10b = { name: "obj_10b" };
                this_obj_10b.this_10 = this_obj_10a.this_10;
                console.log(this_obj_10b); // { name: 'obj_10b', this_10: [Function: this_10] }
                console.log(this_obj_10b.this_10()); // { name: 'obj_10b', this_10: [Function: this_10] }

                // ------ 11
                function this_11() {
                    console.log(this);
                }

                [1, 2, 3].forEach(this_11); 
                /*
                    undefined
                    undefined
                    undefined
                */
                [1, 2, 3].forEach(this_11, { name: "this_obj_11" });
                /*
                    { name: 'this_obj_11' }
                    { name: 'this_obj_11' }
                    { name: 'this_obj_11' }
                */

                // ------ 12
                const this_const_12 = this;
                const this_12 = () => this;
                console.log(this_12() === this_const_12); // true

                const this_context_12 = { name: "this_obj_12" };
                console.log(this_12.call(this_context_12) === this_const_12); // true
                const this_bound_12 = this_12.bind(this_context_12);
                console.log(this_bound_12() === this_const_12); // true

                // ------ 13
                function this_13a() {
                    this.a = 37;
                }
                let this_obj_13 = new this_13a();
                console.log(this_obj_13.a); // 37

                function this_13b() {
                    this.a = 37;
                    return { a: 38 };
                }
                this_obj_13 = new this_13b();
                console.log(this_obj_13.a); // 38

                // ------ 14
                class This_Class_14 {
                    instanceField = this;
                    static staticField = this;
                }

                const this_obj_14 = new This_Class_14();
                console.log(this_obj_14.instanceField === this_obj_14); // true
                console.log(This_Class_14.staticField === This_Class_14); // true

                // ------ 15
                class This_Base_15 { }
                class This_Good_15 extends This_Base_15 { }
                class This_AlsoGood_15 extends This_Base_15 {
                    constructor() {
                        return { a: 5 };
                    }
                }
                class This_Bad_15 extends This_Base_15 {
                    constructor() { }
                }

                class This_BadCorrected_15 extends This_Base_15 {
                    constructor() {
                        super();
                        this.a = 10;
                    }
                }

                new This_Good_15();
                new This_AlsoGood_15();
                //new This_Bad_15(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
                new This_BadCorrected_15();

                // ------ 16
                class This_Car_16 {
                    constructor() {
                        this.sayBye = this.sayBye.bind(this);
                    }
                
                    sayHi() {
                        console.log(`Hello from ${this.name}`);
                    }
                
                    sayBye() {
                        console.log(`Bye from ${this.name}`);
                    }
                
                    get name() {
                        return "Ferrari";
                    }
                }
                
                class This_Bird_16 {
                    get name() {
                        return "Tweety";
                    }
                }
                
                const this_car_16 = new This_Car_16();
                const this_bird_16 = new This_Bird_16();
                
                // The value of 'this' in methods depends on their caller
                this_car_16.sayHi(); // Hello from Ferrari
                this_bird_16.sayHi = this_car_16.sayHi;
                this_bird_16.sayHi(); // Hello from Tweety
                
                // For bound methods, 'this' doesn't depend on the caller
                this_bird_16.sayBye = this_car_16.sayBye;
                this_bird_16.sayBye(); // Bye from Ferrari
                
                // ------ 17
                /*
                    when using Nodejs -> ReferenceError: window is not defined 
                    NOTE: output comments down below are when using browser!
                */
                // console.log(this === window); // true
                // this.this_var_17a = "Birds";
                // console.log(window.this_var_17a); // Birds
                // console.log(this_var_17a); // Birds

                // const this_obj_17 = {
                //     prop: this,
                // };
                // console.log(this_obj_17.prop === window); // true

                console.log(this === global); // false
                global.this_var_17b = "Birds";
                console.log(global.this_var_17b); // Birds
                console.log(this_var_17b); // Birds

                // ------ 18
                function this_18() {
                    console.log(eval("this") === this);
                    console.log(eval?.("this") === globalThis);
                    console.log(eval?.("'use strict'; this") === globalThis);
                    console.log(eval?.("this") === global);
                }
                this_18.call({ name: "this_obj_18" }); 
                /*
                    true
                    true
                    true
                    true
                */

            // Literals

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

            // []

                const sqBrack_1 = [];
                sqBrack_1.push("banana", "apple", "peach");
                console.log(sqBrack_1.length); // 3
                sqBrack_1[5] = "mango";
                console.log(sqBrack_1[5]); // mango
                console.log(Object.keys(sqBrack_1)); // ['0', '1', '2', '5']
                console.log(sqBrack_1.length); // 6

            // {}

                const crlBrack_1 = { a: 'foo', b: 42, c: { myProp: 12 } };
                console.log(crlBrack_1.a); // foo

            // function

                const function_1 = function (width, height) {
                    return width * height;
                };
                console.log(function_1(3, 4)); // 12

            // class

                const Class_1 = class {
                    constructor(height, width) {
                        this.height = height;
                        this.width = width;
                    }
                    area() {
                        return this.height * this.width;
                    }
                };
                console.log(new Class_1(5, 8).area()); // 40

            // function*

                const generator_1 = function* () {
                    yield 'a';
                    yield 'b';
                    yield 'c';
                };
                let generator_str_1 = '';
                for (const val of generator_1()) {
                    generator_str_1 = generator_str_1 + val;
                }
                console.log(generator_str_1); // abc

            // async function

                function asyncFunc_resolve(x) {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(x);
                        }, 2000);
                    });
                }
                const asyncFunc_1 = async function (x) {
                    const a = await asyncFunc_resolve(20);
                    const b = await asyncFunc_resolve(30);
                    return x + a + b;
                };
                asyncFunc_1(10).then((v) => {
                    console.log(v); // 60 (after 4000ms delay)
                });

            // async function*

                async function* asyncGenerator_1() {
                    yield await Promise.resolve('a');
                    yield await Promise.resolve('b');
                    yield await Promise.resolve('c');
                }
                let asyncGenerator_str = '';
                async function asyncGenerator_func() {
                    for await (const val of asyncGenerator_1()) {
                        asyncGenerator_str = asyncGenerator_str + val;
                    }
                    console.log(asyncGenerator_str);
                }
                asyncGenerator_func(); // abc (with delay)

            // regex

                const regex_str = "#foo#";
                const regex_1 = /foo/y;

                regex_1.lastIndex = 1;
                console.log(regex_1.test(regex_str)); // true
                regex_1.lastIndex = 5;
                console.log(regex_1.test(regex_str)); // false 
                console.log(regex_1.lastIndex); // 0 

            // template literals

                // using normal strings
                console.log("string text line 1\n" + "string text line 2");
                /*
                    string text line 1
                    string text line 2
                */

                // using template literals
                console.log(`string text line 1
                    string text line 2`);
                /*
                    string text line 1
                                        string text line 2
                */
                console.log(`string text line 1
string text line 2`);    
                /*
                    string text line 1
                    string text line 2
                */
                console.log(`string text line 1 \
                    string text line 2`);
                /*
                    string text line 1                     string text line 2
                */                    
                console.log(`string text line 1 \
string text line 2`);        
                /*
                    string text line 1 string text line 2
                */               

                // string interpolation
                const tempLit_1 = 5;
                const tempLit_2 = 10;
                console.log(`Fifteen is ${tempLit_1 + tempLit_2} and
                not ${2 * tempLit_1 + tempLit_2}.`);
                /*
                    Fifteen is 15 and
                                    not 20.
                */  

            // ()

                console.log((1 + 2) * 3); // 3 * 3 => 9

        // left-hand-side expressions

            // Property accessors

                const access_key = "name";
                const access_func = () => "name";
                const access_obj = { name: "Michel" };
                console.log(access_obj.age); // undefined
                console.log(access_obj.name); // Michel
                console.log(access_obj['name']); // Michel
                console.log(access_obj[access_key]); // Michel
                console.log(access_obj[access_func()]); // Michel

            // ?.

                const optChain_1 = {
                    name: 'Alice',
                    cat: {
                        name: 'Dinah',
                    },
                };
                console.log(optChain_1.cat?.name); // Dinah
                console.log(optChain_1.dog?.name); // undefined
              
            // new

                function New_1(make, model, year) {
                    this.make = make;
                    this.model = model;
                    this.year = year;
                }
                const new_obj = new New_1('Eagle', 'Talon TSi', 1993);
                console.log(new_obj.make); // Eagle

            // new.target

                function NewTarget_1() {
                    if (!new.target) {
                        throw new TypeError('calling NewTarget_1 constructor without new is invalid');
                    }
                    return 5
                }
                try {
                    NewTarget_1();
                    console.log('Valid1')
                } catch (e) {
                    console.error(e.message); // TypeError: calling NewTarget_1 constructor without new is invalid
                }
                try {
                    new NewTarget_1();
                    console.log('Valid2') // Valid2
                } catch (e) {
                    console.error(e.message);
                }

            // import.meta

                // ------ 1
                console.log(import.meta.url)

                // ------ 2
                async function importMeta_1() {
                    const modulePath = new URL('./example_importmeta.js', import.meta.url);
                    const { greet } = await import(modulePath.href);
                    greet();
                }
                importMeta_1(); // Hello from example_importmeta!
                   
            // super

                class Super_Class_1 {
                    constructor(name) {
                        this.name = name;
                    }

                    getNameSeparator() {
                        return '-';
                    }
                }
                class Super_Class_2 extends Super_Class_1 {
                    constructor(name, index) {
                        super(name);
                        this.index = index;
                    }

                    getNameSeparator() {
                        return '/';
                    }

                    getFullName() {
                        return this.name + super.getNameSeparator() + this.index + this.getNameSeparator() + this.index;
                    }
                }
                const super_obj = new Super_Class_2('foo', 1);
                console.log(super_obj.name); // foo
                console.log(super_obj.getFullName()); // foo-1/1

            // import()

                import("./example_import.js").then((mod2) => {
                    console.log(mod === mod2); // true
                });

        // increment & decrement

            // A++

                let postfixIncr_1 = 3;
                const postfixIncr_2 = postfixIncr_1++;
                console.log(`x:${postfixIncr_1}, y:${postfixIncr_2}`); // x: 4, y: 3

            // A--

                let postfixDecr_1 = 3;
                const postfixDecr_2 = postfixDecr_1--;
                console.log(`x:${postfixDecr_1}, y:${postfixDecr_2}`); // x: 2, y: 3

            // ++A

                let prefixIncr_1 = 3;
                const prefixIncr_2 = ++prefixIncr_1;
                console.log(`x:${prefixIncr_1}, y:${prefixIncr_2}`); // x: 4, y: 4

            // --A

                let prefixDecr_1 = 3;
                const prefixDecr_2 = --prefixDecr_1;
                console.log(`x:${prefixDecr_1}, y:${prefixDecr_2}`); // x: 2, y: 2

        // unary operators

            // delete

                const delete_1 = {
                    firstname: 'Maria',
                    lastname: 'Sanchez',
                };
                console.log(delete_1.firstname); // Maria
                delete delete_1.firstname;
                console.log(delete_1.firstname); // undefined
                console.log(delete_1); // { lastname: 'Sanchez' }

            // void

                const void_1 = void 1;
                console.log(void_1); // undefined

                void console.log('expression evaluated'); // expression evaluated

                void (function void_2() {
                    console.log('iife is executed'); // iife is executed
                })();

                void function void_3() {
                    console.log('void_3 function executed');
                };
                try {
                    void_3();
                } catch (e) {
                    console.log('void_3 function is not defined'); // void_3 function is not defined
                }

            // typeof

                console.log(typeof undefined) // undefined

                // access before declaration
                console.log(typeof typeof_1); // undefined
                
                try {
                    console.log(typeof typeof_2); 
                } catch (error) {
                    console.error(error.message) // Cannot access 'typeof_2' before initialization
                }

                try {
                    console.log(typeof typeof_3); 
                } catch (error) {
                     console.error(error.message) // Cannot access 'typeof_3' before initialization
                }

                try {
                    console.log(typeof Typeof_4); 
                } catch (error) {
                     console.error(error.message) // Cannot access 'Typeof_4' before initialization
                }                
                
                let typeof_2;
                const typeof_3 = "hello";
                class Typeof_4 {}

                console.log(typeof typeof_2) // undefined
                console.log(typeof typeof_3) // string
                console.log(typeof Typeof_4) // function

                // number
                console.log(typeof 37) // number
                console.log(typeof 3.13) // number
                console.log(typeof Math.LN2) // number
                console.log(typeof Infinity) // number
                console.log(typeof NaN) // number
                console.log(typeof Number("1")) // number
                console.log(typeof Number("shoe")) // number

                // bigint
                console.log(typeof 384928738n) // bigint
                console.log(typeof 42n) // bigint

                // strings
                console.log(typeof '') // string
                console.log(typeof ' ') // string
                console.log(typeof "") // string
                console.log(typeof " ") // string
                console.log(typeof 'a') // string
                console.log(typeof "a") // string
                console.log(typeof 'text') // string
                console.log(typeof "text") // string
                console.log(typeof `template literal`) // string
                console.log(typeof '1') // string
                console.log(typeof "1") // string
                console.log(typeof typeof 1) // string
                console.log(typeof String(2)) // string

                // booleans
                console.log(typeof true) // boolean
                console.log(typeof false) // boolean
                console.log(typeof True) // undefined
                console.log(typeof False) // undefined
                console.log(typeof Boolean(1)) // boolean
                console.log(typeof !!3) // boolean

                // symbols
                console.log(typeof Symbol()) // symbol
                console.log(typeof Symbol("foo")) // symbol
                console.log(typeof Symbol.for("foo2")) // symbol
                console.log(typeof Symbol.iterator) // symbol

                // objects
                console.log(typeof { a: 1 }); // object
                console.log(typeof [1, 2, 4]); // object
                console.log(typeof new Date()); // object
                console.log(typeof /regex/); // object
                console.log(typeof new Boolean(true)); // object
                console.log(typeof new Number(1)); // object
                console.log(typeof new String("abc")); // object
                console.log(typeof null); // object
                const typeof_obj_1 = new String("String");
                const typeof_obj_2 = new Number(100); 
                console.log(typeof typeof_obj_1);  // object
                console.log(typeof typeof_obj_2);  // object

                // functions
                console.log(typeof function () {}); // function
                console.log(typeof class C {}); // function
                console.log(typeof Math.sin); // function
                const typeof_func_1 = new Function();
                console.log(typeof typeof_func_1); // function

                // importance of parentheses
                const typeof_parenth_1 = 99;
                console.log(typeof typeof_parenth_1 + " points"); // number points
                console.log(typeof (typeof_parenth_1 + " points")); // string

            // +

                const unaryPlus_1 = 1;
                const unaryPlus_2 = -1;

                console.log(+unaryPlus_1); // 1
                console.log(+unaryPlus_2); // -1
                console.log(+''); // 0
                console.log(+true); // 1
                console.log(+false); // 0
                console.log(+'hello'); // NaN

            // -

                const unaryMinus_1 = 4;
                const unaryMinus_2 = -unaryMinus_1;
                console.log(unaryMinus_2); // -4

                const unaryMinus_3 = '4';
                const unaryMinus_4 = -unaryMinus_3;
                console.log(unaryMinus_4); // -4

            // ~

                const bitwiseNot_1 = 5; 
                const bitwiseNot_2 = -3; 
                console.log(~bitwiseNot_1); // -6
                console.log(~bitwiseNot_2); // 2

            // !

                const logicalNot_1 = 3;
                const logicalNot_2 = -2;
                console.log(!(logicalNot_1 > 0 || logicalNot_2 > 0)); // false

            // await

                function await_resolve_1(x) {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(x);
                        }, 2000);
                    });
                }
                async function await_func_1() {
                    const x = await await_resolve_1(10);
                    console.log(x); 
                }
                await_func_1(); // 10 (with delay of 2000ms -> 2 seconds)

        // arithmetic operators

            // **

                console.log(3 ** 4); // 81
                console.log(10 ** -2); // 0.01
                console.log(2 ** (3 ** 2)); // 512
                console.log((2 ** 3) ** 2); // 64

            // *

                console.log(3 * 4); // 12
                console.log(-3 * 4); // -12
                console.log('3' * 2); // 6
                console.log('foo' * 2); // NaN

            // /

                console.log(12 / 2); // 6
                console.log(3 / 2); // 1.5
                console.log(6 / '3'); // 2
                console.log(2 / 0); // Infinity

            // %

                console.log(13 % 5); // 3
                console.log(-13 % 5); // -3
                console.log(4 % 2); // 0
                console.log(-4 % 2); // -0

            // +

                console.log(2 + 2); // 4
                console.log(2 + true); // 3
                console.log('hello ' + 'everyone'); // hello everyone
                console.log(2001 + ': A Space Odyssey'); // 2001: A Space Odyssey

            // -

                console.log(5 - 3); // 2
                console.log(3.5 - 5); // -1.5
                console.log(5 - 'hello'); // NaN
                console.log(5 - true); // 4

        // relational operators
        
            // <

                console.log(5 < 3); // false
                console.log(3 < 3); // false
                console.log(3n < 5); // true
                console.log('aa' < 'ab'); // true

            // >

                console.log(5 > 3); // true
                console.log(3 > 3); // false
                console.log(3n > 5); // false
                console.log('ab' > 'aa'); // true            

            // <=

                console.log(5 <= 3); // false
                console.log(3 <= 3); // true
                console.log(3n <= 5); // true
                console.log('aa' <= 'ab'); // true            

            // >= (not "=>", it is the notation for Arrow functions)
            
                console.log(5 >= 3); // true
                console.log(3 >= 3); // true
                console.log(3n >= 5); // false
                console.log('ab' >= 'aa'); // true   

            // instanceof
            
                function Instanceof_Class_1(make, model, year) {
                    this.make = make;
                    this.model = model;
                    this.year = year;
                }
                const instanceof_obj = new Instanceof_Class_1('Honda', 'Accord', 1998);
                console.log(instanceof_obj instanceof Instanceof_Class_1); // true
                console.log(instanceof_obj instanceof Object); // true

            // in
            
                const in_obj = { make: 'Honda', model: 'Accord', year: 1998 };
                console.log('make' in in_obj); // true
                delete in_obj.make;
                if ('make' in in_obj === false) {
                    in_obj.make = 'Suzuki';
                }
                console.log(in_obj.make); // Suzuki

        // equality operators

            // ==
            
                console.log(1 == 1); // true
                console.log('hello' == 'hello'); // true
                console.log('1' == 1); // true
                console.log(0 == false); // true

            // !=
            
                console.log(1 != 1); // false
                console.log('hello' != 'hello'); // false
                console.log('1' != 1); // false
                console.log(0 != false); // false

            // ===
           
                console.log(1 === 1); // true
                console.log('hello' === 'hello'); // true
                console.log('1' === 1); // false
                console.log(0 === false); // false

            // !==
           
                console.log(1 !== 1); // false
                console.log('hello' !== 'hello'); // false
                console.log('1' !== 1); // true
                console.log(0 !== false); // true

        // Bitwise shift operators

            // <<

                console.log(5 << 2); // 20
                console.log(5 << -2); // 1073741824

            // >>

                console.log(5 >> 2); //  1
                console.log(-5 >> 2); //  -2

            // >>>

                console.log(5 >>> 2); // 1
                console.log(-5 >>> 2); //  1073741822

        // Binary bitwise operators

            // &

                console.log(5 & 3); // 1
                console.log(3 & 5); // 1
                console.log(-5 & 3); // 3
                console.log(3 & -5); // 3
                console.log(-5 & -3); // -7
                console.log(-3 & -5); // -7

            // |

                console.log(5 | 3); // 7
                console.log(3 | 5); // 7
                console.log(-5 | 3); // -5
                console.log(3 | -5); // -5
                console.log(-5 | -3); // -1
                console.log(-3 | -5); // -1

            // ^

                console.log(5 ^ 3); // 6
                console.log(3 ^ 5); // 6          

        // Binary logical operators

            // &&
                
                console.log(3 > 0 && -2 > 0); // false
                console.log(-3 > 0 && 2 > 0); // false
                console.log(3 > 0 && 2 > 0); // true

            // ||

                console.log(3 > 0 || -2 > 0); // true
                console.log(-3 > 0 || 2 > 0); // true
                console.log(-3 > 0 || -2 > 0); // false
                console.log(3 > 0 || 2 > 0); // true            

            // ??

                console.log(0 ?? 50); // 0
                console.log(0 ?? 0); // 0
                console.log(null ?? null); // null
                console.log(null ?? 0); // 0
                console.log(null ?? 'default'); // default
                console.log(undefined ?? 'default'); // default
                console.log('default' ?? null) // default
                console.log('default1' ?? 'default2') // default1

        // conditional (ternary) operator

            // (condition ? ifTrue : ifFalse)

                function conditionalOper_1(isMember) {
                    return isMember ? '$2.00' : '$10.00';
                }

                console.log(conditionalOper_1(true)); // $2.00
                console.log(conditionalOper_1(false)) // $10.00
                console.log(conditionalOper_1(null)); // $10.00

        // Assignment operators

            // =
 
                let assign_1 = 2;
                const assign_2 = 3;
                console.log(assign_1); // 2
                console.log((assign_1 = assign_2 + 1)); // 3 + 1 => 4
                console.log((assign_1 = assign_1 * assign_2)); // 4 * 3 => 12

            // *=

                let assign_mult_1 = 2;
                console.log((assign_mult_1 *= 3)); // 6
                console.log((assign_mult_1 *= 'hello')); // NaN

            // /=

                let assign_div_1 = 3;
                assign_div_1 /= 2;
                console.log(assign_div_1); // 1.5
                assign_div_1 /= 0;
                console.log(assign_div_1); // Infinity
                assign_div_1 /= 'hello';
                console.log(assign_div_1); // NaN

            // %=

                let assign_remain_1 = 3;
                console.log((assign_remain_1 %= 2)); // 1
                console.log((assign_remain_1 %= 0)); // NaN
                console.log((assign_remain_1 %= 'hello')); // NaN

            // +=

                let assign_add_1 = 2;
                let assign_add_2 = 'hello';
                console.log((assign_add_1 += 3)); // 5
                console.log((assign_add_2 += ' world')); // hello world

            // -=

                let assign_sub_1 = 2;
                console.log((assign_sub_1 -= 3)); // -1
                console.log((assign_sub_1 -= 'Hello')); // NaN

            // <<=

                let assign_ls_1 = 5; 
                assign_ls_1 <<= 2; 
                console.log(assign_ls_1); // 20

            // >>=

                let assign_rs_1 = 5; 
                assign_rs_1 >>= 2; 
                console.log(assign_rs_1); // 1
                let assign_rs_2 = -5; 
                assign_rs_2 >>= 2;
                console.log(assign_rs_2); // -2

            // >>>=

                let assign_urs_1 = 5;
                assign_urs_1 >>>= 2;
                console.log(assign_urs_1); // 1
                let assign_urs_2 = -5; 
                assign_urs_2 >>>= 2; 
                console.log(assign_urs_2); // 1073741822

            // &=

                let assign_ba_1 = 5; 
                assign_ba_1 &= 3; 
                console.log(assign_ba_1); // 1

            // ^=

                let assign_bx_1 = 5; 
                assign_bx_1 ^= 3; 
                console.log(assign_bx_1); // 6

            // |=

                let assign_bo_1 = 5; 
                assign_bo_1 |= 3; 
                console.log(assign_bo_1); // 7

            // **=

                let assign_exp_1 = 3;
                console.log((assign_exp_1 **= 2)); // 9
                console.log((assign_exp_1 **= 0)); // 1
                console.log((assign_exp_1 **= 'hello')); // NaN

            // &&=

                let assign_la_1 = 1;
                let assign_la_2 = 0;
                assign_la_1 &&= 2;
                console.log(assign_la_1); // 2
                assign_la_2 &&= 2;
                console.log(assign_la_2); // 0

            // ||=

                const assign_lo_1 = { duration: 50, title: '' };
                assign_lo_1.duration ||= 10;
                console.log(assign_lo_1.duration); // 50
                assign_lo_1.title ||= 'title is empty.';
                console.log(assign_lo_1.title); // title is empty.

            // ??=

                const assign_nc_1 = { duration: 50 };
                assign_nc_1.speed ??= 25;
                console.log(assign_nc_1.speed); // 25
                assign_nc_1.duration ??= 10;
                console.log(assign_nc_1.duration); // 50

            // [a, b] = arr, { a, b } = obj

                let assign_desc_1, assign_desc_2, assign_desc_rest;
                [assign_desc_1, assign_desc_2] = [10, 20];
                console.log(assign_desc_1); // 10
                console.log(assign_desc_2); // 20
                [assign_desc_1, assign_desc_2, ...assign_desc_rest] = [10, 20, 30, 40, 50];
                console.log(assign_desc_rest); // [30, 40, 50]

        // yield operators

            // yield

                function* yield_1(index) {
                    while (index < 2) {
                        yield index;
                        index++;
                    }
                }
                const yield_iter = yield_1(0);
                console.log(yield_iter.next().value); // 0
                console.log(yield_iter.next().value); // 1

            // yield*

                function* yield_gener_1() {
                    yield 42;
                }
                function* yield_gener_2() {
                    yield* yield_gener_1();
                }
                const yield_gener_iter = yield_gener_2();
                console.log(yield_gener_iter.next().value); // 42

        // spread syntax

            // ...obj

                function spread_func(a, b, c, d) {
                    return a + b + c + d;
                }
                const spread_1 = [1, 2, 3];
                console.log(spread_func(5, ...spread_1)); // 11
                console.log(spread_func.apply(null, [5, ...spread_1])); // 11
                const spread_2 = [1, 2, 3, 8];
                console.log(spread_func(...spread_2)); // 14
                console.log(spread_func.apply(null, spread_2)); // 14

        // comma operator

            // ,

                let comma_1 = 1;
                comma_1 = (comma_1++, comma_1);
                console.log(comma_1); // 2
                comma_1 = (2, 3);
                console.log(comma_1); // 3

}