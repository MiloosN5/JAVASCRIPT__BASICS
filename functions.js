export const functions = () => {

  // +++++++++++++++ function declaration

    // ------ 1
    function func_01(par1, par2, par3) {
      return par1 * 5 + par2 * 3 + par3 * 8;
    }
    console.log(func_01); // [Function: func_01]
    console.log(func_01(2, 5, 14)); // 137
    console.log(func_01); // [Function: func_01]

    // ------ 2    
    function func_02(width, height) {
      return width * height;
    }
    console.log(func_02(4, 8)); // 32

  // +++++++++++++++ function expression

    // ------ 1 named
    const func_03 = function function3(width, height) {
      return width * height;
    }
    console.log(func_03(4, 8)); // 32

    // ------ 2 anonymous
    const func_04 = function (width, height) {
      return width * height;
    }
    console.log(func_04(4, 8)); // 32

  // +++++++++++++++ arrow function

    // ------ 1    
    const func_05 = (width, height) => width * height;
    console.log(func_05(4, 8)); // 32

    // ------ 2    
    const func_06 = (width, height) => {
      return width * height;
    }
    console.log(func_06(4, 8)); // 32

    // ------ 3 multiple statements
    const func_07 = (name) => {
      const greeting = `Hello, ${name}!`;
      return greeting;
    };
    console.log(func_07("Jack")); // Hello, Jack!

  // +++++++++++++++ function inside

    // ------ 1 another function
    function func_08(a_08, b_08) {
      function a_08() { }
      console.log(typeof a_08); // function
      console.log(typeof b_08); // number
    }
    func_08(2, 9); // function

    // ------ 2 another function expression
    const func_09 = function(a_09) {
      // const a_09 = function() { } // SyntaxError: Identifier 'a_09' has already been declared
      console.log(typeof a_09); // number
    }
    func_09(2); // function   
    
    // ------ 3 another arrow function 
    const func_10 = (a_10) => {
      // const a_10 = () => { } // yntaxError: Identifier 'a_10' has already been declared
      console.log(typeof a_10); // number
    }
    func_10(2); // function     

    // ------ 5 object
    const obj_1 = {
      func_11: function func_11(n) {
        console.log(n);
        if (n <= 1) {
          return 1;
        }
        return n * func_11(n - 1);
      },
    };
    obj_1.func_11(5);  // 5 4 3 2 1

    // ------ 6 object
    const obj_2 = {
      func_12: function function12(n) {
        console.log(n);
        if (n <= 1) {
          return 1;
        }
        return n * function12(n - 1);
      },
    };
    obj_2.func_12(5); // 5 4 3 2 1    

    // ------ 7 object
    const obj_3 = {
      func_13: function function13(n) {
        console.log(n);
        if (n <= 1) {
          return 1;
        }
        return n * function13(n - 1);
      },
    };
    // obj_3.function13(5); // TypeError: obj_3.function13 is not a function    

  // +++++++++++++++ the same name function & variable inside

    // 1 - function declaration    

      // ------ 1 
      function func_14() {
        func_14 = 10;
        return func_14;
      }
      console.log(func_14); // [Function: func_14]
      console.log(func_14()); // 10

      // ------ 2
      function func_14a() {
        func_14a = 10;
      }
      console.log(func_14a); // [Function: func_14a]
      console.log(func_14a()); // undefined      

      // ------ 3
      function func_15() {
        // foo_15 = 10; // ReferenceError: foo_15 is not defined
      }
      func_15();
      // console.log(foo_15); // ReferenceError: foo_15 is not defined

    // 2 - function expressions   

      // var

        // ------ 1   
        var func_16 = function () {
          func_16 = 25;
        };
        func_16(); 
        console.log(func_16); // 25

        // ------ 2   
        var func_16a = function () {
          func_16a = 25;
          return func_16a;
        };
        func_16a();
        console.log(func_16a); // 25         

        // ------ 3  
        var func_17 = function () {
          // foo_17 = 25; // ReferenceError: foo_17 is not defined
        };
        func_17();
        // console.log(foo_17); // ReferenceError: foo_17 is not defined 

        // ------ 4  
        var func_18 = function function18() {
          // function18 = 25; // TypeError: Assignment to constant variable.
        };
        func_18();
        // console.log(function18); // ReferenceError: function18 is not defined   
        
        var func_19 = function func_19() {
          // func_19 = 25; // TypeError: Assignment to constant variable.
        };
        console.log(func_19); // [Function: func_19]

      // let 

        // ------ 1   
        let func_20 = function () {
          func_20 = 30;
        };
        func_20();
        console.log(func_20); // 30

        // ------ 2   
        let func_21 = function () {
          // foo_21 = 30; // ReferenceError: foo_21 is not defined
        };
        func_21();
        // console.log(foo_1); // ReferenceError: foo_1 is not defined  

        // ------ 3   
        let func_22 = function function22() {
          // function22 = 30; // TypeError: Assignment to constant variable.
        };
        func_22();
        // console.log(function22); // ReferenceError: function22 is not defined
        
        // ------ 4
        let func_23 = function func_23() {
          // func_23 = 30; // TypeError: Assignment to constant variable.
        };
        console.log(func_23); // [Function: func_23]

      // const 

        // ------ 1  
        let func_24 = function () {
          func_24 = 44;
        };
        func_24();
        console.log(func_24); // 44 

        // ------ 2
        let func_25 = function () {
          // foo_25 = 44; // ReferenceError: foo_25 is not defined
        };
        func_25();
        // console.log(foo_25); // ReferenceError: foo_25 is not defined  

        // ------ 3   
        let func_26 = function function26() {
          // function26 = 44; // TypeError: Assignment to constant variable.
        };
        func_26();
        // console.log(function26); // ReferenceError: function26 is not defined     
        
        // ------ 4
        let func_27 = function func_27() {
          // func_27 = 44; // TypeError: Assignment to constant variable.
        };
        console.log(func_27); // [Function: func_27]
        
    // 3 - arrow function

      // var

        // ------ 1
        var func_28 = () => {
          func_28 = "something";
        };
        console.log(func_28); // [Function: func_28]
        func_28();
        console.log(func_28); // something

        // ------ 2
        var func_28a = () => {
          func_28a = "something";
          return func_28a;
        };
        console.log(func_28a); // [Function: func_28a]
        func_28a();
        console.log(func_28a); // something        

        // ------ 3
        var func_29 = () => {
          // foo_29 = "something"; // ReferenceError: foo_29 is not defined
        };
        func_29();
        // console.log(foo_29); // ReferenceError: foo_29 is not defined   

      // let 

        // ------ 1
        let func_30 = () => {
          func_30 = true;
        };
        func_30();
        console.log(func_30); // true

        // ------ 2
        let func_31 = () => {
        // foo_31 = true; // ReferenceError: foo_31 is not defined
        };
        func_31();
        // console.log(foo_31); // ReferenceError: foo_31 is not defined    

      // const 

        // ------ 1
        let func_32 = () => {
          func_32 = [3, 8];
        };
        console.log(func_32); // [Function: func_32]
        func_32();
        console.log(func_32); // [3, 8]

        // ------ 2
        let func_33 = () => {
          // foo_33 = [3, 8]; // ReferenceError: foo_33 is not defined
        };
        func_33();
        // console.log(foo_33); // ReferenceError: foo_33 is not defined          

  // +++++++++++++++ conflicts YES/NO 

    // 1 - two same named functions declarations

      // ------ 1 with the different params
      function func_34(a) { }
      function func_34(a, b, c) { }
      console.log(func_34.length); // 3
      //let func_34 = 5; // SyntaxError: Identifier 'func_34' has already been declared

      // ------ 2 with the same params
      function func_35(a) { }
      function func_35(a) { }
      console.log(func_35.length); // 1
      //let func_35 = 5; // SyntaxError: Identifier 'func_35' has already been declared

    // 2 - function declarations inside block 

      // ------ 1
      {
        function func_36() { }
        //function func_36() {} // SyntaxError: Identifier 'func_36' has already been declared
      }

      // ------ 2
      try {
        function func_37() { }
        //function func_37() {} // SyntaxError: Identifier 'func_37' has already been declared
      } catch (e) {
        console.error(e.message)
      }

      // ------ 3 conflict with error object 
      try {
      } catch (e) {
        //function e() {} // SyntaxError: Identifier 'e' has already been declared
      }

    // 3 - two same named functions declarations (different scopes)

      // ------ 1 Function exression + new block function expression
      let func_38 = function () {
        console.log("func_38 - outer scope")
      }

      {
        let func_38 = function () {
          console.log("func_38 - inner scope")
        }
        func_38() // func_38 - inner scope
      }

      // ------ 2 Function declaration + new block function expression
      function func_39() {
        console.log("func_39 - outer scope")
      }

      {
        let func_39 = function () {
          console.log("func_39 - inner scope") 
        }
        func_39() // func_39 - inner scope
      }

      // ------ 3 Function declaration + new block function declaration
      function func_40() {
        console.log("func_40 - outer scope")
      }

      {
        function func_40() {
          console.log("func_40 - inner scope")
        }
        func_40() // func_40 - inner scope
      }

      // ------ 4 Function expression + new block function declaration
      let func_41 = function () {
        console.log("func_41 - outer scope")
      }

      {
        function func_41() {
          console.log("func_41 - inner scope")
        }
        func_41() // func_41 - inner scope
      }      

    // 4 - the same name (non-function & function)

      // ------ 1 'var' & 'function declaration'
      var func_42 = 1;
      function func_42() { return 5 }
      console.log(func_42); // 1
      // console.log(func_42()); // TypeError: func_42 is not a function

      // ------ 1a
      function func_42a() { return 5 }
      var func_42a = 1;
      console.log(func_42a); // 1
      // console.log(func_42a()); // TypeError: func_42a is not a function

      // ------ 2 'let' & 'function declaration'
      let func_43 = 1;
      // function func_43() { return 5 } // SyntaxError: Identifier 'func_43' has already been declared
      console.log(func_43); // 1

      // ------ 3 'const' & 'function declaration'  
      const func_44 = 1;
      // function func_44() { return 5 } // SyntaxError: Identifier 'func_44' has already been declared
      console.log(func_44); // 1

    // 5 - invoke block function outside the scope

      // ------ 1
      {
        function func_45() {
          console.log('func_45')
        }
      }
      // func_45() // ReferenceError: func_45 is not defined

      // ------ 2
      function func_46() {
        console.log('func_46')
      }
      {
        func_46() // func_46
      }

    // 6 - IIFE

      // ------ 1
      function func_47() {
        func_47 = 1;
      }
      func_47();
      console.log(func_47); // 1

      (function func_47() {
        // func_47 = 3; // TypeError: Assignment to constant variable.
      })();

      // ------ 2
      (function func_48() {
        // func_48 = 3; // TypeError: Assignment to constant variable.
      })();

      // ------ 3
      (function () {
        console.log("Helloooo!"); // Helloooo!
      })();

      // ------ 4
      !function () {
        console.log("Helloooo2!"); // Helloooo2!
      }();

  // +++++++++++++++ callback

    // NOTE: see StackOverflow (32126003)
    // const button = document.querySelector('#btn_1'); // ReferenceError: document is not defined (because here is used node.js)
    // button.addEventListener("click", function (event) {
    //   console.log("button is clicked!");
    // });

  // +++++++++++++++ asynchronous

    setTimeout(function () {
      console.log("Hello after 2 seconds!"); // Hello after 2 seconds! (with the delay of 2 seconds)
    }, 2000);

  // +++++++++++++++ function + Function() object

    // ------ 1
    var x_49 = 10;

    function func_49a() {
      const x_49 = 20;
      //return new Function("return x_49;"); // ReferenceError: x_49 is not defined
      return () => "x_49 is not defined";
    }

    function func_49b() {
      const x_49 = 20;
      function function49b() {
        return x_49; 
      }
      return function49b;
    }

    const a_49 = func_49a();
    console.log(a_49()); // x_49 is not defined
    const b_49 = func_49b();
    console.log(b_49()); // 20

    // ------ 2
    var x_50 = 10;

    function func_50a() {
      const x_50 = 20;
      return () => x_50;
    }

    function func_50b() {
      const x_50 = 20;
      function function50b() {
        return x_50; 
      }
      return function50b;
    }

    const a_50 = func_50a();
    console.log(a_50()); // 20
    const b_50 = func_50b();
    console.log(b_50()); // 20    

    // ------ 3
    globalThis.x_51 = 10;

    function func_51a() {
      const x_51 = 20;
      return () => x_51;
    }

    function func_51b() {
      const x_51 = 20;
      function function51b() {
        return global.x_51; 
      }
      return function51b;
    }

    const a_51 = func_51a();
    console.log(a_51()); // 20
    const b_51 = func_51b();
    console.log(b_51()); // 10     
    
    // ------ 4
    global.x_52 = 10;

    function func_52a() {
      const x_52 = 20;
      return () => global.x_52;
    }

    function func_52b() {
      const x_52 = 20;
      function function52b() {
        return globalThis.x_52; // globalThis & global both reference to the same global object
      }
      return function52b;
    }

    const a_52 = func_52a();
    console.log(a_52()); // 10
    const b_52 = func_52b();
    console.log(b_52()); // 10         

}




