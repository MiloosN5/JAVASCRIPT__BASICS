export const strings = () => {
    
    const primitive = () => {

        // 1 ✙ 

            const str_1a = "Some text";
            const str_1b = 'Some text';
            const str_1c = `Some text`;

            const str_1d = "N";
            const str_1e= 'N';
            const str_1f = `N`;

            console.log(str_1a, typeof(str_1a)); // Some text string
            console.log(str_1b, typeof(str_1b)); // Some text string
            console.log(str_1c, typeof(str_1c)); // Some text string
            console.log(str_1d, typeof(str_1d)); // N string
            console.log(str_1e, typeof(str_1e)); // N string
            console.log(str_1f, typeof(str_1f)); // N string

        // 2 ✙ non-primitive (object)

            const str_2 = new String("Some text");
            console.log(str_2, typeof(str_2)); // [String: 'Some text'] object

    }

    const charAccess = () => {

        const str_1 = "Person";
        const str_2 = new String("Person");
        
        console.log(str_1.charAt(3)); // s
        console.log(str_2.charAt(3)); // s
        console.log(str_1[3]); // s
        console.log(str_2[3]); // s

    }

    const stringCompare = () => {

        // 1 ✙ case-sensitive

            const compareSensitive = (a, b) => {
                if(a < b) {
                    console.log(`${a} is less than ${b}`);
                } else if (a > b) {
                    console.log(`${a} is greater than ${b}`);
                } else {
                    console.log(`${a} and ${b} are equal.`);
                }
            }

            compareSensitive("Aleksandar", "Aleksandra"); // Aleksandar is less than Aleksandra
            compareSensitive("Aleksandar", "AleksaNdra"); // Aleksandar is greater than AleksaNdra
            compareSensitive(new String("Aleksandar"), new String("Aleksandra")); // Aleksandar is less than Aleksandra
            compareSensitive(new String("Aleksandar"), new String("AleksaNdra")); // Aleksandar is greater than AleksaNdra
    
        // 2 ✙ case-insensitive

            const compareInsensitive = (a, b) => {
                if(a.toUpperCase() < b.toUpperCase()) {
                    console.log(`${a} is less than ${b}`);
                } else if (a.toUpperCase() > b.toUpperCase()) {
                    console.log(`${a} is greater than ${b}`);
                } else {
                    console.log(`${a} and ${b} are equal.`);
                }
            }

            compareInsensitive("Aleksandar", "Aleksandra"); // Aleksandar is less than Aleksandra
            compareInsensitive("Aleksandar", "AleksaNdra"); // Aleksandar is less than Aleksandra
            compareInsensitive(new String("Aleksandar"), new String("Aleksandra")); // Aleksandar is less than Aleksandra
            compareInsensitive(new String("Aleksandar"), new String("AleksaNdra")); // Aleksandar is less than Aleksandra

    }

    const stringCoercion = () => {

        // 1 ✙ template literal

            console.log(`String is: ${"string text"}`); // String is: string text
            console.log(`String is: ${undefined}`); // String is: undefined
            console.log(`String is: ${null}`); // String is: null
            console.log(`String is: ${true}`); // String is: true
            console.log(`String is: ${false}`); // String is: false
            console.log(`String is: ${25}`); // String is: 25
            console.log(`String is: ${25.4}`); // String is: 25.4
            console.log(`String is: ${30n}`); // String is: 30
            // console.log(`String is: ${Symbol("id")}`); // TypeError: Cannot convert a Symbol value to a string
            console.log(`String is: ${new Array("Apple", "Orange")}`); // String is: Apple,Orange
    
        // 2 ✙ the String() function

            console.log(String("string text")); // string text
            console.log(String(undefined)); // undefined
            console.log(String(null)); // null
            console.log(String(true)); // true
            console.log(String(false)); // false
            console.log(String(25)); // 25
            console.log(String(25.4)); // 25.4
            console.log(String(30n)); // 30
            console.log(String(Symbol("id"))); // String(id)
            console.log(String(new Array("Apple", "Orange"))); // Apple,Orange
    
        // 3 ✙ using the "+" operator

            console.log("String " + "string text"); // String string text
            console.log("String " + undefined); // String undefined
            console.log("String " + null); // String null
            console.log("String " + true); // String true
            console.log("String " + false); // String false
            console.log("String " + 25); // String 25
            console.log("String " + 25.4); // String 25.4
            console.log("String " + 30n); // String 30
            // console.log("String " + Symbol("id")); // TypeError: Cannot convert a Symbol value to a string
            console.log("String " + new Array("Apple", "Orange")); // String Apple,Orange
    
        // 4 ✙ the "+" operator VS String()

            const obj_4 = {
                toString() {
                    return "toString result";
                },
                valueOf() {
                    return 28;
                }
            };
            console.log(String(obj_4)); // toString result
            console.log("" + obj_4);    // 28
        
    }

    const charsUTF16 = () => {

        console.log("😄".split("")); // [ '\ud83d', '\ude04' ]
        console.log([..."😄"]) // [ '😄' ]
        console.log("😄".charCodeAt(0).toString(16)); // d83d
        console.log("😄".charCodeAt(1).toString(16)); // de04
        console.log(`U+${"😄".codePointAt(0).toString(16)}`) //U+1f604
        console.log(`U+${"😄".codePointAt(1).toString(16)}`) //U+de04
        console.log('\uD83D\uDE04'); // 😄
        console.log('\uD83D'); // �
        console.log('\uDE04'); // �

        console.log("👉🏿".split("")); // [ '\ud83d', '\udc49', '\ud83c', '\udfff' ]
        console.log([..."👉🏿"]); // [ '👉', '🏿' ]
        console.log(`U+${"👉🏿".codePointAt(0).toString(16)}`) //U+1f449
        console.log(`U+${"👉🏿".codePointAt(1).toString(16)}`) //U+dc49
        console.log(`U+${"👉🏿".codePointAt(2).toString(16)}`) //U+1f3ff
        console.log(`U+${"👉🏿".codePointAt(3).toString(16)}`) //U+dfff
        console.log('\ud83d\udc49\ud83c\udfff' ); // 👉🏿	
        console.log('\ud83d\udc49'); // 👉
        console.log('\ud83c\udfff'); // 🏿

        console.log("👉".split("")); // [ '\ud83d', '\udc49' ]
        console.log([..."👉"]); // [ '👉' ]
        console.log(`U+${"👉".codePointAt(0).toString(16)}`) //U+1f449
        console.log(`U+${"👉".codePointAt(1).toString(16)}`) //U+dc49
        console.log('\u0055\u002B\u0031\u0046\u0034\u0034\u0039'); // U+1F449

        console.log([..."👨‍👦"]); // [ '👨', '‍', '👦' ]
        console.log("👨‍👦".split("")); // [ '\ud83d', '\udc68', '‍', '\ud83d', '\udc66' ]
        console.log('\ud83d\udc68'); // 👨
        console.log('\ud83d\udc66'); //👦
        
        console.log([..."🇺🇳"]); // [ '🇺' , '🇳'  ]
        console.log([..."UN"]); // [ 'U', 'N' ]

    }

    const constructor = () => {

        // 1 ✙

            const str_1a = new String("Hello world");
            const str_1b = String("Hello world");
            const str_1c = "Hello world";

            console.log(str_1a == "Hello world"); // true
            console.log(str_1a === "Hello world"); // false
            console.log(str_1b == "Hello world"); // true
            console.log(str_1b === "Hello world"); // true
            console.log(str_1c == "Hello world"); // true
            console.log(str_1c === "Hello world"); // true

            console.log(str_1a instanceof String); // true
            console.log(str_1b instanceof String); // false
            console.log(str_1c instanceof String); // false

            console.log(typeof str_1a); // object
            console.log(typeof str_1b); // string
            console.log(typeof str_1c); // string

        // 2 ✙

            const sym_2 = Symbol("example");
            String(sym_2);
            console.log(sym_2, typeof(sym_2)); // Symbol(example) symbol

    }

    const staticMethods = () => {

        // String.fromCharCode()
        const fromCharCode = () => {

            console.log(String.fromCharCode(189, 43, 190, 61)); // ½+¾=
            console.log(String.fromCharCode(65, 66, 67)); // ABC
            console.log(String.fromCharCode(0x2014)); // —
            console.log(String.fromCharCode(0x12014)); // — (the digit 1 is truncated and ignored)
            console.log(String.fromCharCode(8212)); // — (8212 is the decimal form of 0x2014)
            
            console.log(String.fromCharCode(0xd83c, 0xdf03)); // 🌃
            console.log(String.fromCharCode(55356, 57091)); // 🌃
            console.log(String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07)); // 𝌆a𝌇
        }

        // String.fromCodePoint()
        const fromCodePoint = () => {

            // 1 ✙

                console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804)); // ☃★♲你

            // 2 ✙ valid

                console.log(String.fromCodePoint(42)); // *
                console.log(String.fromCodePoint(65, 90)); // AZ
                console.log(String.fromCodePoint(0x404)); // "Є
                console.log(String.fromCodePoint(0x2f804)); // 你
                console.log(String.fromCodePoint(194564)); // 你
                console.log(String.fromCodePoint(0x1d306, 0x61, 0x1d307)); // 𝌆a𝌇
        
            // 3 ✙ invalid

                // console.log(String.fromCodePoint("_")); // RangeError: Invalid code point NaN
                // console.log(String.fromCodePoint(Infinity)); // RangeError: Invalid code point Infinity
                // console.log(String.fromCodePoint(-1)); // RangeError: Invalid code point -1
                // console.log(String.fromCodePoint(3.14)); // RangeError: Invalid code point 3.14
                // console.log(String.fromCodePoint(3e-2)); // RangeError: Invalid code point 0.03
                // console.log(String.fromCodePoint(NaN)); // RangeError: Invalid code point NaN
        
        }

        // String.raw()
        const raw = () => {

            console.log(String.raw`Hi\n${2 + 3}!`); // Hi\n5!
            console.log(String.raw`Hi\u000A!`); // Hi\u000A!

            const name_1 = "Bob";
            console.log(String.raw`Hi\n${name}!`); // Hi\nBob!
            console.log(String.raw`Hi \${name}!`); // Hi \${name}!

        }

        // fromCharCode();
        // fromCodePoint();
        // raw();

    }

    const instanceProperties = () => {

        // String.prototype.constructor
        const constructor = () => {

            const str_1 = new String("some text");
            console.log(str_1.constructor); // [Function: String]

            const str_2 = "some text";
            console.log(str_2.constructor); // [Function: String]

        }

        // length
        const length = () => {

            // basic usage

                const str_1 = "Mozilla";
                console.log(`${str_1} is ${str_1.length} code units long`); // Mozilla is 7 code units long

            // large strings (NOTE: the size of the string may be different from the size of the source file)

                const large_1 = "a".repeat(2 ** 29 - 24); 
                console.log(large_1.length) // 536870888
                // const large_2 = "a".repeat(2 ** 29 - 23); // RangeError: Invalid string length
            
                const buffer = new Uint8Array(2 ** 29 - 24).fill("a".codePointAt(0)); 
                const large_3 = new TextDecoder().decode(buffer); 
                console.log(large_3.length) // 536870888

            // empty string

                console.log("".length) // 0
                console.log(" ".length) // 1

            // string iterator

                function getLength(str) {
                    return [...str].length;
                }
                console.log(getLength("A\uD87E\uDC04Z")); // 3

            // Strings with length not equal to the number of characters

                const emoji_1 = "😄";
                console.log(emoji_1.length); // 2
                console.log([...emoji_1].length); // 1
                const adlam_1 = "𞤲𞥋𞤣𞤫";
                console.log(adlam_1.length); // 8
                console.log([...adlam_1].length); // 4
                const formula_1 = "∀𝑥∈ℝ,𝑥²≥0";
                console.log(formula_1.length); // 11
                console.log([...formula_1].length); // 9

            // assigning to length

                const myString = "bluebells";
                // myString.length = 4;
                /*
                    STRICT MODE: TypeError: Cannot assign to read only property 'length' of string 'bluebells'
                    NON-STRICT MODE: no error, successfull but has no observable effect
                */
                console.log(myString); // bluebells
                console.log(myString.length); // 9

        }

        constructor();
        // length();
    }

    const instanceMethods = () => {

        // String.prototype.at()
        const at = () => {

            // 1 ✙

                const sentence_1 = 'The quick brown fox jumps over the lazy dog.';
                let index_1 = 5;
                console.log(`An index of ${index_1} returns the character ${sentence_1.at(index_1)}`) // An index of 5 returns the character u
                index_1 = -4;
                console.log(`An index of ${index_1} returns the character ${sentence_1.at(index_1)}`) // An index of -4 returns the character d
                index_1 = 54;
                console.log(`An index of ${index_1} returns the character ${sentence_1.at(index_1)}`) // An index of 54 returns the character undefined

            // 2 ✙ vs slice() & charAt()

                const myString_2 = "Every green bus drives fast.";

                const lengthWay_2 = myString_2.charAt(myString_2.length - 2);
                console.log(lengthWay_2); // t
                
                const sliceWay_2 = myString_2.slice(-2, -1);
                console.log(sliceWay_2); // t
                
                const atWay_2 = myString_2.at(-2);
                console.log(atWay_2); // t

        }

        // String.prototype.charAt()
        const charAt = () => {

            // 1 ✙

                const sentence_1 = 'The quick brown fox jumps over the lazy dog.';
                let index_1 = 4;
                console.log(sentence_1.charAt(index_1)); // q
                console.log(sentence_1.at(index_1)) // q
                index_1 = -7;
                console.log(sentence_1.charAt(index_1)); // 
                console.log(sentence_1.at(index_1)) // z
                console.log(sentence_1.charAt()); // T (if index is not provided, the value is converted to 0)
                console.log(sentence_1.at()) // T (if index is not provided, the value is converted to 0)

            // 2 ✙ returning lone surrogates

                const str_2 = "𠮷𠮾";
                console.log(str_2.charAt(0)); // "\ud842", which is not a valid Unicode character
                console.log(str_2.charAt(1)); // "\udfb7", which is not a valid Unicode character

        }

        // String.prototype.charCodeAt()
        const charCodeAt = () => {

            // 1 ✙

                const sentence_1 = 'The quick brown fox jumps over the lazy dog.';
                let index_1 = 4;
                console.log(
                    `Character code ${sentence_1.charCodeAt(index_1)} is equal to ` +
                    `"${sentence_1.charAt(index_1)}"`,
                ); // Character code 113 is equal to "q"
                index_1 = 100;
                console.log(
                    `Character code ${sentence_1.charCodeAt(index_1)} is equal to ` +
                    `"${sentence_1.charAt(index_1)}"`,
                ); // Character code NaN is equal to ""
                console.log(
                    `Character code ${sentence_1.charCodeAt()} is equal to ` +
                    `"${sentence_1.charAt()}"`,
                ); // Character code 84 is equal to "T"   

                console.log("ABC".charCodeAt(0)); // 65

            // 2 ✙ returning lone surrogates

                const str_2 = "𠮷𠮾";
                console.log(str_2.charCodeAt(0)); // "55362, or d842, which is not a valid Unicode character
                console.log(str_2.charCodeAt(1)); // "57271, or dfb7, which is not a valid Unicode character
        }

        // String.prototype.codePointAt()
        const codePointAt = () => {

             // 1 ✙ 

                console.log('☃★♲'.codePointAt(1)) // 9733
                console.log("ABC".codePointAt(0)) // 65
                console.log("ABC".codePointAt(0).toString(16)) // 41
                console.log("ABC".codePointAt(42)) // undefined
                console.log("😍".codePointAt(0)) // 128525
                console.log("😍".codePointAt(1)) // 56845

            // 2 ✙ 

                // NOTE: use "for ... of" instead of regular for loop (for more info, see => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
                const str_2 = "\ud83d\udc0e\ud83d\udc71\u2764";
                
                for (const codePoint of str_2) {
                    console.log(codePoint.codePointAt(0).toString(16));
                }
                /*
                    1f40e
                    1f471
                    2764
                */
                
                console.log([...str_2].map((cp) => cp.codePointAt(0).toString(16))); // [ '1f40e', '1f471', '2764' ]

        }

        // String.prototype.concat()
        const concat = () => {

            // 1 ✙ 

                const str_1 = "Hello, ";
                console.log(str_1.concat("Kevin", ". Have a nice day.")); // Hello, Kevin. Have a nice day.

            // 2 ✙     

                const arr_2 = ["Hello", " ", "Venkat", "!"];
                console.log("".concat(...arr_2)); // Hello Venkat!

            // 3 ✙ 

                console.log("".concat({})); // [object Object]
                console.log("".concat([])); // 
                console.log("".concat(null)); // null
                console.log("".concat(true)); // true
                console.log("".concat(4, 5)); // 45

        }

        // String.prototype.endsWith()
        const endsWith = () => {

            const str_1 = 'Cats are the best!';
            console.log(str_1.endsWith('best!')); // true
            console.log(str_1.endsWith("Best")); // false
            console.log(str_1.endsWith('best', 17)); // true

            const str_2 = 'Is this a question?';
            console.log(str_2.endsWith('question')); // false

            const str_3 = "To be, or not to be, that is the question.";
            console.log(str_3.endsWith("question.")); // true
            console.log(str_3.endsWith("to be")); // false
            console.log(str_3.endsWith("to be", 19)); // true

        }

        // String.prototype.includes()
        const includes = () => {

            const sentence_1 = 'The quick brown fox jumps over the lazy dog.';
            const word_1 = 'fox';
            console.log(
                `The word "${word_1}" ${
                    sentence_1.includes(word_1) ? 'is' : 'is not'
                } in the sentence`,
            );
            console.log("Blue Whale".includes("blue")); // false
            console.log("Blue Whale".toLowerCase().includes("blue")); // true

            const sentence_2 = "To be, or not to be, that is the question.";
            console.log(sentence_2.includes("To be")); // true
            console.log(sentence_2.includes("question")); // true
            console.log(sentence_2.includes("nonexistent")); // false
            console.log(sentence_2.includes("To be", 1)); // false
            console.log(sentence_2.includes("TO BE")); // false
            console.log(sentence_2.includes("")); // true

        }

        // String.prototype.indexOf()
        const indexOf = () => {

            // 1 ✙ 

                const paragraph = "I think Ruth's dog is cuter than your dog!";
                const searchTerm = 'dog';
                const indexOfFirst = paragraph.indexOf(searchTerm);
                console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`); // The index of the first "dog" is 15
                console.log(
                    `The index of the second "${searchTerm}" is ${paragraph.indexOf(
                        searchTerm,
                        indexOfFirst + 1,
                    )}`,
                ); // The index of the second "dog" is 38

            // 2 ✙    

                console.log("hello world".indexOf("")); // 0
                console.log("hello world".indexOf("", 0)); // 0
                console.log("hello world".indexOf("", 3)); // 3
                console.log("hello world".indexOf("", 8)); // 8
                console.log("hello world".indexOf("", 11)); // 11
                console.log("hello world".indexOf("", 13)); // 11
                console.log("hello world".indexOf("", 22)); // 11
                console.log("hello world".indexOf("hello")); // 0
                console.log("hello world".indexOf("Hello")); // -1
                console.log("hello world".indexOf(" ")); // 5
                console.log("hello world hello".indexOf("hello")); // 0

            // 3 ✙ 

                const sentence_3 = "To be, or not to be, that is the question.";
                let count_3 = 0;
                let position_3 = str.indexOf("e");
                while (position_3 !== -1) {
                    count_3++;
                    position_3 = sentence_3.indexOf("e", position_3 + 1);
                }
                console.log(count_3); // 4

        }

        // String.prototype.isWellFormed()
        const isWellFormed = () => {

            // 1 ✙ 

                const strings_1 = [
                    // Lone leading surrogate
                    "ab\uD800",
                    "ab\uD800c",
                    // Lone trailing surrogate
                    "\uDFFFab",
                    "c\uDFFFab",
                    // Well-formed
                    "abc",
                    "ab\uD83D\uDE04c",
                ];
              
                for (const str of strings_1) {
                    console.log(str.isWellFormed());
                }
                /*
                    false
                    false
                    false
                    false
                    true
                    true
                */

            // 2 ✙ avoiding errors in encodeURI()

                const illFormed_2 = "https://example.com/search?q=\uD800";

                try {
                    encodeURI(illFormed_2);
                } catch (e) {
                    console.log(e); // URIError: URI malformed
                }
            
                if (illFormed_2.isWellFormed()) {
                    console.log(encodeURI(illFormed_2));
                } else {
                    console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
                }

        }

        // String.prototype.lastIndexOf()
        const lastIndexOf = () => {

            const str_1 = "Brave, Brave New World";
            console.log(str_1.indexOf("Brave")); // 0
            console.log(str_1.lastIndexOf("Brave")); // 7
            console.log(str_1.indexOf("brave")); // -1
            console.log(str_1.lastIndexOf("brave")); // -1

        }

        // String.prototype.localeCompare()
        const localeCompare = () => {

            // 1 ✙ 

                const str_1a = 'réservé'; // With accents, lowercase
                const str_1b = 'RESERVE'; // No accents, uppercase

                console.log(str_1a.localeCompare(str_1b)); // 1
                console.log(str_1a.localeCompare(str_1b, 'en', { sensitivity: 'base' })); // 0

            // 2 ✙  sort an array

                const items_2 = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
                console.log(items_2.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }))); // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

            // 3 ✙  check browser support for extended arguments

                function localeCompareSupportsLocales() {
                    try {
                        "foo".localeCompare("bar", "i");
                    } catch (e) {
                        return e.name === "RangeError";
                    }
                    return false;
                }
                console.log(localeCompareSupportsLocales()); // true

            // 4 ✙ using options

                // in German, ä has a as the base letter
                console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

                // in Swedish, ä and a are separate base letters
                console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // 1 (a positive value)

            // 5 ✙  numeric osrting

                // by default, "2" > "10"
                console.log("2".localeCompare("10")); // 1

                // numeric using options
                console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

                // numeric using locales tag
                console.log("2".localeCompare("10", "en-u-kn-true")); // -1

        }

        // String.prototype.match()
        const match = () => {

            // 1 ✙

                console.log("123".match("1.3")); // [ '123', index: 0, input: '123', groups: undefined ]
                console.log("123".match("1\\.3")); // null

                const str_1 = "For more information, see Chapter 3.4.5.1";
                const re_1 = /see (chapter \d+(\.\d)*)/i;
                const found_1 = str_1.match(re_1);

                console.log(found_1);
                /*
                    [
                        'see Chapter 3.4.5.1',
                        'Chapter 3.4.5.1',
                        '.1',
                        index: 22,
                        input: 'For more information, see Chapter 3.4.5.1',
                        groups: undefined
                    ]
                */

            // 2 ✙ using global and ignoreCase flags with match()

                const str_2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                const regexp_2 = /[A-E]/gi;
                const matches_2 = str_2.match(regexp_2);
                console.log(matches_2); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

            // 3 ✙ using named capturing groups

                const paragraph_3 = "The quick brown fox jumps over the lazy dog. It barked.";
                const capturingRegex_3 = /(?<animal>fox|cat) jumps over/;
                const found_3 = paragraph_3.match(capturingRegex_3);
                console.log(found_3.groups); // [Object: null prototype] { animal: 'fox' }

            // 4 ✙ using match() with no parameter

                const str_4 = "Nothing will come of nothing.";
                console.log(str_4.match()); 
                /*
                    [
                        '',
                        index: 0,
                        input: 'Nothing will come of nothing.',
                        groups: undefined
                    ]
                */
            
            // 5 ✙ using match() with a non-RegExp implementing [Symbol.match]()

                const str_5 = "Hmm, this is interesting.";
                console.log(str_5.match({
                    [Symbol.match](str) {
                        return ["Yes, it's interesting."];
                    },
                })); // [ "Yes, it's interesting." ]

            // 6 ✙ a non-RegExp as the parameter

                const str_6a = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
                const str_6b = "My grandfather is 65 years old and My grandmother is 63 years old.";
                const str_6c = "The contract was declared null and void.";
                console.log(str_6a.match("number")); 
                /*
                    [
                        'number',
                        index: 16,
                        input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',       
                        groups: undefined
                    ]
                */
                console.log(str_6a.match(NaN)); 
                /*
                    [
                        'NaN',
                        index: 0,
                        input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',       
                        groups: undefined
                    ]
                */
                console.log(str_6a.match(Infinity)); 
                /*
                    [
                        'Infinity',
                        index: 24,
                        input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',       
                        groups: undefined
                    ]
                */
                console.log(str_6a.match(+Infinity)); 
                /*
                    [
                        'Infinity',
                        index: 24,
                        input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',       
                        groups: undefined
                    ]
                */
                console.log(str_6a.match(-Infinity)); 
                /*
                    [
                        '-Infinity',
                        index: 42,
                        input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',       
                        groups: undefined
                    ]
                */
                console.log(str_6b.match(65)); 
                /*
                    [
                        '65',
                        index: 18,
                        input: 'My grandfather is 65 years old and My grandmother is 63 years old.',
                        groups: undefined
                    ]
                */
                console.log(str_6b.match(+65)); 
                /*
                    [
                        '65',
                        index: 18,
                        input: 'My grandfather is 65 years old and My grandmother is 63 years old.',
                        groups: undefined
                    ]      
                */          
                console.log(str_6c.match(null)); 
                /*
                    [
                        'null',
                        index: 26,
                        input: 'The contract was declared null and void.',
                        groups: undefined
                    ]
                */
                    


        }

        // String.prototype.matchAll()
        const matchAll = () => {

            // 1 ✙ vs Regexp.prototype.exec 

                // exec
                const regexp_1a = /foo[a-z]*/g;
                const str_1a = "table football, foosball";
                let match_1a;
                
                while ((match_1a = regexp_1a.exec(str_1a)) !== null) {
                    console.log(
                        `Found ${match_1a[0]} start=${match_1a.index} end=${regexp_1a.lastIndex}.`,
                    );
                }
                /*
                    Found football start=6 end=14.
                    Found foosball start=16 end=24.
                */

                // matchAll
                const regexp_1b = /foo[a-z]*/g;
                const str_1b = "table football, foosball";
                const matches_1b = str_1b.matchAll(regexp_1b);

                for (const match of matches_1b) {
                    console.log(
                        `Found ${match[0]} start=${match.index} end=${
                            match.index + match[0].length
                        }.`,
                    );
                }
                /*
                    Found football start=6 end=14.
                    Found foosball start=16 end=24.
                */
                console.log(Array.from(str_1b.matchAll(regexp_1b), (m) => m[0])); // [ 'football', 'foosball' ]
        
            // 2 ✙ 'g' flag is missing -> TypeError
            
                const regexp_2 = /[a-c]/;
                const str_2 = "abc";
                // console.log(str_2.matchAll(regexp_2)); // TypeError: String.prototype.matchAll called with a non-global RegExp argument
        
            // 3 ✙ lastIndex does not change as the string is scanned

                const regexp_3 = /[a-c]/g;
                regexp_3.lastIndex = 1;
                const str_3 = "abc";
                console.log(Array.from(str_3.matchAll(regexp_3), (m) => `${regexp_3.lastIndex} ${m[0]}`)); // [ '1 b', '1 c' ]

            // 4 ✙ capturing groups (vs match())

                const regexp_4 = /t(e)(st(\d?))/g;
                const str_4 = "test1test2";

                console.log(str_4.match(regexp_4)); // [ 'test1', 'test2' ]
                const array_4 = [...str_4.matchAll(regexp_4)];

                console.log(array_4[0]);
                /*
                    [
                        'test1',
                        'e',
                        'st1',
                        '1',
                        index: 0,
                        input: 'test1test2',
                        groups: undefined
                    ]
                */
                console.log(array_4[1]);
                /*
                    [
                        'test2',
                        'e',
                        'st2',
                        '2',
                        index: 5,
                        input: 'test1test2',
                        groups: undefined
                    ]
                */

            // 5 ✙ using matchAll() with a non-RegExp implementing [Symbol.matchAll]()

                const str_5 = "Hmm, this is interesting.";

                console.log(str_5.matchAll({
                    [Symbol.matchAll](str) {
                        return [["Yes, it's interesting."]];
                    },
                })); // [ [ "Yes, it's interesting." ] ]

        }

        // String.prototype.normalize()
        const normalize = () => {

            // 1 ✙ Canonical equivalence normalization

                let string_1a = "\u00F1"; 
                let string_1b = "\u006E\u0303";
                
                string_1a = string_1a.normalize("NFD");
                string_1b = string_1b.normalize("NFD");
                
                console.log(string_1a === string_1b); // true
                console.log(string_1a); // ñ
                console.log(string_1b); // ñ
                console.log(string_1a.length); // 2
                console.log(string_1b.length); // 2
            
            // 2 ✙ Composed and decomposed forms

                let string_2a = "\u00F1"; 
                let string_2b = "\u006E\u0303"; 

                string_2a = string_2a.normalize("NFC");
                string_2b = string_2b.normalize("NFC");

                console.log(string_2a === string_2b); // true
                console.log(string_2a.length); // 1
                console.log(string_2b.length); // 1
                console.log(string_2b.codePointAt(0).toString(16)); // f1

            // 3 ✙ Compatibility normalization

                let string_3a = "\uFB00";
                let string_3b = "\u0066\u0066";
                
                console.log(string_3a); // ﬀ
                console.log(string_3b); // ff
                console.log(string_3a === string_3b); // false
                console.log(string_3a.length); // 1
                console.log(string_3b.length); // 2
                
                string_3a = string_3a.normalize("NFKD");
                string_3b = string_3b.normalize("NFKD");
                
                console.log(string_3a); // ff <- visual appearance changed
                console.log(string_3b); // ff
                console.log(string_3a === string_3b); // true
                console.log(string_3a.length); // 2
                console.log(string_3b.length); // 2
        }

        // String.prototype.padEnd()
        const padEnd = () => {

            console.log("abc".padEnd(10)); // "abc       "
            console.log("abc".padEnd(10, "foo")); // "abcfoofoof"
            console.log("abc".padEnd(6, "123456")); // "abc123"
            console.log("abc".padEnd(1)); // "abc"
        }

        // String.prototype.padStart()
        const padStart = () => {

            // 1 ✙

                console.log("abc".padStart(10)); // "       abc"
                console.log("abc".padStart(10, "foo")); // "foofoofabc"
                console.log("abc".padStart(6, "123465")); // "123abc"
                console.log("abc".padStart(8, "0")); // "00000abc"
                console.log("abc".padStart(1)); // "abc"

            // 2 ✙ Fixed width string number conversion

                function leftFillNum(num, targetLength) {
                    return num.toString().padStart(targetLength, "0");
                }

                const num = 123;
                console.log(leftFillNum(num, 5)); // "00123"
                        
        }

        // String.prototype.repeat()
        const repeat = () => {

            // console.log("abc".repeat(-1)); // RangeError: Invalid count value: -1
            console.log("abc".repeat(0)); // ''
            console.log("abc".repeat(1)); // 'abc'
            console.log("abc".repeat(2)); // 'abcabc'
            console.log("abc".repeat(3.5)); // 'abcabcabc' (count will be converted to integer)
            // console.log("abc".repeat(1 / 0)); // RangeError: Invalid count value: Infinity

            console.log(({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2)); // abcabc

        }

        // String.prototype.replace()
        const replace = () => {

            // 1 ✙

                console.log("xxx".replace("", "_")); // "_xxx"
                console.log("foo".replace(/(f)/, "$2")); // "$2oo"; the regex doesn't have the second group
                console.log("foo".replace("f", "$1")); // "$1oo"; the pattern is a string, so it doesn't have any groups
                console.log("foo".replace(/(f)|(g)/, "$2")); // "oo"; the second group exists but isn't matched

            // 2 ✙ function as the replacement

                function replacer_2(match, p1, p2, p3, offset, string) {
                    return [p1, p2, p3].join(" - "); //  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
                }
                const newString_2 = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer_2);
                console.log(newString_2); // abc - 12345 - #$*%
                        

            // 3 ✙ defining the regular expression in replace()

                const str_3 = "Twas the night before Xmas...";
                const newstr_3 = str_3.replace(/xmas/i, "Christmas");
                console.log(newstr_3); // Twas the night before Christmas.

            // 4 ✙ using the global and ignoreCase flags with replace()

                const re_4= /apples/gi;
                const str_4 = "Apples are round, and apples are juicy.";
                const newstr_4 = str_4.replace(re_4, "oranges");
                console.log(newstr_4); // oranges are round, and oranges are juicy.

            // 5 ✙ switching words in a string

                const re_5 = /(\w+)\s(\w+)/;
                const str_5 = "Maria Cruz";
                const newstr_5 = str_5.replace(re_5, "$2, $1");
                console.log(newstr_5); // Cruz, Maria

            // 6 ✙ making a generic replacer

                function addOffset_6(match, ...args) {
                    const hasNamedGroups_6 = typeof args.at(-1) === "object";
                    const offset_6 = hasNamedGroups_6 ? args.at(-3) : args.at(-2);
                    return `${match} (${offset_6}) `;
                }
                
                console.log("abcd".replace(/(bc)/, addOffset_6)); // "abc (1) d"
                console.log("abcd".replace(/(?<group>bc)/, addOffset_6)); // "abc (1) d"

        }   

        // String.prototype.replaceAll()
        const replaceAll = () => {

            // 1 ✙

                console.log("aabbcc".replaceAll("b", ".")); // aa..cc
                console.log("xxx".replaceAll("", "_")); // _x_x_x_
                console.log("xxx".replace("", "_")); // _xxx

            // 2 ✙

                function unsafeRedactName_2(text, name) {
                    return text.replace(new RegExp(name, "g"), "[REDACTED]");
                }
                function safeRedactName_2(text, name) {
                    return text.replaceAll(name, "[REDACTED]");
                }
                
                const report2 = "A hacker called ha.*er used special characters in their name to breach the system.";
                
                console.log(unsafeRedactName_2(report2, "ha.*er")); // A [REDACTED]s in their name to breach the system.
                console.log(safeRedactName_2(report2, "ha.*er")); // A hacker called [REDACTED] used special characters in their name to breach the system.

        }

        // String.prototype.search()
        const search = () => {

            const str = "hey JudE";
            const re = /[A-Z]/;
            const reDot = /[.]/;
            console.log(str.search(re)); // 4
            console.log(str.search(reDot)); // -1
        
        }

        // String.prototype.slice()
        const slice = () => {

            const str = 'The quick brown fox jumps over the lazy dog.';
            console.log(str.slice(31)); // the lazy dog.
            console.log(str.slice(4, 19)); // quick brown fox
            console.log(str.slice(-4)); // dog.
            console.log(str.slice(-9, -5)); // lazy

        }

        // String.prototype.split()
        const split = () => {

            // 1 ✙

                console.log("😄😄".split(/(?:)/)); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
                console.log("😄😄".split(/(?:)/u)); // [ "😄", "😄" ]

                const emptyString_1 = "";
                console.log(emptyString_1.split("a")); // [ '' ]
                console.log(emptyString_1.split(emptyString_1)); // []

            // 2 ✙ splits a string into an array of strings

                function splitString_2(stringToSplit, separator) {
                    const arrayOfStrings_2 = stringToSplit.split(separator);

                    console.log("The original string is:", stringToSplit); 
                    console.log("The separator is:", separator); 
                    console.log(
                        "The array has",
                        arrayOfStrings_2.length,
                        "elements:",
                        arrayOfStrings_2.join(" / "),
                    ); // The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it. 
                }
              
                const tempestString_2 = "Oh brave new world that has such people in it.";
                const monthString_2 = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
                
                const space_2 = " ";
                const comma_2 = ",";
                
                splitString_2(tempestString_2, space_2);
                /*
                    The original string is: Oh brave new world that has such people in it.
                    The separator is:
                    The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.
                */
                splitString_2(tempestString_2);
                /*
                    The original string is: Oh brave new world that has such people in it.
                    The separator is: undefined
                    The array has 1 elements: Oh brave new world that has such people in it.
                */                
                splitString_2(monthString_2, comma_2);
                /*
                    The original string is: Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
                    The separator is: ,
                    The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
                */                  

            // 3 ✙ removing spaces from a string

                const names_3 = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
                console.log(names_3); // Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand

                const re_3 = /\s*(?:;|$)\s*/;
                const nameList_3 = names_3.split(re_3);
                console.log(nameList_3);
                /*
                    [
                        'Harry Trump',
                        'Fred Barney',
                        'Helen Rigby',
                        'Bill Abel',
                        'Chris Hand',
                        ''
                    ]
                */

            // 4 ✙ returing a limited number of splits

                const myString_4 = "Hello World. How are you doing?";
                const splits_4 = myString_4.split(" ", 3);
                console.log(splits_4); // [ 'Hello', 'World.', 'How' ]

            // 5 ✙ splitting with a RegExp to include parts of the separator in the result

                const myString_5 = "Hello 1 word. Sentence number 2.";
                const splits_5 = myString_5.split(/(\d)/);
                console.log(splits_5); // [ 'Hello ', '1', ' word. Sentence number ', '2', '.' ]

        }

        // String.prototype.startsWith()
        const startsWith = () => {

            const str = "To be, or not to be, that is the question.";
            console.log(str.startsWith("To be")); // true
            console.log(str.startsWith("  To be")); // false
            console.log(str.startsWith("to be")); // false
            console.log(str.startsWith("not to be")); // false
            console.log(str.startsWith("not to be", 10)); // true

        }

        // String.prototype.substring()
        const substring = () => {

            // 1 ✙

                const str_1 = "Mozilla";
                console.log(str_1.substring(0, 1)); // M
                console.log(str_1.substring(1, 0)); // M
                console.log(str_1.substring(0, 6)); // Mozill
                console.log(str_1.substring(4)); // lla
                console.log(str_1.substring(4, 7)); // lla
                console.log(str_1.substring(7, 4)); // lla
                console.log(str_1.substring(0, 7)); // Mozilla
                console.log(str_1.substring(0, 10)); // Mozilla

            // 2 ✙ replacing a substring within a string

                function replaceString(oldS, newS, fullS) {
                    return fullS.split(oldS).join(newS);
                }
                console.log(replaceString("World", "Web", "Brave New World")); // Brave New Web

        }

        // String.prototype.toLocaleLowerCase()
        const toLocaleLowerCase = () => {

            console.log("ALPHABET".toLocaleLowerCase()); // alphabet
            console.log("\u0130".toLocaleLowerCase("tr") === "i"); // true
            console.log("\u0130".toLocaleLowerCase("en-US") === "i"); // false
            const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
            console.log("\u0130".toLocaleLowerCase(locales) === "i"); // true
        }

        // String.prototype.toLocaleUpperCase()
        const toLocaleUpperCase = () => {

            console.log("alphabet".toLocaleUpperCase()); // ALPHABET
            console.log("Gesäß".toLocaleUpperCase()); // GESÄSS
            console.log("i\u0307".toLocaleUpperCase("lt-LT")); // I
            const locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
            console.log("i\u0307".toLocaleUpperCase(locales)); // I

        }

        // String.prototype.toLowerCase()
        const toLowerCase = () => {

            console.log("ALPHABET".toLowerCase()); // alphabet

        }

        // String.prototype.toString()
        const toString = () => {

            const x = new String("Hello world");
            console.log(x.toString()); // Hello world

        }

        // String.prototype.toUpperCase()
        const toUpperCase = () => {

            // 1 ✙

                console.log("alphabet".toUpperCase()); // ALPHABET

            // 2 ✙ conversion of non-string this values to strings

                const a_2 = String.prototype.toUpperCase.call({
                    toString() {
                        return "abcdef";
                    },
                });

                const b_2 = String.prototype.toUpperCase.call(true);
                console.log(a_2, b_2); // ABCDEF TRUE

        }

        // String.prototype.toWellFormed()
        const toWellFormed = () => {

            // 1 ✙

                const strings_1 = [
                    // Lone leading surrogate
                    "ab\uD800",
                    "ab\uD800c",
                    // Lone trailing surrogate
                    "\uDFFFab",
                    "c\uDFFFab",
                    // Well-formed
                    "abc",
                    "ab\uD83D\uDE04c",
                ];

                for (const str of strings_1) {
                    console.log(str.toWellFormed());
                }

            // 2 ✙ avoiding errors in encodeURI()

                const illFormed_2 = "https://example.com/search?q=\uD800";

                try {
                    encodeURI(illFormed_2);
                } catch (e) {
                    console.log(e); // URIError: URI malformed
                }

                console.log(encodeURI(illFormed_2.toWellFormed())); // https://example.com/search?q=%EF%BF%BD
        
        }

        // String.prototype.trim()
        const trim = () => {

            const str = "   foo  ";
            console.log(str.trim()); // foo

        }

        // String.prototype.trimEnd()
        const trimEnd = () => {

            let str = "   foo  ";
            console.log(str.length); // 8
            str = str.trimEnd();
            console.log(str.length); // 6
            console.log(str); // '   foo'

        }

        // String.prototype.trimStart()
        const trimStart = () => {

            let str = "   foo  ";
            console.log(str.length); // 8
            str = str.trimStart();
            console.log(str.length); // 5
            console.log(str); // 'foo  '

        }

        // String.prototype.valueOf()
        const valueOf = () => {

            const x = new String("Hello world");
            console.log(x.valueOf()); // Hello world

        }

        // String.prototype[Symbol.iterator]()
        const symbolIterator = () => {

            // 1 ✙

                const str_1 = "The quick red fox jumped over the lazy dog's back.";
                const iterator_1 = str_1[Symbol.iterator]();
                let theChar_1 = iterator_1.next();

                while (!theChar_1.done && theChar_1.value !== ' ') {
                    console.log(theChar_1.value);
                    theChar_1 = iterator_1.next();
                }
                /*
                    T
                    h
                    e
                */
            
            // 2 ✙ manually hand-rolling the iterator

                const str_2 = "A\uD835\uDC68";
                const strIter_2 = str_2[Symbol.iterator]();
                console.log(strIter_2.next().value); // A
                console.log(strIter_2.next().value); // 𝑨

        }

        // at();
        // charAt();
        // charCodeAt();
        // codePointAt();
        // concat();
        // endsWith();
        // includes();
        // indexOf();
        // isWellFormed();
        // lastIndexOf();
        // localeCompare();
        // match();
        // matchAll();
        // normalize();
        // padEnd();
        // padStart();
        // repeat();
        // replace();
        // replaceAll();
        // search();
        // slice();
        // split();
        // startsWith();
        // substring();
        // toLocaleLowerCase();
        // toLocaleUpperCase();
        // toLowerCase();
        // toString();
        // toUpperCase();
        // toWellFormed();
        // trim();
        // trimEnd();
        // trimStart();
        // valueOf();
        // symbolIterator();

    }

    // primitive();
    // charAccess();
    // stringCompare();
    // stringCoercion();
    // charsUTF16();
    // constructor();
    // staticMethods();
    // instanceProperties();
    // instanceMethods();

}