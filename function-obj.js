import someFunc, { externalFunc1} from './example_functionName.js'

export const functionObj = () => {
    
    const constructor = () => {

        // ------ 1
        const func_1 = new Function("a", "b", "return a + b /* comments are accepted*/");
        console.log(func_1); // [Function: anonymous]
        console.log(func_1(2, 5)); // 7

        // ------ 2
        const func_2 = new Function(
            `const a2 = (arr) => arr.reduce((previousVal,
            currentVal) => previousVal + currentVal); return a2`
        )();

        console.log(func_2); // [Function: a2]
        console.log(func_2([1, 2, 3, 4])); // 10

        // ------ 3
        const func_3 = new Function(
            `const a3 = (arr) => arr.reduce((previousVal,
            currentVal) => previousVal + currentVal); return a3`
        );

        console.log(func_3); // [Function: anonymous]
        console.log(func_3([1, 2, 3, 4])); // [Function: a3]

        // ------ 4
        const func_4 = new Function(
            `function a4 (arr) { return Math.max(...arr) };
            return a4`
        )

        console.log(func_4); // [Function: anonymous]
        console.log(func_4([1, 2, 3, 4])); // [Function: a4]
        console.log(func_4.call({}, ([1, 2, 3, 4]))); // [Function: a4]
        console.log(func_4.call({}).call({}, ([1, 2, 3, 4]))); // 4

        // ------ 5
        const func_5 = new Function(
            "return function (name) { return `Hello ${name}`}"
        )();

        console.log(func_5("world")); // Hello world

        // ------ 6
        const func_6 = new Function(
            "count",
            `
                (function func_6(count) {
                    if (count < 0) {
                        return;
                    }
                    console.log(count);
                    func_6(count - 1);
                })(count);
            `
        );

        console.log(func_6(5))
        /*
            5
            4
            3
            2
            1
            0
        */
          

    }

    const instanceProperties = () => {

        const constructor = () => {
            const func_1 = new Function();
            console.log(func_1.constructor); // [Function: Function]
            
            const func_2 = new Function("a", "b", "return a + b;");
            console.log(func_2.constructor); // [Function: Function]        
        }

        const length = () => {

            // + the arguments object

            // ------ 1
            function func_1() { console.log(arguments.length)}
            console.log(func_1.length); //  0 (parameters)     
            func_1(); // 0 (arguments)
            func_1(12); // 1 (argument but function has not parameters)

            // ------ 2
            function func_2(a, b) { console.log(arguments.length)}
            console.log(func_2.length); //  2 (parameters)
            func_2(); // 0 (arguments)
            func_2(4); // 1 (argument)
            func_2(4, 8); // 2 (arguments)
            func_2(4, 8, 5); // 3 (arguments but function has only two parameters)
            
            // ------ 3
            const func_3 = (...args) => {
                //console.log('c', arguments.length) // The arguments object is a local variable available within all non-arrow functions
                console.log(args.length)
            }
            console.log(func_3.length) // 0
            func_3(3, 4, 9, 11, 15, 3); // 6 (arguments)
            console.log(((...args) => {}).length); // 0
            console.log(((a, b = 1, c) => {}).length); // 1 
            console.log((({ a, b }, [c, d]) => {}).length); // 2 

            // ------ 4
            function func_4 (...args) {
                console.log(arguments.length)
            }
            console.log(func_4.length) // 0 (parameters)
            func_4(3, 4, 9, 11, 15, 3); // 6 (arguments)

            // ------ others
            console.log(Function.length); // 1
            console.log(Function.prototype.length); // 0
            console.log((() => {}).length); // 0
            console.log(((a) => {}).length); // 1
            console.log(((a, b) => {}).length); //  2

            // synchronizing the passed value with the function's arguments object

                // ------ 5
                function func_5(a) {
                    arguments[0] = 99; 
                    console.log(a);
                }
                func_5(10); // 10 (because of use-strict/nodejs => arguments[0]` and `param` are not linked. Modifying `arguments[0]` does not affect the value of `param`)
                //func_5(10); // 99 (with non-strict & without nodejs => arguments[0]` and `param` are synchronized. Modifying `arguments[0]` would also change the value of `param`)

                // ------ 6
                function func_6(a) {
                    a = 99; 
                    console.log(arguments[0]);
                }
                func_6(10); // 10 (because of use-strict/nodejs => arguments[0]` and `param` are not linked. Modifying `arguments[0]` does not affect the value of `param`) 
                //func_6(10); // 99 (with non-strict & without nodejs => arguments[0]` and `param` are synchronized. Modifying `arguments[0]` would also change the value of `param`)
            
                // ------ 7
                function func_7(a) {
                    console.log(arguments[0]);
                    console.log(arguments.length); 
                }
                func_7(15);
                /*
                    15
                    1
                */

                // ------ 8
                function func_8(a = 55) {
                    arguments[0] = 99; // updating arguments[0] does not also update a
                    console.log(a);
                }
                func_8(10); // 10

                // ------ 9
                function func_9(a = 55) {
                    a = 99; // updating a does not also update arguments[0]
                    console.log(arguments[0]);
                }
                func_9(10); // 10

                // ------ 10 (An untracked default parameter)
                function func_10(a = 55) {
                    console.log(arguments[0]); // undefined
                    console.log(arguments.length); // 0
                }
                func_10(); 

        }

        const name = () => {

            // ------ 1 (function as a object property)
            const obj_1 = {
                function1a: function () {},
                function1b() {},
                get function1c() {},
                set function1c(x) {},
                get function1d() {},
                set function1d(x) {}
            };  
            console.log(obj_1.function1a.name); // function1a
            console.log(obj_1.function1b.name); // function1b
            const descriptor_1 = Object.getOwnPropertyDescriptors(obj_1);
            console.log(descriptor_1.function1c.get.name); // get function1c
            console.log(descriptor_1.function1c.set.name); // set function1c
            console.log(descriptor_1.function1d.get.name); // get function1d
            console.log(descriptor_1.function1d.set.name); // set function1d

            // ------ 2 (imported)
            console.log(someFunc.name); // default
            console.log(externalFunc1.name); // externalFunc1
        
            // new Function instance)
                
                console.log(new Function().name); // anonymous

                function Func_3() {};
                const obj_3 = new Func_3();
                console.log(obj_3.constructor.name); // Func_3
                console.log(obj_3.name); // undefined

            // function expression

                // ------ 4
                const func_4 = function function4() {};
                console.log(func_4.name); // function4

                // ------ 5
                const func_5 = function () {};
                console.log(func_5.name); // func_5

                // ------ 6
                console.log((function () {}).name); // no output

            // arrow function

                // ------ 7
                console.log((() => {}).name); // no output

                // ------ 8
                let func_8 = () => {};
                console.log(func_8.name); // func_8

            // function declaration

                // ------ 9
                function func_9() {}
                // func_9.name = "newName"; // TypeError: Cannot assign to read only property 'name' of function 'function func_9() {}'
                console.log(func_9.name); // func_9

                // ------ 10
                function func_10() {}
                console.log(func_10.bind({}).name); // bound func_10 (bound + function name)

                // ------ 11
                function func_11() {
                    return () => {};
                }
                console.log(func_11().name); // no output

                // ------ 12
                function func_12(f = () => {}) {
                    console.log(f.name);
                }
                func_12(); // "f"

            // ------ 13 (array destructuring)
            const [func_13 = () => {}] = [];
            console.log(func_13.name); // "func_13"

            // ------ 14 (object destructuring)
            const { method_14: f = () => {} } = {};
            console.log(f.name); // "f"

            // class

                // ------ 15
                class Class_15 {
                    static method_15a = () => {};
                    #field15 = () => {};
                    #method_15b() {};
                    getNames() {
                        console.log(this.#field15.name);
                        console.log(this.#method_15b.name);
                    }
                }
                console.log(Class_15.method_15a.name); // method_15a
                console.log(Class_15.name); // Class_15
                new Class_15().getNames();
                /*
                    #field15
                    #method_15b
                */

                // ------ 16
                class Class_16 {
                    constructor() {}
                    static name() {}
                }

                const obj_16 = new Class_16();
                console.log(obj_16.constructor.name); // [Function: name]

                // ------ 17
                class Class_17 {
                    constructor() {}
                    static name = 123;
                }

                const obj_17 = new Class_17();
                console.log(obj_17.constructor.name); // 123
                console.log(Class_17.name); // 123

                Class_17.name = "Hello";
                console.log(obj_17.constructor.name); // Hello

            // ------ 18 (Symbol)
            const symbol_18a = Symbol("f_18");
            const symbol_18b = Symbol();

            const obj_18 = {
                [symbol_18a]() {},
                [symbol_18b]() {}
            }

            console.log(obj_18[symbol_18a].name) // [f_18]
            console.log(obj_18[symbol_18b].name) // no output
        }

        const prototype = () => {

            // ------ 1
            function Func_1() {}
            const obj_1 = new Func_1();
            const obj_2 = new Func_1();
            Func_1.prototype.prop = 5;
            console.log(obj_1.prop); // 5
            console.log(obj_2.prop); // 5

            // ------ 2
            class Class_2 {
                constructor(name) {
                    this.name = name;
                }
            }

            Class_2.prototype.color = "blue";
            console.log(new Class_2("Azure").color); // blue
            console.log(new Class_2("Navy").color); // blue  

            // ------ 3 (more ergonomic approach)
            class Class_3 {
                static {
                    Class_3.prototype.color = "blue";
                }
                constructor(name) {
                    this.name = name;
                }
            }

            console.log(new Class_3("Azure").color); // blue
            console.log(new Class_3("Navy").color); // blue  
        }

        // constructor();
        // length();
        // name();
        // prototype();

    }

    const instanceMethods = () => {

        const apply = () => {

            // ------ 1 (using apply() to append an array to another)
                const arr_1a = ["a", "b"];
                const arr_1b = [0, 1, 2];
                arr_1a.push.apply(arr_1a, arr_1b);
                console.log(arr_1a); // ['a', 'b', 0, 1, 2]

                // the same effect as above but with spread operator instead of apply
                const arr_1c = ["a", "b"];
                const arr_1d = [0, 1, 2];
                arr_1c.push(...arr_1d); 
                console.log(arr_1c); // ['a', 'b', 0, 1, 2]

            // ------ 2 (using apply() and built-in functions)

                const arr_2 = [5, 6, 2, 3, 7];

                // using Math.max / Math.min
                let max2a = Math.max.apply(null, arr_2);
                let min2a = Math.min.apply(null, arr_2);
                console.log(max2a); // 7
                console.log(min2a); // 2

                // vs. loop based algorithm
                let max2b = -Infinity;
                let min2b = +Infinity;

                for (let i = 0; i < arr_2.length; i++) {
                    if (arr_2[i] > max2b) {
                        max2b = arr_2[i];
                    }
                    if (arr_2[i] < min2b) {
                        min2b = arr_2[i];
                    }
                }
                console.log(max2b); // 7
                console.log(min2b); // 2

            // ------ 3
            function func_3(arr) {
                let min = Infinity;
                const QUANTUM = 32768;

                for (let i = 0; i < arr.length; i += QUANTUM) {
                    const subMin = Math.min.apply(
                        null,
                        arr.slice(i, Math.min(i + QUANTUM, arr.length)),
                    );
                    min = Math.min(subMin, min);
                }

                return min;
            }

            const min_3 = func_3([5, 6, -2, 3, 7]);
            console.log(min_3); // -2
              
        }

        const bind = () => {

            // ------ 1
            // this.x1 = 9; // causing error in nodejs (strict mode)
            const obj_1 = {
                x1: 42,
                getX: function () {
                    return this.x1;
                },
            };

            const unboundGetX_1 = obj_1.getX;
            // console.log(unboundGetX_1()); // TypeError: Cannot read properties of undefined (reading 'x1')
            /*
                9 => in non-strict mode: the 'this' parameter of 'unboundGetX_1' is bound to 'globalThis'.
                TypeError => in strict mode (nodejs): the 'this' parameter of 'unboundGetX_1' will be bound to undefined instead of globalThis, causing the 'unboundGetX_1()' call to fail.
            */
            const boundGetX_1 = unboundGetX_1.bind(obj_1);
            console.log(boundGetX_1()); // 42

            // ------ 2
            function Func_2() {
                this.x = 50;
            }

            const obj_2a = new Func_2();
            console.log(obj_2a.x); // 50    
            const BoundFunc_2 = Func_2.bind(null);
            console.log(BoundFunc_2.x); // undefined          
            const obj_2b = new BoundFunc_2();
            console.log(obj_2b.x); // 50 

            // ------ 3 (Chained Bound Functions)
            function log_3(...args) {
                console.log(this, ...args);
            }
            const boundLog_3 = log_3.bind("this value", 1, 2);
            const boundLog_3a = boundLog_3.bind("new this value", 3, 4);
            boundLog_3a(5, 6); // this value 1 2 3 4 5 6

            // ------ 4 (using 'bind' with Constructable Functions)
            class Class_4 {
                constructor(...args) {
                    console.log(new.target === Class_4);
                    console.log(args);
                }
            }

            // Class_4(5, 8); // TypeError: Class constructor Class_4 cannot be invoked without 'new'
            new Class_4(5, 8);
            /*
                true
                [ 5, 8 ]
            */
            const BoundClass_4 = Class_4.bind(null, 1, 2);
            new BoundClass_4(3, 4); 
            /*
                true
                [ 1, 2, 3, 4 ]
            */

            // ------ 5
            class Class_5 {}
            const BoundClass_5 = Class_5.bind(null, 1, 2);
            console.log(new Class_5() instanceof BoundClass_5); // true
            console.log(new BoundClass_5() instanceof Class_5); // true
            
            // ------ 6
            function list_6(...args) {
                return args;
            }
            
            function addArguments_6(arg1, arg2) {
                return arg1 + arg2;
            }
            
            console.log(list_6(1, 2, 3)); // [1, 2, 3]
            console.log(addArguments_6(1, 2)); // 3
            
            const leadingThirtySevenList_6 = list_6.bind(null, 37);
            const addThirtySeven_6 = addArguments_6.bind(null, 37);
            
            console.log(leadingThirtySevenList_6()); // [37]
            console.log(leadingThirtySevenList_6(1, 2, 3)); // [37, 1, 2, 3]
            console.log(addThirtySeven_6(5)); // 42
            console.log(addThirtySeven_6(5, 10)); // 42
  
            // with setTimeout())
            
                // ------ 7 (with bind)
                class Class_7 {
                    constructor() {
                        this.petalCount = Math.floor(Math.random() * 12) + 1;
                    }
                    bloom() {
                        setTimeout(this.declare.bind(this), 1000);
                    }
                    declare() {
                        console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
                    }
                }
            
                const flower_7 = new Class_7();
                flower_7.bloom(); // I am a beautiful flower with 3 petals! (with delay of 1s)

                // ------ 8 (without bind)
                class Class_8 {
                    constructor() {
                        this.petalCount = Math.floor(Math.random() * 12) + 1;
                    }
                    bloom() {
                        setTimeout(this.declare, 1000);
                    }
                    declare() {
                        console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
                    }
                }
            
                const flower_8 = new Class_8();
                flower_8.bloom(); // I am a beautiful flower with undefined petals! (with delay of 1s)

                // ------ 9 (without bind)
                class Class_9 {
                    constructor() {
                        this.value = 42;
                    }
                
                    logValue() {
                        console.log(this.value);  
                    }
                
                    start() {
                        setTimeout(this.logValue, 1000); // `this` is lost, because logValue was not called from the instance 
                    }
                }
                
                const obj_9 = new Class_9();
                obj_9.start(); // undefined (with delay of 1s)
                
                // ------ 10 (with bind)
                class Class_10 {
                    constructor() {
                        this.value = 42;
                    }
                
                    logValue() {
                        console.log(this.value);  
                    }
                
                    start() {
                        setTimeout(this.logValue.bind(this), 1000);  //  bind()` ensures that `this` is an instance
                    }
                }
                
                const obj_10 = new Class_10();
                obj_10.start(); // 42 (with delay of 1s)

            // ------ 11 (bound functions used as constructors)
            function Func_11(x, y) {
                this.x = x;
                this.y = y;
            }
            
            Func_11.prototype.toString = function () {
                return `${this.x},${this.y}`;
            };
            
            const obj_11a = new Func_11(1, 2);
            console.log(obj_11a.toString()); // 1, 2
            
            const BoundFunc_11 = Func_11.bind(null, 0);
            const obj_11b = new BoundFunc_11(5);
            console.log(obj_11b.toString()); // 0, 5
            
            console.log(obj_11b instanceof Func_11); // true
            console.log(obj_11b instanceof BoundFunc_11); // true
            console.log(new BoundFunc_11(17, 42) instanceof Func_11); // true
            
            const obj_empty11 = {};
            const Bounded2Func_11 = Func_11.bind(obj_empty11, 0);
            Bounded2Func_11(13);
            console.log(obj_empty11); // { x: 0, y: 13 }

            // ------ 12 (binding classes)
            class Base_12 {
                static baseProp = "base";
                baseProp2 = "base2";
            }
            
            class Derived_12 extends Base_12 {
                static derivedProp = "derived";
                derivedProp2 = "derived2";
            }

            const obj_12a = new Derived_12();
            console.log(obj_12a.baseProp2); // base2
            console.log(obj_12a.derivedProp2); // derived2
            console.log(Derived_12.baseProp); // base
            console.log(Derived_12.derivedProp); // derived

            const BoundDerived_12 = Derived_12.bind(null);
            console.log(BoundDerived_12.baseProp); // base
            console.log(BoundDerived_12.derivedProp); // undefined
            console.log(Derived_12.baseProp); // base
            console.log(Derived_12.derivedProp); // derived
            console.log(new BoundDerived_12() instanceof Derived_12); // true

            const obj_12b = new BoundDerived_12();
            console.log(obj_12b.baseProp2); // base2
            console.log(obj_12b.derivedProp2); // derived2
        }

        const call = () => {

            // ------ 1
            function Class_1a(name, price) {
                this.name = name;
                this.price = price;
            }

            function Class_1b(name, price) {
                Class_1a.call(this, name, price);
                this.category = 'food';
            }

            console.log(new Class_1b('cheese', 5).name); // cheese

            // ------ 2 (using call() to invoke a function & specifying the 'this' value)
            function func_2() {
                console.log(this.animal, "typically sleep between", this.sleepDuration);
            }

            const obj_2 = {
                animal: "cats",
                sleepDuration: "12 and 16 hours",
            };

            func_2.call(obj_2); // cats typically sleep between 12 and 16 hours
              
            // ------ 3 (using call() to invoke a function without specifying the first argument)
            globalThis.globProp1 = "Wisen";

            function func_3() {
              console.log(`globProp value is ${this.globProp1}`);
            }
            
            // func_3.call(); 
            /*
                non-strict mode => globProp value is Wisen
                strict mode, nodejs => TypeError: TypeError: Cannot read properties of undefined (reading 'globProp1')
            */

        }

        const toString = () => {

            function sum_1(a, b) {
                return a + b;
            }
              
            console.log(sum_1.toString());
            /*
                function sum_1(a, b) {
                    return a + b;
                }
            */
            console.log(Math.abs.toString()); // function abs() { [native code] }
        
            function test_1(fn) {
                console.log(fn.toString());
            }

            console.log(`${test_1}`);
            /*
                function test_1(fn) {
                    console.log(fn.toString());
                }
            */
            console.log(test_1.toString());
            /*
                function test_1(fn) {
                    console.log(fn.toString());
                }
            */            

            function func_1() {}
            class Class_1 {
                method_1() {}
            }
            function* generator_1() {}
            
            test_1(func_1); // function func_1() {}
            test_1(Class_1); // class Class_1 { method_1() {} }
            test_1(generator_1); // function* generator_1() {}
            test_1((method_1) => method_1); // (method_1) => method_1
            test_1({ method_1() {} }.method_1); // method_1() {}
            test_1({ *method_1() {} }.method_1); // *method_1() {}
            test_1({ [0]() {} }[0]); // [0]() {}
            test_1(Object.getOwnPropertyDescriptor({ get method_1() {} }, "method_1").get); // get method_1() {}
            test_1(Object.getOwnPropertyDescriptor({ set method_1(x) {} }, "method_1").set); // set method_1(x) {}
            test_1(Function.prototype.toString); // function toString() { [native code] }
            test_1(function func_2() {}.bind(0)); // function () { [native code] }
            test_1(Function("a", "b", "return a + b")); // function anonymous(a\n) {\nb\n}
            /*
                function anonymous(a, b) {
                    return a + b
                }
            */
        }

        const symbolHasInstance = () => {

            // ------ 1
            class Class_1 {}
            const obj_1 = new Class_1();
            console.log(obj_1 instanceof Class_1 === Class_1[Symbol.hasInstance](obj_1)); // true

            // ------ 2
            class Class_2 {
                static [Symbol.hasInstance](value) {
                    return value;
                }
            }
            
            const obj_2 = new Class_2();
            console.log(obj_2 instanceof Class_2); // true
            console.log(Function.prototype[Symbol.hasInstance].call(Class_2, obj_2)); // true
            console.log(obj_2 instanceof Class_2 === Class_2[Symbol.hasInstance](obj_2)); // false

            // ------ 3
            class Class_3 {
                static [Symbol.hasInstance](value) {
                    return true;
                }
            }
            
            const obj_3 = new Class_3();
            console.log(obj_3 instanceof Class_3); // true
            console.log(Function.prototype[Symbol.hasInstance].call(Class_3, obj_3)); // true
            console.log(obj_3 instanceof Class_3 === Class_3[Symbol.hasInstance](obj_3)); // true

            // ------ 4
            class Class_4 {
                static [Symbol.hasInstance](value) {
                    return false;
                }
            }
              
            const obj_4 = new Class_4();
            console.log(obj_4 instanceof Class_4); // false
            console.log(Function.prototype[Symbol.hasInstance].call(Class_4, obj_4)); // true
            console.log(obj_4 instanceof Class_4 === Class_4[Symbol.hasInstance](obj_4)); // true            

        }

        // apply();
        // bind();
        // call();
        // toString();
        // symbolHasInstance();

    }

    // constructor();
    // instanceProperties();
    // instanceMethods();
}