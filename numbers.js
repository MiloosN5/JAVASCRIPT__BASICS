export const numbers = () => {

    const formats = () => {

        //  decimal (Base 10) & exponentiation

            let decimal_1 = 12354398;
            let decimal_2 = 50;

            console.log(decimal_1, typeof (decimal_1)); // 12354398 number
            console.log(decimal_2, typeof (decimal_2)); // 50 number

            // let decimal_3 = 0888; 
            // let decimal_4 = 0777;

            /*
                NOTE: Node.js uses ES modules (`type: "module"` in package.json), which automatically enables strict mode.
                => console.log(decimal_3, typeof(decimal_3)); 
                SyntaxError: Decimals with leading zeros are not allowed in strict mode. 
                Without strict mode (or in older JavaScript engines), this would be interpreted as:
                0888 -> 888 (decimal number) with a warning (Parsing error: Invalid number).
            
                => console.log(decimal_4, typeof(decimal_4)); 
                SyntaxError: Octal literals are not allowed in strict mode.
                NOTE: Node.js uses ES modules (`type: "module"`), where strict mode is enabled by default.
                Without strict mode, this would be interpreted as an octal number:
                0777 -> 511 (octal number, interpreted as base 8).
            */

            let expo_1 = 1.23e6;
            let expo_2 = 1.23e-6;
            let expo_3 = 0e-5;
            let expo_4 = 0e+5;
            let expo_5 = 5e1;
            let expo_6 = 175e-2;
            let expo_7 = 1e3;
            let expo_8 = 1e-3;
            let expo_9 = 1E4;

            console.log(expo_1, typeof (expo_1)); // 1230000 number
            console.log(expo_2, typeof (expo_2)); // 0.00000123 number
            console.log(expo_3, typeof (expo_3)); // 0 number
            console.log(expo_4, typeof (expo_4)); // 0 number
            console.log(expo_5, typeof (expo_5)); // 50 number
            console.log(expo_6, typeof (expo_6)); // 1.75 number
            console.log(expo_7, typeof (expo_7)); // 1000 number
            console.log(expo_8, typeof (expo_8)); // 0.001 number
            console.log(expo_9, typeof (expo_9)); // 10000 number

        // binary (Base 2)

            let binary_1 = 0b10000000000000000000000000000000
            let binary_2 = 0b01111111100000000000000000000000
            let binary_3 = 0B00000000011111111111111111111111
            let binary_4 = 0b1010;

            console.log(binary_1, typeof (binary_1)); // 2147483648 number
            console.log(binary_2, typeof (binary_2)); // 2139095040 number
            console.log(binary_3, typeof (binary_3)); // 8388607 number
            console.log(binary_4, typeof (binary_4)); // 10 number

        // octal (Base  8)

            let octal_1 = 0O755;
            let octal_2 = 0o644;
            let octal_3 = 0o17;

            console.log(octal_1, typeof (octal_1)); // 493 number
            console.log(octal_2, typeof (octal_2)); // 420 number  
            console.log(octal_3, typeof (octal_3)); // 15 number  

        // hexadecimal (Base 16)

            let hex_1 = 0x1f;
            /*
                WARNING: Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
            */
            let hex_2 = 0xFFFFFFFFFFFFFFFFF
            let hex_3 = 0x123456789ABCDEF
            let hex_4 = 0XA
            // let hex_5 = 0x561HM // SyntaxError: Invalid or unexpected token

            console.log(hex_1, typeof (hex_1)); // 31 number
            console.log(hex_2, typeof (hex_2)); // 295147905179352830000 number
            console.log(hex_3, typeof (hex_3)); // 81985529216486900 number
            console.log(hex_4, typeof (hex_4)); // 10 number

        // number checking 

            console.log(255 === 255.0) // true
            console.log(255 === 0xff) // true
            console.log(255 === 0XfF) // true
            console.log(255 === 0b11111111) // true
            console.log(255 === 0.255e3) // true
            console.log(255 === 0o377) // true

        // special values

            let spec_1 = Infinity;
            let spec_2 = -Infinity;
            let spec_3 = NaN;

            console.log(spec_1, typeof (spec_1)) // Infinity number
            console.log(spec_2, typeof (spec_2)) // -Infinity number
            console.log(spec_3, typeof (spec_3)) // NaN number

        // BigInt (not type Number => it's individual data type called "bigint")

            let bigInt_1 = 123456789012345678901234567890n;
            /*
                WARNING (bigInt_2): Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers 
            */
            let bigInt_2 = 123456789012345678901234567890;
            let bigInt_3 = 50n
            let bigInt_4 = 50
            let bigInt_5 = BigInt(123)
            let bigInt_6 = BigInt("-1234567890987654321");
            const bigInt_7 = 12 ** 34;
            const bigInt_8 = 12n ** 34n;
            // const bigInt_9 = 12n * 34; // TypeError: Cannot mix BigInt and other types, use explicit conversions
            // const bigInt_10 = 12 ** 34n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
            const bigInt_11 = 5n / 2n;

            console.log(bigInt_1, typeof (bigInt_1)) // 123456789012345678901234567890n bigint
            console.log(bigInt_2, typeof (bigInt_2)) // 1.2345678901234568e+29 number
            console.log(bigInt_3, typeof (bigInt_3)) // 50n bigint
            console.log(bigInt_4, typeof (bigInt_4)) // 50 number
            console.log(bigInt_5, typeof (bigInt_5)) // 123n bigint
            console.log(bigInt_6, typeof (bigInt_6)) // -1234567890987654321n bigint
            console.log(bigInt_7, typeof (bigInt_7)) // 4.9222352429520264e+36 number
            console.log(bigInt_8, typeof (bigInt_8)) // 4922235242952026704037113243122008064n bigint
            console.log(bigInt_11, typeof (bigInt_11)) // 2n bigint ( because there's no 2.5 in BigInt)

    }

    const numberObject = () => {

        // [CONSTRUCTOR] 

            // Number() 

                const constr_1 = new Number("123");
                const constr_2 = Number("123");

                console.log(constr_1 instanceof Number); // true
                console.log(constr_2 instanceof Number); // false
                console.log(typeof constr_1); // object
                console.log(typeof constr_2); // number

                console.log(Number(1n), typeof (Number(1n))) // 1 number
                console.log(BigInt(Number(2n ** 20n + 1n)) === 2n ** 20n + 1n); // true
                console.log(BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n); // false

        // [STATIC PROPERTIES]

            console.log(Number.EPSILON) // 2.220446049250313e-16
            console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
            console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
            console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991
            console.log(Number.MIN_VALUE) // 5e-324
            console.log(Number.NaN) // NaN
            console.log(Number.NEGATIVE_INFINITY) // -Infinity
            console.log(Number.POSITIVE_INFINITY) // Infinity

        // [STATIC METHODS]

            // Number.isFinite()

                console.log(Number.isFinite(1 / 0)) // false
                console.log(Number.isFinite(10 / 5)) // true
                console.log(Number.isFinite(0 / 0)) // false
                console.log(Number.isFinite(0 / 1)) // true
                console.log(Number.isFinite(Infinity)) // false
                console.log(Number.isFinite(-Infinity)) // false
                console.log(Number.isFinite(NaN)) // false
                console.log(Number.isFinite(0)) // true
                console.log(Number.isFinite(2e64)) // true

            // Number.isFinite() vs global isFinite()

                console.log(isFinite("0")) // true
                console.log(Number.isFinite("0")) // false
                console.log(isFinite(null)) // true
                console.log(Number.isFinite(null)) // false

            // Number.isInteger()

                console.log(Number.isInteger(10 / 5)) // true
                console.log(Number.isInteger(10 / 5.0)) // true
                console.log(Number.isInteger(10.0 / 5.0)) // true
                console.log(Number.isInteger(5 / 10)) // false
                console.log(Number.isInteger(5 / 11)) // false
                console.log(Number.isInteger(1 / 0)) // false
                console.log(Number.isInteger(0 / 1)) // true
                console.log(Number.isInteger(0 / 0)) // false
                console.log(Number.isInteger(0)) // true
                console.log(Number.isInteger(-0)) // true
                console.log(Number.isInteger(99999999999999999999999)) // true
                console.log(Number.isInteger(0.1)) // false
                console.log(Number.isInteger(1.0)) // true
                console.log(Number.isInteger(Math.PI)) // false
                console.log(Number.isInteger(NaN)) // false
                console.log(Number.isInteger(Infinity)) // false
                console.log(Number.isInteger(-Infinity)) // false
                console.log(Number.isInteger("10")) // false
                console.log(Number.isInteger(true)) // false
                console.log(Number.isInteger(false)) // false
                console.log(Number.isInteger([1])) // false
                console.log(Number.isInteger(5.000000000000001)) // false
                console.log(Number.isInteger(5.0000000000000001)) // true (because of loss of precision)
                console.log(Number.isInteger(4500000000000000.1)) // true (because of loss of precision)

            // Number.isNaN()

                console.log(Number.isNaN(NaN)); // true
                console.log(Number.isNaN(Number.NaN)); // true
                console.log(Number.isNaN(0 / 0)); // true
                console.log(Number.isNaN(37)); // false

            // Number.isNaN() vs global isNaN()

                console.log('bbb', Number.isNaN("NaN")); // false
                console.log(isNaN("NaN")); // true
                console.log(Number.isNaN(undefined)); // false
                console.log(isNaN(undefined)); // true
                console.log(Number.isNaN({})); // false
                console.log(isNaN({})); // true
                console.log(Number.isNaN("text")); // false
                console.log(isNaN("text")); // true
                console.log(Number.isNaN("text and something else")); // false
                console.log(isNaN("text and something else")); // true
                console.log(Number.isNaN(true)); // false
                console.log(isNaN(true)); // false (this is coerced to 1)
                console.log(Number.isNaN(null)); // false
                console.log(isNaN(null)); // false (this is coerced to 0)
                console.log(Number.isNaN("37")); // false
                console.log(isNaN("37")); // false (this is coerced to 37)
                console.log(Number.isNaN("37.37")); // false 
                console.log(isNaN("37.37")); // false (this is coerced to 37.37)
                console.log(Number.isNaN("")); // false
                console.log(isNaN("")); // false (this is coerced to 0)
                console.log(Number.isNaN(" ")); // false
                console.log(isNaN(" ")); // false (this is coerced to 0)

            // Number.isSafeInteger()

                Number.isSafeInteger(3); // true
                Number.isSafeInteger(2 ** 53); // false
                Number.isSafeInteger(2 ** 53 - 1); // true
                Number.isSafeInteger(NaN); // false
                Number.isSafeInteger(Infinity); // false
                Number.isSafeInteger("3"); // false
                Number.isSafeInteger(3.1); // false
                Number.isSafeInteger(3.0); // true

            // Number.parseFloat() -> parses a string arg & return a floating point number

                /*
                    This method has the same functionality as the global parseFloat() function
                */
                console.log(Number.parseFloat === parseFloat) // true

                console.log(parseFloat(3.14)); // 3.14
                console.log(parseFloat("3.14")); // 3.14
                console.log(parseFloat("  3.14  ")); // 3.14
                console.log(parseFloat("314e-2")); // 3.14
                console.log(parseFloat("0.0314E+2")); // 3.14
                console.log(parseFloat("3.14some non-digit characters")); // 3.14
                console.log(parseFloat({
                    toString() {
                        return "3.14";
                    },
                })); // 3.14

            // Number.parseInt() -> parses a string arg & return an integer of the specified RADIX

                /*
                    This method has the same functionality as the global parseInt() function
                */
                console.log(Number.parseInt === parseInt) // true

                console.log(Number.parseInt('123')) // 123 (default base-10)
                console.log(Number.parseInt('123', 10)); // 123 (explicitly specify base-10)
                console.log(Number.parseInt('123', 16)); // 291 (explicitly specify base-16)
                console.log(Number.parseInt('   123 ')); // 123 (whitespace is ignored)
                console.log(Number.parseInt("   123 ")); // 123 (whitespace is ignored)
                console.log(Number.parseInt('077')); // 77 (leading zeros are ignored)
                console.log(Number.parseInt('1.9')); // 1 (decimal part is truncated)
                console.log(Number.parseInt('ff', 16)); // 255 (lower-case hexadecimal)
                console.log(Number.parseInt('0xFF', 16)); // 255 (upper-case hexadecimal with "0x" prefix)
                console.log(Number.parseInt('0XFF', 16)); // 255 (upper-case hexadecimal with "0X" prefix)
                console.log(Number.parseInt('0xff', 16)); // 255 (lower-case hexadecimal with "0x" prefix)
                console.log(Number.parseInt('0Xff', 16)); // 255 (lower-case hexadecimal with "0X" prefix)
                console.log(Number.parseInt('0xFf', 16)); // 255 (mixing upper-case & lower-case hexadecimal)
                console.log(Number.parseInt('xyz')); // NaN (input can't be converted to an integer)

            // parseInt() vs parseFloat()

                console.log(parseInt("42")) // 42
                console.log(parseFloat("42")) // 42

                console.log(parseInt("55.8")) // 55
                console.log(parseFloat("55.8")) // 55.8

                console.log(parseInt("FF2")) // NaN
                console.log(parseFloat("FF2")) // NaN

                console.log(parseInt("NaN")) // NaN
                console.log(parseFloat("NaN")) // NaN

                console.log(parseInt(NaN)) // NaN
                console.log(parseFloat(NaN)) // NaN

                console.log(parseInt("1.7976931348623159e+308")); // 1
                console.log(parseInt("-1.7976931348623159e+308")); // -1
                console.log(parseFloat("1.7976931348623159e+308")); // Infinity
                console.log(parseFloat("-1.7976931348623159e+308")); // -Infinity

                console.log(parseInt("Infinity")) // NaN
                console.log(parseInt("-Infinity")) // NaN
                console.log(parseFloat("Infinity")) // Infinity
                console.log(parseFloat("-Infinity")) // -Infinity

                console.log('aaa', parseInt(900719925474099267n)) // 900719925474099300
                console.log(parseInt("900719925474099267n")) // 900719925474099300
                console.log(parseFloat(900719925474099267n)) // 900719925474099300
                console.log(parseFloat("900719925474099267n")) // 900719925474099300

        // [INSTANCE PROPERTIES]

            // constructor

                const constrProp_1 = {}
                const constrProp_2 = new Object()
                const constrProp_3 = new Number()
                const constrProp_4 = Number()
                const constrProp_5 = 25

                console.log(constrProp_1.constructor) // [Function: Object]
                console.log(constrProp_1.constructor === Object) // true
                console.log(constrProp_2.constructor) // [Function: Object]
                console.log(constrProp_2.constructor === Object) // true
                console.log(constrProp_3.constructor) // [Function: Number]
                console.log(constrProp_3.constructor === Object) // false
                console.log(constrProp_3.constructor === Number) // true
                console.log(constrProp_4.constructor) // [Function: Number]
                console.log(constrProp_4.constructor === Object) // false
                console.log(constrProp_4.constructor === Number) // true
                console.log(constrProp_5.constructor) // [Function: Number]
                console.log(constrProp_5.constructor === Object) // false
                console.log(constrProp_5.constructor === Number) // true

        // [INSTANCE METHODS]

            // Number.prototype.toExponential()

                const toExpo_1 = 77.1234;

                console.log((77).toExponential()) // 7.7e+1
                console.log(toExpo_1.toExponential()); // 7.71234e+1
                console.log(toExpo_1.toExponential(2)); // 7.71e+1
                console.log(toExpo_1.toExponential(4)); // 7.7123e+1

                const toExpo_2 = "123456"

                // console.log(toExpo_2.toExponential()); // TypeError: toExpo_2.toExponential is not a function
                // console.log(toExpo_2.toExponential(2)); // TypeError: toExpo_2.toExponential is not a function
                // console.log(toExpo_2.toExponential(4)); // TypeError: toExpo_2.toExponential is not a function
                console.log(Number.parseFloat(toExpo_2).toExponential()); // 1.23456e+5
                console.log(Number.parseFloat(toExpo_2).toExponential(2)); // 1.23e+5
                console.log(Number.parseFloat(toExpo_2).toExponential(4)); // 1.2346e+5

            // Number.prototype.toFixed()

                // console.log(50.toFixed(4)) // An identifier or keyword cannot immediately follow a numeric literal.
                console.log((50).toFixed(4)) // 50.0000
                console.log((1000000000000000128).toString()); // 1000000000000000100
                console.log((1000000000000000128).toFixed(0)); // 1000000000000000128
                console.log((0.3).toFixed(30)) // 0.299999999999999988897769753748
                console.log((1.23e20).toFixed(2)) // 123000000000000000000.00
                console.log((1.23e-10).toFixed(2)) // 0.00
                console.log((2.449999999999999999).toFixed(1)) // 2.5
                console.log(-2.34.toFixed(1), typeof (-2.34.toFixed(1))); // -2.3 number
                console.log((-2.34).toFixed(1), typeof ((-2.34).toFixed(1))); // -2.3 string
                console.log(2.34.toFixed(1), typeof (2.34.toFixed(1))); // 2.3 string
                console.log((2.34).toFixed(1), typeof ((2.34).toFixed(1))); // 2.3 string
                console.log((2.34).toFixed(3)) // 2.340

            // Number.prototype.toLocaleString()

                console.log((123456.789).toLocaleString("de-DE", { style: "currency", currency: "EUR" })); // 123.456,79 €
                console.log((123456.789).toLocaleString("ja-JP", { style: "currency", currency: "JPY" })); // ￥123,457
                console.log(
                    (30000.65).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }),
                ); // 30,000.65

            // Number.prototype.toPrecision()

                console.log((5.123456).toPrecision()); // 5.123456
                console.log((5.123456).toPrecision(5)); // 5.1235
                console.log((5.123456).toPrecision(2)); // 5.1
                console.log((5.123456).toPrecision(1)); // 5

                console.log((0.000123).toPrecision()); // 0.000123
                console.log((0.000123).toPrecision(5)); // 0.00012300
                console.log((0.000123).toPrecision(2)); // 0.00012
                console.log((0.000123).toPrecision(1)); // 0.0001

                console.log((1234.5).toPrecision(1)); // 1e+3
                console.log((1234.5).toPrecision(2)); // 1.2e+3
                console.log((1234.5).toPrecision(6)); // 1234.50       

                console.log((0.00000012345).toPrecision(1)); // 1e-7
                console.log((0.00000012345).toPrecision(10)); // 1.234500000e-7

            // Number.prototype.toString() -> showing a string representing a number in different formats

                /*
                    NOTE: The toString() method here is not the one from Object.prototype.toString(). Instead, it is the overridden version from Number.prototype.toString().
                */

                let toString_1 = 255;

                console.log(toString_1.toString()) // 255
                // console.log(toString_1.toString(0)) // RangeError: toString() radix argument must be between 2 and 36
                // console.log(toString_1.toString(1)) // RangeError: toString() radix argument must be between 2 and 36
                console.log(toString_1.toString(2)) // 11111111 (binary)
                console.log(toString_1.toString(3)) // 100110 (ternary)
                console.log(toString_1.toString(4)) // 3333 (quaternary)
                console.log(toString_1.toString(8)) // 377 (octal)
                console.log(toString_1.toString(10)) // 255 (decimal)
                console.log(toString_1.toString(16)) // ff (hexadecimal)
                console.log(toString_1.toString(20)) // cf (vigesimal)
                console.log(toString_1.toString(36)) // 73 (base36)
                // console.log(toString_1.toString(60)) // (sexagesimal) // RangeError: toString() radix argument must be between 2 and 36
                // console.log(toString_1.toString(null)) // RangeError: toString() radix argument must be between 2 and 36

            // Number.prototype.valueOf() -> a number representing the primitive value of the specified Number object.

                const valueOf_1 = new Number(10);
                console.log(typeof valueOf_1); // object

                const valueOf_val = valueOf_1.valueOf();
                console.log(valueOf_val); // 10
                console.log(typeof valueOf_val); // number
                
    }

    formats();
    numberObject();

}