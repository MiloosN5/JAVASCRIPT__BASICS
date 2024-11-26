export const typeConversion = () => {

    // +++++++++++++++ coercion

        // addition (+) - forcing conversion to the string

            // [string + number] & [number + string]

                const add_strnum_1 = "Number " + 10
                const add_strnum_2 = 10 + " Number"
                const add_strnum_3 = "5" + 3
                const add_strnum_4 = 3 + "5"
                console.log(add_strnum_1, typeof (add_strnum_1)); // Number 10 string (number is coerced to string "10", and concatenated with the given string)
                console.log(add_strnum_2, typeof (add_strnum_2)); // 10 Number string
                console.log(add_strnum_3, typeof (add_strnum_3)); // 53 string
                console.log(add_strnum_4, typeof (add_strnum_4)); // 35 string  

            // [string + boolean] & [boolean + string] 

                const add_strbool_1 = "5" + true
                const add_strbool_2 =  true + "5"
                const add_strbool_3 = "5" + false
                const add_strbool_4 =  false + "5"
                const add_strbool_5 = "text" + true
                const add_strbool_6 = true + "text"
                const add_strbool_7 = "text" + false
                const add_strbool_8 = false + "text"
                console.log(add_strbool_1, typeof (add_strbool_1)) // 5true string (boolean is coerced to string "true", and concatenated with the given string)
                console.log(add_strbool_2, typeof (add_strbool_2)) // true5 string
                console.log(add_strbool_3, typeof (add_strbool_3)) // 5false string
                console.log(add_strbool_4, typeof (add_strbool_4)) // false5 string
                console.log(add_strbool_5, typeof (add_strbool_5)) // texttrue string 
                console.log(add_strbool_6, typeof (add_strbool_6)) // truetext string
                console.log(add_strbool_7, typeof (add_strbool_7)) // textfalse string
                console.log(add_strbool_8, typeof (add_strbool_8)) // falsetext string

            // [string + NaN] & [NaN + string] 

                const add_strnan_1 = "5" + NaN
                const add_strnan_2 =  NaN + "5"
                const add_strnan_3 = "text" + NaN
                const add_strnan_4 =  NaN + "text"
                console.log(add_strnan_1, typeof (add_strnan_1)) // 5NaN string
                console.log(add_strnan_2, typeof (add_strnan_2)) // NaN5 string
                console.log(add_strnan_3, typeof (add_strnan_3)) // textNaN string
                console.log(add_strnan_4, typeof (add_strnan_4)) // NaNtext string  
           
            // [string + undefined] & [undefined + string] 

                const add_strund_1 = "5" + undefined
                const add_strund_2 =  undefined + "5"
                const add_strund_3 = "text" + undefined
                const add_strund_4 =  undefined + "text"
                console.log(add_strund_1, typeof (add_strund_1)) // 5undefined string
                console.log(add_strund_2, typeof (add_strund_2)) // undefined5 string
                console.log(add_strund_3, typeof (add_strund_3)) // textundefined string
                console.log(add_strund_4, typeof (add_strund_4)) // undefinedtext string
           
            // [string + null] & [null + string] 

                const add_strnul_1 = "5" + null
                const add_strnul_2 =  null + "5"
                const add_strnul_3 = "text" + null
                const add_strnul_4 =  null + "text"
                console.log(add_strnul_1, typeof (add_strnul_1)) // 5null string
                console.log(add_strnul_2, typeof (add_strnul_2)) // null5 string
                console.log(add_strnul_3, typeof (add_strnul_3)) // textnull string
                console.log(add_strnul_4, typeof (add_strnul_4)) // nulltext string     
          
            // [number + boolean] & [boolean + number] 
            
                const add_numbool_1 = 40 + true
                const add_numbool_2 = true + 40
                const add_numbool_3 = 40 + false
                const add_numbool_4 = false + 40
                console.log(add_numbool_1, typeof (add_numbool_1)) // 41 number
                console.log(add_numbool_2, typeof (add_numbool_2)) // 41 number
                console.log(add_numbool_3, typeof (add_numbool_3)) // 40 number
                console.log(add_numbool_4, typeof (add_numbool_4)) // 40 number

            // [number + NaN] & [NaN + number] 
            
                const add_numnan_1 = 40 + NaN
                const add_numnan_2 = NaN + 40
                console.log(add_numnan_1, typeof (add_numnan_1)) // NaN number
                console.log(add_numnan_2, typeof (add_numnan_2)) // NaN number 
            
            // [number + undefined] & [undefined + number] 
            
                const add_numund_1 = 40 + undefined
                const add_numund_2 = undefined + 40
                console.log(add_numund_1, typeof (add_numund_1)) // NaN number
                console.log(add_numund_2, typeof (add_numund_2)) // NaN number    
            
            // [number + null] & [null + number] 
            
                const add_numnul_1 = 40 + null
                const add_numnul_2 = null + 40
                console.log(add_numnul_1, typeof (add_numnul_1)) // 40 number
                console.log(add_numnul_2, typeof (add_numnul_2)) // 40 number
            
            // [number + bigInt] & [bigInt + number] 
            
                // const add_numbig_1 = 40 + 50n // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // const add_numbig_2 = 50n + 40 // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // console.log(add_numbig_1, typeof (add_numbig_1))
                // console.log(add_numbig_2, typeof (add_numbig_2))    
            
            // [boolean + NaN] & [NaN + boolean] 
  
                const add_boolnan_1 = true + NaN
                const add_boolnan_2 = NaN + true
                const add_boolnan_3 = false + NaN
                const add_boolnan_4 = NaN + false
                console.log(add_boolnan_1, typeof (add_boolnan_1)) // NaN number
                console.log(add_boolnan_2, typeof (add_boolnan_2)) // NaN number     
                console.log(add_boolnan_3, typeof (add_boolnan_3)) // NaN number
                console.log(add_boolnan_4, typeof (add_boolnan_4)) // NaN number 
            
            // [boolean + undefined] & [NaN + undefined] 
            
                const add_boolund_1 = true + undefined
                const add_boolund_2 = undefined + true
                const add_boolund_3 = false + undefined
                const add_boolund_4 = undefined + false
                console.log(add_boolund_1, typeof (add_boolund_1)) // NaN number 
                console.log(add_boolund_2, typeof (add_boolund_2)) // NaN number  
                console.log(add_boolund_3, typeof (add_boolund_3)) // NaN number 
                console.log(add_boolund_4, typeof (add_boolund_4)) // NaN number  
            
            // [boolean + null] & [null + undefined] 
            
                const add_boolnul_1 = true + null
                const add_boolnul_2 = null + true
                const add_boolnul_3 = false + null
                const add_boolnul_4 = null + false
                console.log(add_boolnul_1, typeof (add_boolnul_1)) // 1 number
                console.log(add_boolnul_2, typeof (add_boolnul_2)) // 1 number
                console.log(add_boolnul_3, typeof (add_boolnul_3)) // 0 number
                console.log(add_boolnul_4, typeof (add_boolnul_4)) // 0 number    
            
            // [undefined + NaN] & [NaN + undefined] 
            
                const add_undnan_1 = undefined + NaN
                const add_undnan_2 = NaN + undefined
                console.log(add_undnan_1, typeof (add_undnan_1)) // NaN number  
                console.log(add_undnan_2, typeof (add_undnan_2)) // NaN number      
            
            // [undefined + null] & [null + undefined] 
            
                const add_undnul_1 = undefined + null
                const add_undnul_2 = null + undefined
                console.log(add_undnul_1, typeof (add_undnul_1)) // NaN number  
                console.log(add_undnul_2, typeof (add_undnul_2)) // NaN number       
            
            // [NaN + null] & [null + NaN] 
            
                const add_nannul_1 = NaN + null
                const add_nannul_2 = null + NaN
                console.log(add_nannul_1, typeof (add_nannul_1)) // NaN number  
                console.log(add_nannul_2, typeof (add_nannul_2)) // NaN number             

        // substraction (-) - forcing conversion to the number

            // [string - number] & [number - string]

                const sub_strnum_1 = "Number " - 10
                const sub_strnum_2 = 10 - " Number"
                const sub_strnum_3 = "5" - 3
                const sub_strnum_4 = 3 - "5"
                console.log(sub_strnum_1, typeof (sub_strnum_1)); // NaN number  
                console.log(sub_strnum_2, typeof (sub_strnum_2)); // NaN number  
                console.log(sub_strnum_3, typeof (sub_strnum_3)); // 2 number
                console.log(sub_strnum_4, typeof (sub_strnum_4)); // -2 number 

            // [string - boolean] & [boolean - string] 

            console.log('-----------')
                const sub_strbool_1 = "5" - true
                const sub_strbool_2 =  true - "5"
                const sub_strbool_3 = "5" - false
                const sub_strbool_4 =  false - "5"
                const sub_strbool_5 = "text" - true
                const sub_strbool_6 = true - "text"
                const sub_strbool_7 = "text" - false
                const sub_strbool_8 = false - "text"
                console.log(sub_strbool_1, typeof (sub_strbool_1)) // 4 number
                console.log(sub_strbool_2, typeof (sub_strbool_2)) // -4 number
                console.log(sub_strbool_3, typeof (sub_strbool_3)) // 5 number
                console.log(sub_strbool_4, typeof (sub_strbool_4)) // -5 number
                console.log(sub_strbool_5, typeof (sub_strbool_5)) // NaN number 
                console.log(sub_strbool_6, typeof (sub_strbool_6)) // NaN number 
                console.log(sub_strbool_7, typeof (sub_strbool_7)) // NaN number 
                console.log(sub_strbool_8, typeof (sub_strbool_8)) // NaN number 

            // [string - NaN] & [NaN - string] 
            console.log('-----------')
            
                const sub_strnan_1 = "5" - NaN
                const sub_strnan_2 =  NaN - "5"
                const sub_strnan_3 = "text" - NaN
                const sub_strnan_4 =  NaN - "text"
                console.log(sub_strnan_1, typeof (sub_strnan_1)) // NaN number
                console.log(sub_strnan_2, typeof (sub_strnan_2)) // NaN number
                console.log(sub_strnan_3, typeof (sub_strnan_3)) // NaN number
                console.log(sub_strnan_4, typeof (sub_strnan_4)) // NaN number   
            
            // [string - undefined] & [undefined - string] 

                const sub_strund_1 = "5" - undefined
                const sub_strund_2 =  undefined - "5"
                const sub_strund_3 = "text" - undefined
                const sub_strund_4 =  undefined - "text"
                console.log(sub_strund_1, typeof (sub_strund_1)) // NaN number
                console.log(sub_strund_2, typeof (sub_strund_2)) // NaN number
                console.log(sub_strund_3, typeof (sub_strund_3)) // NaN number
                console.log(sub_strund_4, typeof (sub_strund_4)) // NaN number

            // [string - null] & [null - string] 

                const sub_strnul_1 = "5" - null
                const sub_strnul_2 =  null - "5"
                const sub_strnul_3 = "text" - null
                const sub_strnul_4 =  null - "text"
                console.log(sub_strnul_1, typeof (sub_strnul_1)) // 5 number
                console.log(sub_strnul_2, typeof (sub_strnul_2)) // -5 number
                console.log(sub_strnul_3, typeof (sub_strnul_3)) // NaN number
                console.log(sub_strnul_4, typeof (sub_strnul_4)) // NaN number      

            // [number - boolean] & [boolean - number] 
            
                const sub_numbool_1 = 40 - true
                const sub_numbool_2 = true - 40
                const sub_numbool_3 = 40 - false
                const sub_numbool_4 = false - 40
                console.log(sub_numbool_1, typeof (sub_numbool_1)) // 39 number
                console.log(sub_numbool_2, typeof (sub_numbool_2)) // -39 number
                console.log(sub_numbool_3, typeof (sub_numbool_3)) // 40 number
                console.log(sub_numbool_4, typeof (sub_numbool_4)) // -40 number

            // [number - NaN] & [NaN - number] 
            
                const sub_numnan_1 = 40 - NaN
                const sub_numnan_2 = NaN - 40
                console.log(sub_numnan_1, typeof (sub_numnan_1)) // NaN number  
                console.log(sub_numnan_2, typeof (sub_numnan_2)) // NaN number    
            
            // [number - undefined] & [undefined - number] 
            
                const sub_numund_1 = 40 - undefined
                const sub_numund_2 = undefined - 40
                console.log(sub_numund_1, typeof (sub_numund_1)) // NaN number  
                console.log(sub_numund_2, typeof (sub_numund_2)) // NaN number     
            
            // [number - null] & [null - number] 
            
                const sub_numnul_1 = 40 - null
                const sub_numnul_2 = null - 40
                console.log(sub_numnul_1, typeof (sub_numnul_1)) // 40 number
                console.log(sub_numnul_2, typeof (sub_numnul_2)) // -40 number   
            
            // [number - bigInt] & [bigInt - number] 
            
                // const sub_numbig_1 = 40 - 50n // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // const sub_numbig_2 = 50n - 40 // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // console.log(sub_numbig_1, typeof (sub_numbig_1))
                // console.log(sub_numbig_2, typeof (sub_numbig_2))    
            
            // [boolean - NaN] & [NaN - boolean] 

                const sub_boolnan_1 = true - NaN
                const sub_boolnan_2 = NaN - true
                const sub_boolnan_3 = false - NaN
                const sub_boolnan_4 = NaN - false
                console.log(sub_boolnan_1, typeof (sub_boolnan_1)) // NaN number 
                console.log(sub_boolnan_2, typeof (sub_boolnan_2)) // NaN number      
                console.log(sub_boolnan_3, typeof (sub_boolnan_3)) // NaN number 
                console.log(sub_boolnan_4, typeof (sub_boolnan_4)) // NaN number  
            
            // [boolean - undefined] & [NaN - undefined] 
            
                const sub_boolund_1 = true - undefined
                const sub_boolund_2 = undefined - true
                const sub_boolund_3 = false - undefined
                const sub_boolund_4 = undefined - false
                console.log(sub_boolund_1, typeof (sub_boolund_1)) // NaN number 
                console.log(sub_boolund_2, typeof (sub_boolund_2)) // NaN number 
                console.log(sub_boolund_3, typeof (sub_boolund_3)) // NaN number 
                console.log(sub_boolund_4, typeof (sub_boolund_4)) // NaN number  

            // [boolean - null] & [null - undefined] 
            
                const sub_boolnul_1 = true - null
                const sub_boolnul_2 = null - true
                const sub_boolnul_3 = false - null
                const sub_boolnul_4 = null - false
                console.log(sub_boolnul_1, typeof (sub_boolnul_1)) // 1 number
                console.log(sub_boolnul_2, typeof (sub_boolnul_2)) // -1 number
                console.log(sub_boolnul_3, typeof (sub_boolnul_3)) // 0 number
                console.log(sub_boolnul_4, typeof (sub_boolnul_4)) // 0 number  

            // [undefined - NaN] & [NaN - undefined] 
            
                const sub_undnan_1 = undefined - NaN
                const sub_undnan_2 = NaN - undefined
                console.log(sub_undnan_1, typeof (sub_undnan_1)) // NaN number 
                console.log(sub_undnan_2, typeof (sub_undnan_2)) // NaN number     
            
            // [undefined - null] & [null - undefined] 
            
                const sub_undnul_1 = undefined - null
                const sub_undnul_2 = null - undefined
                console.log(sub_undnul_1, typeof (sub_undnul_1)) // NaN number 
                console.log(sub_undnul_2, typeof (sub_undnul_2)) // NaN number      
            
            // [NaN - null] & [null - NaN] 
            
                const sub_nannul_1 = NaN - null
                const sub_nannul_2 = null - NaN
                console.log(sub_nannul_1, typeof (sub_nannul_1)) // NaN number 
                console.log(sub_nannul_2, typeof (sub_nannul_2)) // NaN number 

        // multiplication (*) - forcing conversion to the number

            // [string * number] & [number * string]

                const mul_strnum_1 = "Number " * 10
                const mul_strnum_2 = 10 * " Number"
                const mul_strnum_3 = "5" * 3
                const mul_strnum_4 = 3 * "5"
                console.log(mul_strnum_1, typeof (mul_strnum_1)) // NaN number
                console.log(mul_strnum_2, typeof (mul_strnum_2)) // NaN number
                console.log(mul_strnum_3, typeof (mul_strnum_3)); // 15 number
                console.log(mul_strnum_4, typeof (mul_strnum_4)) // 15 number

            // [string * boolean] & [boolean * string] 

                const mul_strbool_1 = "5" * true
                const mul_strbool_2 =  true * "5"
                const mul_strbool_3 = "5" * false
                const mul_strbool_4 =  false * "5"
                const mul_strbool_5 = "text" * true
                const mul_strbool_6 = true * "text"
                const mul_strbool_7 = "text" * false
                const mul_strbool_8 = false * "text"
                console.log(mul_strbool_1, typeof (mul_strbool_1)) // 5 number
                console.log(mul_strbool_2, typeof (mul_strbool_2)) // 5 number
                console.log(mul_strbool_3, typeof (mul_strbool_3)) // 0 number
                console.log(mul_strbool_4, typeof (mul_strbool_4)) // 0 number
                console.log(mul_strbool_5, typeof (mul_strbool_5)) // NaN number
                console.log(mul_strbool_6, typeof (mul_strbool_6)) // NaN number
                console.log(mul_strbool_7, typeof (mul_strbool_7)) // NaN number
                console.log(mul_strbool_8, typeof (mul_strbool_8)) // NaN number

            // [string * NaN] & [NaN * string] 

                const mul_strnan_1 = "5" * NaN
                const mul_strnan_2 =  NaN * "5"
                const mul_strnan_3 = "text" * NaN
                const mul_strnan_4 =  NaN * "text" 
                console.log(mul_strnan_1, typeof (mul_strnan_1)) // NaN number
                console.log(mul_strnan_2, typeof (mul_strnan_2)) // NaN number
                console.log(mul_strnan_3, typeof (mul_strnan_3)) // NaN number
                console.log(mul_strnan_4, typeof (mul_strnan_4)) // NaN number  

            // [string * undefined] & [undefined * string] 

                const mul_strund_1 = "5" * undefined
                const mul_strund_2 =  undefined * "5"
                const mul_strund_3 = "text" * undefined
                const mul_strund_4 =  undefined * "text"
                console.log(mul_strund_1, typeof (mul_strund_1)) // NaN number  
                console.log(mul_strund_2, typeof (mul_strund_2)) // NaN number  
                console.log(mul_strund_3, typeof (mul_strund_3)) // NaN number  
                console.log(mul_strund_4, typeof (mul_strund_4)) // NaN number  
            
            // [string * null] & [null * string] 

                const mul_strnul_1 = "5" * null
                const mul_strnul_2 =  null * "5"
                const mul_strnul_3 = "text" * null
                const mul_strnul_4 =  null * "text"
                console.log(mul_strnul_1, typeof (mul_strnul_1)) // 0 number
                console.log(mul_strnul_2, typeof (mul_strnul_2)) // 0 number
                console.log(mul_strnul_3, typeof (mul_strnul_3)) // NaN number 
                console.log(mul_strnul_4, typeof (mul_strnul_4)) // NaN number       
            
            // [number * boolean] & [boolean * number] 
            
                const mul_numbool_1 = 40 * true
                const mul_numbool_2 = true * 40
                const mul_numbool_3 = 40 * false
                const mul_numbool_4 = false * 40
                console.log(mul_numbool_1, typeof (mul_numbool_1)) // 40 number
                console.log(mul_numbool_2, typeof (mul_numbool_2)) // 40 number
                console.log(mul_numbool_3, typeof (mul_numbool_3)) // 0 number
                console.log(mul_numbool_4, typeof (mul_numbool_4)) // 0 number

            // [number * NaN] & [NaN * number] 

                const mul_numnan_1 = 40 * NaN
                const mul_numnan_2 = NaN * 40
                console.log(mul_numnan_1, typeof (mul_numnan_1)) // NaN number 
                console.log(mul_numnan_2, typeof (mul_numnan_2)) // NaN number  
            
            // [number * undefined] & [undefined * number] 
            
                const mul_numund_1 = 40 * undefined
                const mul_numund_2 = undefined * 40
                console.log(mul_numund_1, typeof (mul_numund_1)) // NaN number 
                console.log(mul_numund_2, typeof (mul_numund_2)) // NaN number    
            
            // [number * null] & [null * number] 
            
                const mul_numnul_1 = 40 * null
                const mul_numnul_2 = null * 40
                console.log(mul_numnul_1, typeof (mul_numnul_1)) // 0 number
                console.log(mul_numnul_2, typeof (mul_numnul_2)) // 0 number   

            // [number * bigInt] & [bigInt * number] 
            
                // const mul_numbig_1 = 40 * 50n // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // const mul_numbig_2 = 50n * 40 // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // console.log(mul_numbig_1, typeof (mul_numbig_1))
                // console.log(mul_numbig_2, typeof (mul_numbig_2))    
            
            // [boolean * NaN] & [NaN * boolean] 
            
                const mul_boolnan_1 = true * NaN
                const mul_boolnan_2 = NaN * true
                const mul_boolnan_3 = false * NaN
                const mul_boolnan_4 = NaN * false
                console.log(mul_boolnan_1, typeof (mul_boolnan_1)) // NaN number 
                console.log(mul_boolnan_2, typeof (mul_boolnan_2)) // NaN number     
                console.log(mul_boolnan_3, typeof (mul_boolnan_3)) // NaN number 
                console.log(mul_boolnan_4, typeof (mul_boolnan_4)) // NaN number    
            
            // [boolean * undefined] & [NaN * undefined] 
            
                const mul_boolund_1 = true * undefined
                const mul_boolund_2 = undefined * true
                const mul_boolund_3 = false * undefined
                const mul_boolund_4 = undefined * false
                console.log(mul_boolund_1, typeof (mul_boolund_1)) // NaN number 
                console.log(mul_boolund_2, typeof (mul_boolund_2)) // NaN number  
                console.log(mul_boolund_3, typeof (mul_boolund_3)) // NaN number 
                console.log(mul_boolund_4, typeof (mul_boolund_4)) // NaN number 

            // [boolean * null] & [null * undefined] 
            
                const mul_boolnul_1 = true * null
                const mul_boolnul_2 = null * true
                const mul_boolnul_3 = false * null
                const mul_boolnul_4 = null * false
                console.log(mul_boolnul_1, typeof (mul_boolnul_1)) // 0 number
                console.log(mul_boolnul_2, typeof (mul_boolnul_2)) // 0 number   
                console.log(mul_boolnul_3, typeof (mul_boolnul_3)) // 0 number
                console.log(mul_boolnul_4, typeof (mul_boolnul_4)) // 0 number  
            
            // [undefined * NaN] & [NaN * undefined] 
            
                const mul_undnan_1 = undefined * NaN
                const mul_undnan_2 = NaN * undefined
                console.log(mul_undnan_1, typeof (mul_undnan_1)) // NaN number 
                console.log(mul_undnan_2, typeof (mul_undnan_2)) // NaN number      
            
            // [undefined * null] & [null * undefined] 
                
                const mul_undnul_1 = undefined * null
                const mul_undnul_2 = null * undefined
                console.log(mul_undnul_1, typeof (mul_undnul_1)) // NaN number 
                console.log(mul_undnul_2, typeof (mul_undnul_2)) // NaN number      
            
            // [NaN * null] & [null * NaN] 
            
                const mul_nannul_1 = NaN * null
                const mul_nannul_2 = null * NaN
                console.log(mul_nannul_1, typeof (mul_nannul_1)) // NaN number 
                console.log(mul_nannul_2, typeof (mul_nannul_2)) // NaN number  

        // division (/)

            // [string / number] & [number / string]

                const div_strnum_1 = "Number " / 10
                const div_strnum_2 = 10 / " Number"
                const div_strnum_3 = "5" / 3
                const div_strnum_4 = 3 / "5"
                console.log(div_strnum_1, typeof (div_strnum_1)) // NaN number 
                console.log(div_strnum_2, typeof (div_strnum_2)) // NaN number 
                console.log(div_strnum_3, typeof (div_strnum_3)); // 1.6666666666666667 number
                console.log(div_strnum_4, typeof (div_strnum_4)) // 0.6 number 

            // [string / boolean] & [boolean / string] 

                const div_strbool_1 = "5" / true
                const div_strbool_2 =  true / "5"
                const div_strbool_3 = "5" / false
                const div_strbool_4 =  false / "5"
                const div_strbool_5 = "text" / true
                const div_strbool_6 = true / "text"
                const div_strbool_7 = "text" / false
                const div_strbool_8 = false / "text"
                console.log(div_strbool_1, typeof (div_strbool_1)) // 5 number
                console.log(div_strbool_2, typeof (div_strbool_2)) // 0.2 number
                console.log(div_strbool_3, typeof (div_strbool_3)) // Infinity number
                console.log(div_strbool_4, typeof (div_strbool_4)) // 0 number
                console.log(div_strbool_5, typeof (div_strbool_5)) // NaN number 
                console.log(div_strbool_6, typeof (div_strbool_6)) // NaN number 
                console.log(div_strbool_7, typeof (div_strbool_7)) // NaN number 
                console.log(div_strbool_8, typeof (div_strbool_8)) // NaN number 

            // [string / NaN] & [NaN / string] 
          
                const div_strnan_1 = "5" / NaN
                const div_strnan_2 =  NaN / "5"
                const div_strnan_3 = "text" / NaN
                const div_strnan_4 =  NaN / "text"
                console.log(div_strnan_1, typeof (div_strnan_1)) // NaN number 
                console.log(div_strnan_2, typeof (div_strnan_2)) // NaN number 
                console.log(div_strnan_3, typeof (div_strnan_3)) // NaN number 
                console.log(div_strnan_4, typeof (div_strnan_4)) // NaN number    
            
            // [string / undefined] & [undefined / string] 

                const div_strund_1 = "5" / undefined
                const div_strund_2 =  undefined / "5"
                const div_strund_3 = "text" / undefined
                const div_strund_4 =  undefined / "text"
                console.log(div_strund_1, typeof (div_strund_1)) // NaN number 
                console.log(div_strund_2, typeof (div_strund_2)) // NaN number 
                console.log(div_strund_3, typeof (div_strund_3)) // NaN number 
                console.log(div_strund_4, typeof (div_strund_4)) // NaN number  

            // [string / null] & [null / string] 

                const div_strnul_1 = "5" / null
                const div_strnul_2 =  null / "5"
                const div_strnul_3 = "text" / null
                const div_strnul_4 =  null / "text"
                console.log(div_strnul_1, typeof (div_strnul_1)) // Infinity number
                console.log(div_strnul_2, typeof (div_strnul_2)) // 0 number
                console.log(div_strnul_3, typeof (div_strnul_3)) // NaN number
                console.log(div_strnul_4, typeof (div_strnul_4)) // NaN number      
            
            // [number / boolean] & [boolean / number] 
            
                const div_numbool_1 = 40 / true
                const div_numbool_2 = true / 40
                const div_numbool_3 = 40 / false
                const div_numbool_4 = false / 40
                console.log(div_numbool_1, typeof (div_numbool_1)) // 40 number
                console.log(div_numbool_2, typeof (div_numbool_2)) // 0.025 number
                console.log(div_numbool_3, typeof (div_numbool_3)) // Infinity number
                console.log(div_numbool_4, typeof (div_numbool_4)) // 0 number

            // [number / NaN] & [NaN / number] 
                
                const div_numnan_1 = 40 / NaN
                const div_numnan_2 = NaN / 40
                console.log(div_numnan_1, typeof (div_numnan_1)) // NaN number   
                console.log(div_numnan_2, typeof (div_numnan_2)) // NaN number    
            
            // [number / undefined] & [undefined / number] 
            
                const div_numund_1 = 40 / undefined
                const div_numund_2 = undefined / 40
                console.log(div_numund_1, typeof (div_numund_1)) // NaN number   
                console.log(div_numund_2, typeof (div_numund_2)) // NaN number      
            
            // [number / null] & [null / number] 
            
                const div_numnul_1 = 40 / null
                const div_numnul_2 = null / 40
                console.log(div_numnul_1, typeof (div_numnul_1)) // Infinity number
                console.log(div_numnul_2, typeof (div_numnul_2)) // 0 number   

            // [number / bigInt] & [bigInt / number] 
            
                // const div_numbig_1 = 40 / 50n // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // const div_numbig_2 = 50n / 40 // TypeError: Cannot mix BigInt and other types, use explicit conversions
                // console.log(div_numbig_1, typeof (div_numbig_1))
                // console.log(div_numbig_2, typeof (div_numbig_2))    
            
            // [boolean / NaN] & [NaN / boolean] 
            
                const div_boolnan_1 = true / NaN
                const div_boolnan_2 = NaN / true
                const div_boolnan_3 = false / NaN
                const div_boolnan_4 = NaN / false
                console.log(div_boolnan_1, typeof (div_boolnan_1)) // NaN number  
                console.log(div_boolnan_2, typeof (div_boolnan_2)) // NaN number    
                console.log(div_boolnan_3, typeof (div_boolnan_3)) // NaN number  
                console.log(div_boolnan_4, typeof (div_boolnan_4)) // NaN number        
            
            // [boolean / undefined] & [NaN / undefined] 
            
                const div_boolund_1 = true / undefined
                const div_boolund_2 = undefined / true
                const div_boolund_3 = false / undefined
                const div_boolund_4 = undefined / false
                console.log(div_boolund_1, typeof (div_boolund_1)) // NaN number  
                console.log(div_boolund_2, typeof (div_boolund_2)) // NaN number   
                console.log(div_boolund_3, typeof (div_boolund_3)) // NaN number  
                console.log(div_boolund_4, typeof (div_boolund_4)) // NaN number   
            
            // [boolean / null] & [null / undefined] 
            
                const div_boolnul_1 = true / null
                const div_boolnul_2 = null / true
                const div_boolnul_3 = false / null
                const div_boolnul_4 = null / false
                console.log(div_boolnul_1, typeof (div_boolnul_1)) // Infinity number
                console.log(div_boolnul_2, typeof (div_boolnul_2)) // 0 number  
                console.log(div_boolnul_3, typeof (div_boolnul_3)) // NaN number  
                console.log(div_boolnul_4, typeof (div_boolnul_4)) // NaN number     
            
            // [undefined / NaN] & [NaN / undefined] 
            
                const div_undnan_1 = undefined / NaN
                const div_undnan_2 = NaN / undefined
                console.log(div_undnan_1, typeof (div_undnan_1)) // NaN number  
                console.log(div_undnan_2, typeof (div_undnan_2)) // NaN number      

            // [undefined / null] & [null / undefined] 
            
                const div_undnul_1 = undefined / null
                const div_undnul_2 = null / undefined
                console.log(div_undnul_1, typeof (div_undnul_1)) // NaN number  
                console.log(div_undnul_2, typeof (div_undnul_2)) // NaN number       
            
            // [NaN / null] & [null / NaN] 
            
                const div_nannul_1 = NaN / null
                const div_nannul_2 = null / NaN
                console.log(div_nannul_1, typeof (div_nannul_1)) // NaN number  
                console.log(div_nannul_2, typeof (div_nannul_2)) // NaN number          

        // loose equality (==)

            console.log(1 == "1"); // true
            console.log(false == "") // true
            console.log(false == '') // true
            console.log(false == undefined) // false
            console.log(false == null) // false
            console.log(false == false) // true
            console.log(null == undefined); // true
            console.log(NaN == NaN); // false
            console.log(0 == "0");  // true

        // strict equality (===)

            console.log(1 === "1"); // false
            console.log(false === "") // false
            console.log(false === '') // false
            console.log(false === undefined) // false
            console.log(false === null) // false
            console.log(false === false) // true
            console.log(null === undefined); // false
            console.log(NaN === NaN); // false
            console.log(0 === "0");  // false

        // truthy/falsy 

            if ("") console.log('true ("/")'); // no output (because if condition is not true) 
            if (5) console.log("true (5)"); // true (5)
            if ("text") console.log('true ("text")'); // true ("text")
            if(undefined) console.log('true (undefined)') // no output (because if condition is not true)
            if(null) console.log('true (null)') // no output (because if condition is not true)
            if(NaN) console.log('true (NaN)') // no output (because if condition is not true)
            if(false) console.log('true (false)') // no output (because if condition is not true)
            if('false') console.log('true (\'false\')') // true ('false')
            if(0) console.log('true (0)') // no output (because if condition is not true)

        // negation (!)

            console.log(!!1); // true
            console.log(!("")) // true

        // isNaN - performs an implicit conversion (coercion) of the argument to a number before testing it for NaN

            console.log(isNaN("sometext12")); // true
            console.log(isNaN(true)); // false
            console.log(isNaN(false)) // false
            console.log(isNaN("")); // false
            console.log(isNaN(NaN)); // true
            console.log(isNaN(undefined)) // true
            console.log(isNaN(null)) // false

    // +++++++++++++++ casting

        let str_1 = "123";
        let str_1_converted = Number(str_1); 
        console.log(str_1_converted, typeof(str_1_converted)); // 123 number

        let str_2 = "text12";
        let str_2_converted = Number(str_2); 
        console.log(str_2_converted, typeof(str_2_converted)); // NaN number
        
        let str_3 = "12text";
        let str_3_converted = Number(str_3); 
        console.log(str_3_converted, typeof(str_3_converted)); // NaN number  
        
        let str_4 = "text12more";
        let str_4_converted = Number(str_4); 
        console.log(str_4_converted, typeof(str_4_converted)); // NaN number 

        let num_1 = 456;
        let num_1_converted = String(num_1); 
        console.log(num_1_converted, typeof num_1_converted); // 456 string

        let num_2 = 0;
        let num_2_converted = Boolean(num_2); 
        console.log(num_2_converted, typeof(num_2_converted)); // false boolean

        let num_3 = 50;
        let num_3_converted = Boolean(num_3); 
        console.log(num_3_converted, typeof(num_3_converted)); // true boolean

        const bool_1 = false
        const bool_1_converted = String(bool_1)
        console.log(bool_1_converted, typeof(bool_1_converted)); // false string

        const obj_1 = {
            count: "100"
        }

        const str_5 = obj_1.count;
        console.log(str_5 === 100) // false
        const str_5_converted = Number(str_5)
        console.log(str_5_converted === 100) // true

    // +++++++++++++++ combine

        const comb_1 = 3 + "text" + undefined + Number("str")
        const comb_2 = 3 + undefined + 5
        const comb_3 = true + Number(true)
        const comb_4 = "" + 5
        const comb_5 = (Number)("5" / 2)

        console.log(comb_1, typeof(comb_1)) // 3textundefinedNaN string
        console.log(comb_2, typeof(comb_2)) // NaN number
        console.log(comb_3, typeof(comb_3)) // 2 number
        console.log(comb_4, typeof(comb_4)) // 5 string
        console.log(comb_5, typeof(comb_5)) // 2.5 number

}