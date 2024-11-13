export const closure = () => {

    // +++++++++++++++ var

    var var_1 = 5;
    var var_2 = 5;
    var var_3 = 5;
    var var_4 = 5;
    var var_5 = 5;


    function func_1() {
        var var_1 = 10;
        let var_2 = 10;
        const var_3 = 10;               
        var_4 = 10;
        var var_6 = 10;
        return [var_1, var_2, var_3, var_4, var_5];
    }
    console.log(func_1()); // [ 10, 10, 10, 10, 5 ]
    console.log([var_1, var_2, var_3, var_4, var_5]); // [ 5, 5, 5, 10, 5 ]
    // console.log(var_6); // ReferenceError: var_6 is not defined

    // +++++++++++++++ let

    let let_1 = 5;
    let let_2 = 5;
    let let_3 = 5;
    let let_4 = 5;
    let let_5 = 5;

    function func_2() {
        var let_1 = 10;
        let let_2 = 10;
        const let_3 = 10;               
        let_4 = 10;
        let let_6 = 10;
        return [let_1, let_2, let_3, let_4, let_5];
    }
    console.log(func_2()); // [ 10, 10, 10, 10, 5 ]
    console.log([let_1, let_2, let_3, let_4, let_5]); // [ 5, 5, 5, 10, 5 ]
    // console.log(let_6); // ReferenceError: let_6 is not defined

    // +++++++++++++++ const

    const const_1 = 5;
    const const_2 = 5;
    const const_3 = 5;
    const const_4 = 5;    
    const const_5 = 5;

    function func_3() {
        var const_1 = 10;
        let const_2 = 10;
        const const_3 = 10;               
        // const_4 = 10; // TypeError: Assignment to constant variable.
        const const_6 = 10;
        return [const_1, const_2, const_3, const_4, const_5];
    }
    console.log(func_3()); // [ 10, 10, 10, 5, 5 ]
    console.log([const_1, const_2, const_3, const_4, const_5]); // [ 5, 5, 5, 5, 5 ]
    // console.log(const_6); // ReferenceError: const_6 is not defined

    // +++++++++++++++ nesting scopes

    var nest_1 = 20;
    let nest_2 = 20;
    const nest_3 = 20;

    {
        console.log(nest_1); // 20
        nest_1 = 30;
        {
            console.log(nest_1); // 30
            console.log(nest_2); // 20
            nest_2 = 30;
            {
                console.log(nest_2); // 30
                console.log(nest_3); // 20
                var nest_4 = 51;
                let nest_5 = 52;
            }
        }
    }

    console.log([nest_1, nest_2, nest_3, nest_4]) // [ 30, 30, 20, 51 ]
    // console.log(nest_5); // ReferenceError: nest_5 is not defined

    // +++++++++++++++ counter

    var count_1 = 0;
    let count_2 = 0;

    function createCounter() {
        var count_3 = 0;
        let count_4 = 0;
        const count_5 = 0;
        return {
            increment: function() { 
                return [++count_1, ++count_2, ++count_3, ++count_4]; 
            },
            decrement: function() { 
                return [--count_1, --count_2, --count_3, --count_4]; 
            },
            reset: function() { 
                count_1 = 0; 
                count_2 = 0;
                count_3 = 0;
                count_4 = 0;
                return [count_1, count_2, count_3, count_4]; 
            }
        };
    }
    
    const counter = createCounter();
    console.log([count_1, count_2]) // [ 0, 0 ]
    console.log(counter.increment()); // [ 1, 1 ]
    console.log(counter.increment()); // [ 2, 2 ]
    console.log(counter.decrement()); // [ 1, 1 ]
    console.log(counter.reset());     // [ 0, 0 ]
    console.log([count_1, count_2]) // [ 0, 0 ]

    // +++++++++++++++ settings

    function objectSettings(name, age) {
        // let name; // SyntaxError: Identifier 'name' has already been declared
        // let age = 22; // SyntaxError: Identifier 'age' has already been declared
        let job = "Web Developer"
        return {
            language: "JavaScript",
            getName: function() { return name; },
            getAge: function() { return age; },
            getJob: function() { return job; },
            setName: function(newName) { name = newName; }
        };
    }
    
    const user = objectSettings("Daria", 33);
    console.log(user.getName()); // Daria
    user.setName("Sanja");
    console.log(user.getName()); // Sanja
    console.log(user.getAge()); // 33
    console.log(user.name); // undefined
    console.log(user.age); // undefined
    console.log(user.job); // undefined
    console.log(user.language); // JavaScript
    console.log(user.country); // undefined

    // +++++++++++++++ cache

    function createCache() {
        const cache = {};
        return function(key, value) {
            if (value !== undefined) {
                cache[key] = value;
            }
            return cache[key];
        };
    }
    
    const cache = createCache();
    cache("name", "James");
    console.log(cache("name")); // James

    // +++++++++++++++ response messages    

    function createMessage(greeting) {
        return function(name) {
            console.log(`${greeting}, ${name}!`);
        };
    }
    
    const sayHello = createMessage("Hello");
    sayHello("Alice"); // Hello, Alice!
    const sayGoodbye = createMessage("Goodbye");
    sayGoodbye("Mila"); // Goodbye, Mila!

    // +++++++++++++++ timer

    function timer() {
        const start = Date.now();
        return function() {
            const elapsed = Date.now() - start;
            console.log(`Elapsed time: ${elapsed} ms`);
        };
    }
    
    const myTimer1 = timer();
    setTimeout(myTimer1, 1000); // Elapsed time: 1020 ms
    const myTimer2 = timer();
    setTimeout(myTimer2, 1000); // Elapsed time: 1022 ms
    const myTimer3 = timer();
    setTimeout(myTimer3, 3000); // Elapsed time: 3015 ms
    

}