export const functions = () => {

  // +++++++++++++++ function declaration

    // ------ 1
    function funcDec_1(par1, par2, par3) {
      return par1 * 5 + par2 * 3 + par3 * 8;
    }
    console.log(funcDec_1); // [Function: funcDec_1]
    console.log(funcDec_1(2, 5, 14)); // 137
    console.log(funcDec_1); // [Function: funcDec_1]

    // ------ 2    
    function funcDec_2(width, height) {
      return width * height;
    }
    console.log(funcDec_2(4, 8)); // 32

  // +++++++++++++++ function expression

    // ------ 1 named
    const funcExp_1 = function functionExp1(width, height) {
      return width * height;
    }
    console.log(funcExp_1(4, 8)); // 32

    // ------ 2 anonymous
    const funcExp_2 = function (width, height) {
      return width * height;
    }
    console.log(funcExp_2(4, 8)); // 32

  // +++++++++++++++ arrow function

    // ------ 1    
    const funcArrow_1 = (width, height) => width * height;
    console.log(funcArrow_1(4, 8)); // 32

    // ------ 2    
    const funcArrow_2 = (width, height) => {
      return width * height;
    }
    console.log(funcArrow_2(4, 8)); // 32

    // ------ 3 multiple statements
    const funcArrow_3 = (name) => {
      const funcArrow_greeting3 = `Hello, ${name}!`;
      return funcArrow_greeting3;
    };
    console.log(funcArrow_3("Jack")); // Hello, Jack!

  // +++++++++++++++ arguments

    /*
      function funcArgs_1(separator) {
        let result = "";
        for (let i = 1; i < argument.length; i++) { // ReferenceError: argument is not defined
          result += argument[i] + separator;
        }
        return result;
      }
      console.log(funcArgs_1(", ", "red", "orange", "blue"));
    */

    function funcArgs_2(separator) {
      let result = "";
      for (let i = 1; i < arguments.length; i++) {
        result += arguments[i];
        if (i < arguments.length - 1) {
          result += separator;
        }
      }
      return result;
    }
    console.log(funcArgs_2(", ", "red", "orange", "blue")); // red, orange, blue
  
  // +++++++++++++++ function inside

    // ------ 1 another function
    function funcInside_1(funcInside_a1, funcInside_b1) {
      function funcInside_a1() { }
      console.log(typeof funcInside_a1); // function
      console.log(typeof funcInside_b1); // number
    }
    funcInside_1(2, 9); 

    // ------ 2 another function
    function funcInside_2(firstName) {
      function funcInside_inside2(lastName) { 
        return `Hello, ${firstName} ${lastName}`
      }
      return funcInside_inside2
    }
    const a_funcInside = funcInside_2("John");
    console.log(a_funcInside("Smith"));    // Hello, John Smith (way 1)
    console.log(funcInside_2("John")("Smith")) // Hello, John Smith (way 2)

    // ------ 3 another function expression
    const funcInside_3 = function(funcInside_a3) {
      // const funcInside_a3 = function() { } // SyntaxError: Identifier 'funcInside_a3' has already been declared
      console.log(typeof funcInside_a3); // number
    }
    funcInside_3(2);    
    
    // ------ 4 another arrow function 
    const funcInside_4 = (funcInside_a4) => {
      // const funcInside_a4 = () => { } // SyntaxError: Identifier 'funcInside_a4' has already been declared
      console.log(typeof funcInside_a4); // number
    }
    funcInside_4(2);    

    // ------ 5 object
    const funcInside_obj5 = {
      funcInside_5: function funcInside_5(n) {
        console.log(n);
        if (n <= 1) {
          return 1;
        }
        return n * funcInside_5(n - 1);
      },
    };
    funcInside_obj5.funcInside_5(5);  // 5 4 3 2 1

    // ------ 6 object
    const funcInside_obj6 = {
      funcInside_6: function functionInside6(n) {
        console.log(n);
        if (n <= 1) {
          return 1;
        }
        return n * functionInside6(n - 1);
      },
    };
    funcInside_obj6.funcInside_6(5); // 5 4 3 2 1    

    // ------ 7 object
    const funcInside_obj7 = {
      funcInside_7: function functionInside7(n) {
        console.log(n);
        if (n <= 1) {
          return 1;
        }
        return n * functionInside7(n - 1);
      },
    };
    // funcInside_obj6.functionInside6(5); // TypeError: funcInside_obj6.functionInside6 is not a function    

  // +++++++++++++++ the same name function & variable inside

    // 1 - function declaration    

      // ------ 1 
      function sameFD_1() {
        var sameFD_a1 = "text"
        sameFD_1 = 10;
        return [sameFD_a1, sameFD_1];
      }
      console.log(sameFD_1); // [Function: sameFD_1]
      console.log(sameFD_1()); // [ 'text', 10 ]

      // ------ 2
      function sameFD_2() {
        var sameFD_a2 = "text"
        sameFD_2 = 10;
      }
      console.log(sameFD_2); // [Function: sameFD_2]
      console.log(sameFD_2()); // undefined      

      // ------ 3
      function sameFD_3() {
        // sameFD_a3 = 10; // ReferenceError: sameFD_a3 is not defined
      }
      sameFD_3();
      // console.log(sameFD_a3); // ReferenceError: sameFD_a3 is not defined

    // 2 - function expressions   

      // var

        // ------ 1   
        var sameFEV_1 = function () {
          sameFEV_1 = 25;
        };
        sameFEV_1(); 
        console.log(sameFEV_1); // 25

        // ------ 2   
        var sameFEV_2 = function () {
          sameFEV_2 = 25;
          return sameFEV_2;
        };
        sameFEV_2();
        console.log(sameFEV_2); // 25         

        // ------ 3  
        var sameFEV_3 = function () {
          // sameFEV_a3 = 25; // ReferenceError: sameFEV_a3 is not defined
        };
        sameFEV_3();
        // console.log(sameFEV_a3); // ReferenceError: sameFEV_a3 is not defined 

        // ------ 4  
        var sameFEV_4 = function sameFunctionExpVar4() {
          // sameFunctionExpVar4 = 25; // TypeError: Assignment to constant variable.
        };
        sameFEV_4();
        // console.log(sameFunctionExpVar4); // ReferenceError: sameFunctionExpVar4 is not defined   
        
        // ------ 5
        var sameFEV_5 = function sameFEV_5() {
          let sameFEV_a5 = "text"
          // sameFEV_5 = 25; // TypeError: Assignment to constant variable.
          return [sameFEV_a5, sameFEV_5]
        };
        console.log(sameFEV_5()); // [ 'text', [Function: sameFEV_5] ]
        console.log(sameFEV_5); // [Function: sameFEV_5]

      // let 

        // ------ 1   
        let sameFEL_1 = function () {
          sameFEL_1 = 30;
        };
        sameFEL_1();
        console.log(sameFEL_1); // 30

        // ------ 2   
        let sameFEL_2 = function () {
          // sameFEL_a2 = 30; // ReferenceError: sameFEL_a2 is not defined
        };
        sameFEL_2();
        // console.log(sameFEL_a2); // ReferenceError: sameFEL_a2 is not defined  

        // ------ 3   
        let sameFEL_3 = function sameFunctionExpLet3() {
          // sameFunctionExpLet3 = 30; // TypeError: Assignment to constant variable.
        };
        sameFEL_3();
        // console.log(sameFunctionExpLet3); // ReferenceError: sameFunctionExpLet3 is not defined
        
        // ------ 4
        let sameFEL_4 = function sameFEL_4() {
          let sameFEL_a4 = [5, "aaa"]
          // sameFEL_4 = 30; // TypeError: Assignment to constant variable.
          return [sameFEL_a4, sameFEL_4]
        };
        console.log(sameFEL_4()); // [ [ 5, 'aaa' ], [Function: sameFEL_4] ]
        console.log(sameFEL_4); // [Function: sameFEL_4]

      // const 

        // ------ 1  
        const sameFEC_1 = function () {
          let sameFEC_a1 = "text"
          // sameFEC_1 = 44; // TypeError: Assignment to constant variable.
          return [sameFEC_a1, sameFEC_1]
        };
        console.log(sameFEC_1()); // [ 'text', [Function: sameFEC_1] ]
        console.log(sameFEC_1); // [Function: sameFEC_1]

        // ------ 2
        const sameFEC_2 = function () {
          // sameFEC_a2 = 44; // ReferenceError: sameFEC_a2 is not defined
        };
        sameFEC_2();
        // console.log(sameFEC_a2); // ReferenceError: sameFEC_a2 is not defined  

        // ------ 3   
        const sameFEC_3 = function sameFunctionExpConst3() {
          // sameFunctionExpConst3 = 44; // TypeError: Assignment to constant variable.
        };
        sameFEC_3();
        // console.log(sameFunctionExpConst3); // ReferenceError: sameFunctionExpConst3 is not defined     
        
        // ------ 4
        const sameFEC_4 = function sameFEC_4() {
          const sameFEC_a4 = [true, 5]
          // sameFEC_4 = 44; // TypeError: Assignment to constant variable.
          return [sameFEC_a4, sameFEC_4]
        };
        console.log(sameFEC_4()); // [ [ true, 5 ], [Function: sameFEC_4] ]
        console.log(sameFEC_4); // [Function: sameFEC_4]
        
    // 3 - arrow function

      // var

        // ------ 1
        var sameAFV_1 = () => {
          sameAFV_1 = "something";
        };
        console.log(sameAFV_1); // [Function: sameAFV_1]
        sameAFV_1();
        console.log(sameAFV_1); // something

        // ------ 2
        var sameAFV_2 = () => {
          sameAFV_2 = "something";
          return sameAFV_2;
        };
        console.log(sameAFV_2); // [Function: sameAFV_2]
        sameAFV_2();
        console.log(sameAFV_2); // something        

        // ------ 3
        var sameAFV_3 = () => {
          // sameAFV_a3 = "something"; // ReferenceError: sameAFV_a3 is not defined
        };
        sameAFV_3();
        // console.log(sameAFV_a3); // ReferenceError: sameAFV_a3 is not defined   

      // let 

        // ------ 1
        let sameAFL_1 = () => {
          sameAFL_1 = true;
        };
        sameAFL_1();
        console.log(sameAFL_1); // true

        // ------ 2
        let sameAFL_2 = () => {
        // sameAFL_a2 = true; // ReferenceError: sameAFL_a2 is not defined
        };
        sameAFL_2();
        // console.log(sameAFL_a2); // ReferenceError: sameAFL_a2 is not defined    

      // const 

        // ------ 1
        const sameAFC_1 = () => {
          var sameAFC_a1 = "text";
          // sameAFC_1 = [3, 8]; // TypeError: Assignment to constant variable.
          return [sameAFC_a1, sameAFC_1]
        };
        console.log(sameAFC_1); // [Function: sameAFC_1]
        console.log(sameAFC_1()); // [ 'text', [Function: sameAFC_1] ]

        // ------ 2
        const sameAFC_2 = () => {
          // sameAFC_a2 = [3, 8]; // ReferenceError: sameAFC_a2 is not defined
        };
        sameAFC_2();
        // console.log(sameAFC_a2); // ReferenceError: sameAFC_a2 is not defined          

  // +++++++++++++++ conflicts YES/NO 

    // 1 - two same named functions declarations

      // ------ 1 with the different params
      function conflictFD_1(a) { }
      function conflictFD_1(a, b, c) { }
      console.log(conflictFD_1.length); // 3
      //let conflictFD_1 = 5; // SyntaxError: Identifier 'conflictFD_1' has already been declared

      // ------ 2 with the same params
      function conflictFD_2(a) { }
      function conflictFD_2(a) { }
      console.log(conflictFD_2.length); // 1
      //let conflictFD_2 = 5; // SyntaxError: Identifier 'conflictFD_2' has already been declared

    // 2 - function declarations inside block 

      // ------ 1
      {
        function conflictFDB_1() { }
        //function conflictFDB_1() {} // SyntaxError: Identifier 'conflictFDB_1' has already been declared
      }

      // ------ 2
      try {
        function conflictFDB_2() { }
        //function conflictFDB_2() {} // SyntaxError: Identifier 'conflictFDB_2' has already been declared
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
      let conflictFDS_1 = function () {
        console.log("func - outer scope")
      }

      {
        let conflictFDS_1 = function () {
          console.log("func - inner scope")
        }
        conflictFDS_1() // func - inner scope
      }

      // ------ 2 Function declaration + new block function expression
      function conflictFDS_2() {
        console.log("func - outer scope")
      }

      {
        let conflictFDS_2 = function () {
          console.log("func - inner scope") 
        }
        conflictFDS_2() // func - inner scope
      }

      // ------ 3 Function declaration + new block function declaration
      function conflictFDS_3() {
        console.log("func - outer scope")
      }

      {
        function conflictFDS_3() {
          console.log("func - inner scope")
        }
        conflictFDS_3() // func - inner scope
      }

      // ------ 4 Function expression + new block function declaration
      let conflictFDS_4 = function () {
        console.log("func - outer scope")
      }

      {
        function conflictFDS_4() {
          console.log("func - inner scope")
        }
        conflictFDS_4() // func - inner scope
      }      

    // 4 - the same name (non-function & function)

      // ------ 1 'var' & 'function declaration'
      var conflictSN_1 = 1;
      function conflictSN_1() { return 5 }
      console.log(conflictSN_1); // 1
      // console.log(conflictSN_1()); // TypeError: conflictSN_1 is not a function

      // ------ 2
      function conflictSN_2() { return 5 }
      var conflictSN_2 = 1;
      console.log(conflictSN_2); // 1
      // console.log(conflictSN_2()); // TypeError: conflictSN_2 is not a function

      // ------ 3 'let' & 'function declaration'
      let conflictSN_3 = 1;
      // function conflictSN_3() { return 5 } // SyntaxError: Identifier 'conflictSN_3' has already been declared
      console.log(conflictSN_3); // 1

      // ------ 4 'const' & 'function declaration'  
      const conflictSN_4 = 1;
      // function conflictSN_4() { return 5 } // SyntaxError: Identifier 'conflictSN_4' has already been declared
      console.log(conflictSN_4); // 1

    // 5 - invoke block function outside the scope

      // ------ 1
      {
        function conflictOS_1() {
          console.log('func')
        }
      }
      // conflictOS_1() // ReferenceError: conflictOS_1 is not defined

      // ------ 2
      function conflictOS_2() {
        console.log('func')
      }
      {
        conflictOS_2() // func
      }

    // 6 - IIFE

      // ------ 1 forbidden
      // function conflictIIFE_1() {
      //   conflictIIFE_1 = 1;
      // }(); // SyntaxError: Unexpected token ')'
      
      // ------ 2
      function conflictIIFE_2() {
        conflictIIFE_2 = 1;
      }
      conflictIIFE_2();
      console.log(conflictIIFE_2); // 1

      (function conflictIIFE_2() {
        // conflictIIFE_2 = 3; // TypeError: Assignment to constant variable.
      })();

      // ------ 3
      (function conflictIIFE_3() {
        // conflictIIFE_3 = 3; // TypeError: Assignment to constant variable.
      })();

      // ------ 4
      (function () {
        console.log("Helloooo!"); // Helloooo!
      })();

      // ------ 5
      !function () {
        console.log("Helloooo2!"); // Helloooo2!
      }();

    // 7 - argument's with the same name

      function conflictARG_1a() {
        const x = 5;
        function conflictARG_1b(x) {
          return x * 2;
        }
        return conflictARG_1b;
      }
      console.log(conflictARG_1a()(10)); // 20 

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

  // +++++++++++++++ local VS global variable access

    // ------ 1
    var locGlob_x1 = 10;

    function locGlob_1a() {
      const locGlob_x1 = 20;
      //return new Function("return locGlob_x1;"); // ReferenceError: locGlob_x1 is not defined
      return () => "locGlob_x1 is not defined";
    }

    function locGlob_1b() {
      const locGlob_x1 = 20;
      function localGlobalFunction1b() {
        return locGlob_x1; 
      }
      return localGlobalFunction1b;
    }

    const a_locGlob1 = locGlob_1a();
    console.log(a_locGlob1()); // locGlob_x1 is not defined
    const b_locGlob1 = locGlob_1b();
    console.log(b_locGlob1()); // 20

    // ------ 2
    var locGlob_x2 = 10;

    function locGlob_2a() {
      const locGlob_x2 = 20;
      return () => locGlob_x2;
    }

    function locGlob_2b() {
      const locGlob_x2 = 20;
      function localGlobalFunction2b() {
        return locGlob_x2; 
      }
      return localGlobalFunction2b;
    }

    const a_locGlob2 = locGlob_2a();
    console.log(a_locGlob2()); // 20
    const b_locGlob2 = locGlob_2b();
    console.log(b_locGlob2()); // 20    

    // ------ 3
    globalThis.locGlob_x3 = 10;

    function locGlob_3a() {
      const locGlob_x3 = 20;
      return () => locGlob_x3;
    }

    function locGlob_3b() {
      const locGlob_x3 = 20;
      function localGlobalFunction3b() {
        return global.locGlob_x3; 
      }
      return localGlobalFunction3b;
    }

    const a_locGlob3 = locGlob_3a();
    console.log(a_locGlob3()); // 20
    const b_locGlob3 = locGlob_3b();
    console.log(b_locGlob3()); // 10     
    
    // ------ 4
    global.locGlob_x4 = 10;

    function locGlob_4a() {
      const locGlob_x4 = 20;
      return () => global.locGlob_x4;
    }

    function locGlob_4b() {
      const locGlob_x4 = 20;
      function localGlobalFunction4b() {
        return globalThis.locGlob_x4; // globalThis & global both reference to the same global object
      }
      return localGlobalFunction4b;
    }

    const a_locGlob4 = locGlob_4a();
    console.log(a_locGlob4()); // 10
    const b_locGlob4 = locGlob_4b();
    console.log(b_locGlob4()); // 10         

}




