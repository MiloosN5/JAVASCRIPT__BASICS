export const controlFlow = () => {

    // 1. SEQUENTIAL EXECUTION (DEFAULT FLOW)

        console.log("Start"); // Start (order: 1)
        console.log("Middle"); // Middle (order: 2)
        console.log("End");  // End (order: 3)

    // 2. BLOCK STATEMENTS

        console.log("Before block"); // Before block (order: 1)
        {
            console.log("Block statement 1"); // Block statement 1 (order: 2)
            console.log("Block statement 2"); // Block statement 2 (order: 3)
        }
        console.log("After block"); // After block (order: 4)

    // 3. CONDITIONAL STATEMENTS

        // if ... else if ... else

            function testIf(x) {
                if(x > 0) {
                    console.log("Positive");
                } else if (x === 0) {
                    console.log("Zero");
                } else {
                    console.log("Negative");
                }
            }

            testIf(5); // Positive
            testIf(0); // Zero
            testIf(-5); // Negative

            // ternary operator

                var if_x = -5;
                const if_res = if_x > 0 ? "Positive" : "Non-positive";
                console.log(if_res); // Non-positive
        
        // switch

            function switchDay(day) {
                switch(day) {
                    case 'Monday':
                        console.log("Monday");
                        break;
                    case 'Tuesday':
                        console.log('Tuesday');
                    case 'Wednesday':
                        console.log('Wednesday')
                        break;
                    case 'Thursday':
                    case 'Friday':
                        break;
                    case 'Saturday':
                    case 'Sunday':
                        console.log('Weekend')
                        break;
                    default:
                        console.log('There is a mistake')
                }
            }

            switchDay('Monday') // Monday
            switchDay('Tuesday') 
            /*
                Tuesday
                Wednesday
            */
            switchDay('Wednesday') // Wednesday
            switchDay('Thursday') // 
            switchDay('Friday') //
            switchDay('Saturday') // Weekend
            switchDay('Sunday')  // Weekend
            switchDay('something else') // There is a mistake

    // 4. LOOPS

        // for
   
            for(let i = 0; i < 5; i++) {
                console.log(i);
                /*
                    0
                    1
                    2
                    3
                    4
                */
            }

        // while

            let while_a = 0;

            while(while_a < 5) {
                console.log(while_a);
                /*
                    0
                    1
                    2
                    3
                    4
                */    
                while_a++;
            }        

        // do ... while
            
            // ------ 1
            let doWhile_a = 0;

            do {
                console.log(doWhile_a)
                /*
                    0
                    1
                    2
                    3
                    4
                */                 
                doWhile_a++
            } while (doWhile_a < 5)

            // ------ 2
            let doWhile_b = 0;

            do {
                console.log(doWhile_b) // 0
                doWhile_b++
            } while (doWhile_b > 5)                

        // for ... in

            const forIn_1 = { a: 1, b: 2, c: 3 }
            for(let key in forIn_1) {
                console.log(`${key}:${forIn_1[key]}`)
                /*
                    a:1
                    b:2
                    c:3 
                */
            }

        // for ... of

            const forOf_1 = [10, 20, 30];
            for(let val of forOf_1) {
                console.log(val);
                /*
                    10
                    20
                    30
                */
            }

        // control flow within Loops (break & continue)

            // break statement
         

                for(let i = 0; i < 10; i++) {
                    if(i === 5) break;
                    console.log(i)
                    /*
                        0
                        1
                        2
                        3
                        4
                    */
                }

            // continue statement

                for(let i = 0; i < 10; i++) {
                    if(i % 2 === 0) continue;
                    console.log(i)
                    /*
                        1
                        3
                        5
                        7
                        9
                    */
                }

    // 5. EXCEPTION HANDLING (try...catch & throw statements & the finally block)

        // ------ 1
        try {
            throw new Error("Something went wrong")
        } catch (error) {
            console.error("Caught error:", error.message) // Caught error: Something went wrong (order: 1)
        } finally {
            console.log("Executon completed") // Exeuction completed (order: 2)
        }

        // ------ 2
        var exceptHandling_a2;
        var exceptHandling_b2;

        function exceptHandling_2(num) {
            num--;
            const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            if (months[num]) {
                return months[num];
            } else {
                throw new Error("InvalidMonthNumber");
            }
        }
          
        try {
            exceptHandling_a2 = exceptHandling_2(17); 
        } catch (e) {
            exceptHandling_a2 = "unknown";
            exceptHandling_log2(e); // Error logged: InvalidMonthNumber
        }
        try {
            exceptHandling_b2 = exceptHandling_2(1); 
        } catch (e) {
            exceptHandling_b2 = "unknown";
            exceptHandling_log2(e); 
        }

        function exceptHandling_log2(error) {
            console.error("Error logged:", error.message);
        }

        console.log('My month\'s abbrevation is: ' + exceptHandling_a2) // My month's abbrevation is: unknown
        console.log('My month\'s abbrevation is: ' + exceptHandling_b2) // My month's abbrevation is: Jan

    // 6. FUNCTIONS & RETURN

        function func_1(a, b) {
            return a + b;
        }
        console.log(func_1(5, 3)) // 8

    // 7. ASYNCHRONOUS CONTROL FLOW

        // ------ 1 Promise (with fetch)
        fetch("https://jsonplaceholder.typicode.com/albums?_limit=3")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
            /*  with a delay  
                [
                    { userId: 1, id: 1, title: 'quidem molestiae enim' },
                    { userId: 1, id: 2, title: 'sunt qui excepturi placeat culpa' },
                    { userId: 1, id: 3, title: 'omnis laborum odio' }
                ]
            */

        // ------ 2 Promise (with new Promise)
        const promise_2 = new Promise((resolve, reject) => {
            const success = true;
            setTimeout(() => {
                if (success) {
                    resolve("Promise fulfilled!"); // Successful resolution
                } else {
                    reject("Promise rejected!"); // Error or failure
                }
            }, 3000); 
        });

        promise_2
            .then((result) => {
                console.log(result); 
            })
            .catch((error) => {
                console.error(error); 
            });
            // Promise fulfilled! (3s delay)

        // ------ 3 Promise (Chaining Promises)
        const promise_3a = () => Promise.resolve("Step 1 complete");
        const promise_3b = () => Promise.resolve("Step 2 complete");
        const promise_3c = () => Promise.resolve("Step 3 complete");

        promise_3a()
            .then((res1) => {
                console.log(res1); 
                return promise_3b(); 
            })
            .then((res2) => {
                console.log(res2); 
                return promise_3c(); 
            })
            .then((res3) => {
                console.log(res3); 
            })
            .catch((error) => {
                console.error("Error in the process:", error);
            });
            /* with a little delay
                Step 1 complete
                Step 2 complete
                Step 3 complete
            */

        // ------ 4 Promise (Promise.all)
        const promise_4a = Promise.resolve("First done");
        const promise_4b = new Promise((resolve) => setTimeout(() => resolve("Second done"), 5000));
        const promise_4c = new Promise((resolve) => setTimeout(() => resolve("Third done"), 8000));

        Promise.all([promise_4a, promise_4b, promise_4c])
            .then((results) => {
                console.log(results); 
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });
            // [ 'First done', 'Second done', 'Third done' ] (8s delay)

        // ------ 5 async/await
        async function async_5() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=2");
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        async_5();
        /*
            [
                { userId: 1, id: 1, title: 'quidem molestiae enim' },
                { userId: 1, id: 2, title: 'sunt qui excepturi placeat culpa' }
            ]
        */

    // 8. IMPORT/EXPORT

    // 9. ITERATORS & GENERATORS

        // iterators

            const iter_iterable1 = [10, 20, 30];
            const iter_iterator1 = iter_iterable1[Symbol.iterator]();

            console.log(iter_iterator1.next()); // { value: 10, done: false }
            console.log(iter_iterator1.next()); // { value: 20, done: false }
            console.log(iter_iterator1.next()); // { value: 30, done: false }
            console.log(iter_iterator1.next()); // { value: undefined, done: true }

        // generators

            function* gener_func() {
                yield 1;
                yield 2;
                yield 3;
            }
            const gener_1 = gener_func();
            
            console.log(gener_1.next()); // { value: 1, done: false }
            console.log(gener_1.next()); // { value: 2, done: false }
            console.log(gener_1.next()); // { value: 3, done: false }
            console.log(gener_1.next()); // { value: undefined, done: true }

    // 10. LABEL 

        // ------ 1 label + break
        outer: for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i !== j) break outer;
                console.log(`i: ${i}, j: ${j}`); // i: 0, j: 0
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i === j) break;
                console.log(`i: ${i}, j: ${j}`);
                /*
                    i: 1, j: 0
                    i: 2, j: 0
                    i: 2, j: 1
                */
            }
        }        

        // ------ 2 label + continue
        outer: for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i === j) continue outer;
                console.log(`i: ${i}, j: ${j}`);
                /*
                    i: 1, j: 0
                    i: 2, j: 0
                    i: 2, j: 1
                */
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i === j) continue;
                console.log(`i: ${i}, j: ${j}`);
                /*
                    i: 0, j: 1
                    i: 0, j: 2
                    i: 1, j: 0
                    i: 1, j: 2
                    i: 2, j: 0
                    i: 2, j: 1
                */
            }
        }

}