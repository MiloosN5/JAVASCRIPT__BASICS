export const regexp = () => {
    
    const examples = () => {

        // /.../ (Open & close)

        console.log(/aaa/.test('aaa')) // true
        console.log(/aaa/.test('aa')) // false
        console.log(/aaa/.test('Beaaautiful')) // true (three consecutive 'a')
        console.log(/aaa/.test('Beautiful womaan')) // false (there are at least three 'a's, but to match the pattern, they must be consecutive)
        
        console.log(/aaa/g.test('aaa')) // true
        console.log(/aaa/g.test('aa')) // false
        console.log(/aaa/g.test('Beaaautiful')) // true (three consecutive 'a')
        console.log(/aaa/g.test('Beautiful womaan')) // false (there are at least three 'a's, but to match the pattern, they must be consecutive)

        const flags = () => {

            // g (global search)

                // without
                console.log("banana".match(/a/)) // [ 'a', index: 1, input: 'banana', groups: undefined ] 
                
                // with
                console.log("banana".match(/a/g)) // [ 'a', 'a', 'a' ] 
        
            // i (case-insensitive search)

                // without 
                console.log(/applause/.test("Applause")) // false
                console.log(/applause/.test("applause")) // true

                // with
                console.log(/applause/i.test("Applause")) // true
                console.log(/applause/i.test("applause")) // true

            // m (multiline)

                // without
                console.log(`
                    Never have I ever ...
                    I swear I never ...
                    Never ...
                `.replace(/^\s+/gm, "").match(/^Never/g)
                ) // [ 'Never' ]

                // with
                console.log(`
                    Never have I ever ...
                    I swear I never ...
                    Never ...
                `.replace(/^\s+/gm, "").match(/^Never/gm)
                ) // [ 'Never', 'Never' ]

            // u (unicode)

                // without
                console.log(/\u{1F92A}/.test("In this string there is an 🤪 emoji")) // false
                console.log(/\u{1F92A}/.test("In this string there is an 😜 emoji")) // false

                // with
                console.log(/\u{1F92A}/u.test("In this string there is an 🤪 emoji")) // true
                console.log(/\u{1F92A}/u.test("In this string there is an 😜 emoji")) // false
        
             // y (sticky)

                const regex_sticky = /cat/y;
                regex_sticky.lastIndex = 3; // Start of the search
                console.log(regex_sticky.test("concatenate")); // true (at position index=3, it starts with "cat")
                console.log(regex_sticky.lastIndex); // 6
                console.log(regex_sticky.test("concatenate")); // false (at position index=6, it starts with "ena")
                console.log(regex_sticky.lastIndex); // 0

            // s (dotall)

                // without
                console.log(/a.b/.test("a\nb")) // false

                // with
                console.log(/a.b/s.test("a\nb")) // true

        }

        const quantifiersAndAlternation = () => {

            // + (plus)

                // +
                console.log(/a+/.test("a")) // true
                console.log(/a+/.test("aa")) // true
                console.log(/a+/.test("aaa")) // true
                console.log(/a+/.test("b")) // false
                console.log(/a+/.test("ba")) // true
                console.log(/a+/.test("aba")) // true
                console.log(/a+/.test("bababbaa")) // true
                console.log(/a+/.test("abbb")) // true
                console.log(/ever+/.test("Never")) // true
                console.log(/ever+/.test("NEver")) // false
                console.log(/ever+/.test("NEver have I ever")) // true
                console.log(/ever+/.test("NEver have I ever ever")) // true
                console.log(/ever+/.test("eve")) // false
                console.log(/ever+/.test("evere")) // true

                // vs regular
                console.log(/a/.test("a")) // true
                console.log(/a/.test("aa")) // true
                console.log(/a/.test("aaa")) // true
                console.log(/a/.test("b")) // false
                console.log(/a/.test("ba")) // true
                console.log(/a/.test("aba")) // true
                console.log(/a/.test("bababbaa")) // true
                console.log(/a/.test("abbb")) // true
                console.log(/ever/.test("Never")) // true
                console.log(/ever/.test("NEver")) // false
                console.log(/ever/.test("NEver have I ever")) // true
                console.log(/ever/.test("NEver have I ever ever")) // true
                console.log(/ever/.test("eve")) // false
                console.log(/ever/.test("evere")) // true

            // * (star)

                // +
                console.log(/a+/.test("")); // false
                console.log(/a+/.test("a")); // true
                console.log(/a+/.test("aa")); // true
                console.log(/a+/.test("aaa")); // true 
                console.log(/a+/.test("b")); // false

                // vs *
                console.log(/a*/.test("")); // true 
                console.log(/a*/.test("a")); // true 
                console.log(/a*/.test("aa")); // true 
                console.log(/a*/.test("aaa")); // true 
                console.log(/a*/.test("b")); // true 
            
            // {n, m}

                console.log(/a{2,4}/.test("a")) // false
                console.log(/a{2,4}/.test("aa")) // true
                console.log(/a{2,4}/.test("aaa")) // true
                console.log(/a{2,4}/.test("aaaa")) // true
                console.log(/a{2,4}/.test("aaaaa")) // true (because of substrings)
                console.log(/a{2,4}/.test("bbbbabaaa")) // true
                console.log(/a{2,4}/.test("ababababa")) // false

                console.log(/ab{2,4}/.test("aab")) // false
                console.log(/ab{2,4}/.test("abb")) // true (quantifier is only applied to the 'b')
                console.log(/ab{2,4}/.test("aabb")) // true
                console.log(/ab{2,4}/.test("aaaaaaabb")) // true
                console.log(/ab{2, 4}/.test("aabb")) // false (the space character is causing the issue)
                console.log(/ab{2, 4}/.test("aaaaaaabb")) // false (the space character is causing the issue)

            // ? (optional)

                console.log(/colou?r/.test("colo")) // false
                console.log(/colou?r/.test("color")) // true
                console.log(/colou?r/.test("colour")) // true
                console.log(/colou?r/.test("colr")) // false (only 'u' is optional)
        
            // ? (lazy)

                // greedy
                console.log(/b\w+/.test("abracadabra")) // true
                console.log("abracadabra".match(/b\w+/)) // [ 'bracadabra', index: 1, input: 'abracadabra', groups: undefined ]
                
                // lazy
                console.log(/b\w+?/.test("abracadabra")) // true
                console.log("abracadabra".match(/b\w+?/)) // [ 'br', index: 1, input: 'abracadabra', groups: undefined ]

            // | (alternation)

                console.log(/cat|dog/.test("cat")) // true
                console.log(/cat|dog/.test("dog")) // true
                console.log(/cat|dog/.test("fish")) // false
                console.log(/cat|dog|fish/.test("fish")) // true
                console.log(/cat|dog|Fish/.test("fish")) // false
                console.log(/cat|dog|ish/.test("fish")) // true

        }

        const lookaround = () => {

            // (?=ABC) - positive lookahead

                console.log(/b\w+(?=JACK)/g.test("brJACK")) // true
                console.log(/b\w+(?=JACK)/g.test("brJaCK")) // false
                console.log(/b\w+(?=JACK)/g.test("braaJACK")) // true
                console.log(/b\w+(?=JACK)/g.test("braaJAC")) // false
                console.log(/b\w+(?=JACK)/g.test("brJACKmraa")) // true

                console.log("brJACK".match(/b\w+(?=JACK)/g)) // [ 'br' ]
                console.log("brJaCK".match(/b\w+(?=JACK)/g)) // null
                console.log("braaJACK".match(/b\w+(?=JACK)/g)) // [ 'braa' ]
                console.log("braaJAC".match(/b\w+(?=JACK)/g)) // null
                console.log("brJACKmraa".match(/b\w+(?=JACK)/g)) // [ 'br' ]

            // (?!ABC) - negative lookahead

                // sa \w+
                console.log(/b\w+(?!JACK)/g.test("brJACK")) // true
                console.log(/b\w+(?!JACK)/g.test("brJaCK")) // true
                console.log(/b\w+(?!JACK)/g.test("braaJACK")) // true
                console.log(/b\w+(?!JACK)/g.test("braaJAC")) // true
                console.log(/b\w+(?!JACK)/g.test("brJACKmraa")) // true

                console.log("brJACK".match(/b\w+(?!JACK)/g)) // [ 'brJACK' ]
                console.log("brJaCK".match(/b\w+(?!JACK)/g)) // [ 'brJaCK' ]
                console.log("braaJACK".match(/b\w+(?!JACK)/g)) // [ 'braaJACK' ]
                console.log("braaJAC".match(/b\w+(?!JACK)/g)) // [ 'braaJAC' ]
                console.log("brJACKmraa".match(/b\w+(?!JACK)/g)) // [ 'brJACKmraa' ]

                // sa \w
                console.log(/b\w(?!JACK)/g.test("brJACK")) // false
                console.log(/b\w(?!JACK)/g.test("brJaCK")) // true
                console.log(/b\w(?!JACK)/g.test("braaJACK")) // true
                console.log(/b\w(?!JACK)/g.test("braaJAC")) // true
                console.log(/b\w(?!JACK)/g.test("brJACKmraa")) // false

                console.log("brJACK".match(/b\w(?!JACK)/g)) // null
                console.log("brJaCK".match(/b\w(?!JACK)/g)) // [ 'br' ]
                console.log("braaJACK".match(/b\w(?!JACK)/g)) // [ 'br' ]
                console.log("braaJAC".match(/b\w(?!JACK)/g)) // [ 'br' ]
                console.log("brJACKmraa".match(/b\w(?!JACK)/g)) // null

            // (?<=ABC) - positive lookbehind
            
                console.log("JACKab".match(/(?<=JACK)\w\w/g)) // [ 'ab' ]
                console.log("jACKab".match(/(?<=JACK)\w\w/g)) // null
                console.log("JAcKab".match(/(?<=JACK)\w\w/g)) // null
                console.log("aJACKk".match(/(?<=JACK)\w\w/g)) // null

                console.log(/(?<=JACK)\w\w/g.test("JACKab")) // true
                console.log(/(?<=JACK)\w\w/g.test("jACKab")) // false
                console.log(/(?<=JACK)\w\w/g.test("JAcKab")) // false
                console.log(/(?<=JACK)\w\w/g.test("aJACKk")) // false

            // (?<!ABC) - negative lookbehind

                console.log("JACKab".match(/(?<!JACK)ab/g)); // null
                console.log("jACKab".match(/(?<!JACK)ab/g)); // [ 'ab' ] 
                console.log("JAcKab".match(/(?<!JACK)ab/g)); // [ 'ab' ] 
                console.log("AJACKab".match(/(?<!JACK)ab/g)); // null
                console.log("JACKsab".match(/(?<!JACK)ab/g)); // [ 'ab' ] 

                console.log(/(?<!JACK)ab/g.test("JACKab")); // false
                console.log(/(?<!JACK)ab/g.test("jACKab")); // true 
                console.log(/(?<!JACK)ab/g.test("JAcKab")); // true 
                console.log(/(?<!JACK)ab/g.test("AJACKab")); // false 
                console.log(/(?<!JACK)ab/g.test("JACKsab")); // true

        }

        const escapedChars = () => {

            // \+ (reserved characters)

                console.log("a+b+c".match(/\+/)) // [ '+', index: 1, input: 'a+b+c', groups: undefined ]
                console.log("a+b+c".match(/\+/g)) // [ '+', '+' ]

            // \000 (octal escape)

                console.log("\0tes\0t\0".match(/\000/g)) // [ '\x00', '\x00', '\x00' ]
                
            // \xFF (hexadecimal escape)

                console.log("ABCA".match(/\x41/g)) // [ 'A', 'A' ]

            // \uFFFF (unicode escape)

                console.log("❤️".match(/\u2764/)) // [ '❤', index: 0, input: '❤️', groups: undefined ]

            // \u{FFFF} (extended unicode escape)

                console.log("💗".match(/\u{1F497}/u)) // [ '💗', index: 0, input: '💗', groups: undefined ]

            // \cI (control character escape)

                console.log('\ttext'.match(/\cI/)) // [ '\t', index: 0, input: '\ttext', groups: undefined ]
                console.log('\ttext'.match(/\t/))  // [ '\t', index: 0, input: '\ttext', groups: undefined ]

            // \t (tab)

                console.log("Hello\tWorld".match(/\t/)) // [ '\t', index: 5, input: 'Hello\tWorld', groups: undefined ]
                console.log("Hello\tWorld".match(/\cI/)) // [ '\t', index: 5, input: 'Hello\tWorld', groups: undefined ]

            // \n (line feed)

                console.log("Line1\nLine2".match(/\n/)) // [ '\n', index: 5, input: 'Line1\nLine2', groups: undefined ]

            // \v (vertical tab)

                console.log("Hello\vWorld".match(/\v/)) // [ '\x0B', index: 5, input: 'Hello\x0BWorld', groups: undefined ]

            // \f (form feed)

                console.log("Hello\fWorld".match(/\f/)) // [ '\f', index: 5, input: 'Hello\fWorld', groups: undefined ]

            // \r (carriage return)

                console.log("Line1\rLine2".match(/\r/)) // [ '\r', index: 5, input: 'Line1\rLine2', groups: undefined ]

            // \0 (null)

                console.log("\0abc".match(/\0/)) // [ '\x00', index: 0, input: '\x00abc', groups: undefined ]

        }

        const anchors = () => {

            // ^ (beginning/caret)

                console.log("Hello Reader".match(/^Hello/)) // [ 'Hello', index: 0, input: 'Hello Reader', groups: undefined ]
                console.log("hello Reader".match(/^Hello/)) // null

                console.log("Hello Reader\nHello there".match(/^Hello/gm)) // [ 'Hello', 'Hello' ]
                console.log("hello Reader\nHello there".match(/^Hello/gm)) // [ 'Hello' ]

            // $ (end)

                console.log("Goodbye Reader".match(/Reader$/)) // [ 'Hello', index: 0, input: 'Hello Reader', groups: undefined ]
                console.log("Goodbye reader".match(/Reader$/)) // null

                console.log("Goodbye Reader\nYou're the best reader".match(/Reader$/gm)) // [ 'Reader' ]
                console.log("Goodbye Reader\nYou're the best Reader".match(/Reader$/gm)) // [ 'Reader', 'Reader' ]

            // \b (word boundary)

                console.log("Hello, World".match(/\bHello\b/)) // [ 'Hello', index: 0, input: 'Hello, World', groups: undefined ]
                console.log("Hello_World".match(/\bHello\b/)) // null
                console.log("HelloWorld".match(/\bHello\b/)) // null
                console.log("Hello World".match(/\bHello\b/)) // [ 'Hello', index: 0, input: 'Hello World', groups: undefined ]
                console.log("Hello, World".match(/\bello,/)) // null

            // \B (not word boundary)

                console.log("Hello, World".match(/\Bello,/)) // [ 'ello,', index: 1, input: 'Hello, World', groups: undefined ]
                console.log("H ello, World".match(/\Bello/)) // null
                console.log("Hello, World".match(/\Bello/)) // [ 'ello', index: 1, input: 'Hello, World', groups: undefined ]
                console.log("H,ello World".match(/\Bello/)) // null

        }

        const charsClasses = () => {

            // [ABC] (character set)

                console.log("ABCDE".match(/[ABC]/g)) //  [ 'A', 'B', 'C' ]
                console.log("ABCDE".match(/[ABC]/)) //  [ 'A', index: 0, input: 'ABCDE', groups: undefined ]
                console.log("ATBCDE".match(/[ABC]/g)) //  [ 'A', 'B', 'C' ]
                console.log("ATBCDE".match(/[ABC]/)) // [ 'A', index: 0, input: 'ATBCDE', groups: undefined ]
                console.log("AbCDE".match(/[ABC]/)) //  [ 'A', index: 0, input: 'AbCDE', groups: undefined ]
                console.log("AbCDE".match(/[ABC]/g)) // [ 'A', 'C' ]
                console.log("abcDE".match(/[ABC]/)) // null
                console.log("abcDE".match(/[ABC]/g)) // null 
                console.log("ABCEABC".match(/[ABC]/)) // [ 'A', index: 0, input: 'ABCEABC', groups: undefined ]
                console.log("ABCEABC".match(/[ABC]/g)) // [ 'A', 'B', 'C', 'A', 'B', 'C' ]
                console.log("ABCEBAC".match(/[ABC]/)) // [ 'A', index: 0, input: 'ABCEBAC', groups: undefined ]
                console.log("ABCEBAC".match(/[ABC]/g)) // [ 'A', 'B', 'C', 'B', 'A', 'C' ]

            // [^ABC] (negated set)

                console.log("ABCDE129".match(/[^ABC]/)) // [ 'D', index: 3, input: 'ABCDE129', groups: undefined ]
                console.log("ABCDE129".match(/[^ABC]/g)) // [ 'D', 'E', '1', '2', '9' ]
                console.log("AbCDE129".match(/[^ABC]/)) // [ 'b', index: 1, input: 'AbCDE129', groups: undefined ]
                console.log("AbCDE129".match(/[^ABC]/g)) // [ 'b', 'D', 'E', '1', '2', '9' ]   
                console.log("BCDE129".match(/[^ABC]/)) // [ 'D', index: 2, input: 'BCDE129', groups: undefined ]
                console.log("BCDE129".match(/[^ABC]/g)) // [ 'D', 'E', '1', '2', '9' ]                             

            // [A-Z] (range)

                console.log("Butterfly".match(/[A-Z]/)) // [ 'B', index: 0, input: 'Butterfly', groups: undefined ]
                console.log("Butterfly".match(/[A-Z]/g)) // [ 'B' ]
                // console.log("Butterfly".match(/[a-Z]/)) // SyntaxError: Invalid regular expression: /[a-Z]/: Range out of order in character class  
                // console.log("Butterfly".match(/[a-Z]/g)) // SyntaxError: Invalid regular expression: /[a-Z]/: Range out of order in character class  
                console.log("Butterfly".match(/[A-z]/)) // [ 'B', index: 0, input: 'Butterfly', groups: undefined ]
                console.log("Butterfly".match(/[A-z]/g)) // [ 'B', 'u', 't', 't', 'e', 'r', 'f', 'l', 'y' ]                 
                console.log("Butterfly".match(/[a-z]/)) // [ 'u', index: 1, input: 'Butterfly', groups: undefined ]
                console.log("Butterfly".match(/[a-z]/g)) // [ 'u', 't', 't', 'e', 'r', 'f', 'l', 'y' ]     
                console.log("BUTTERFLY".match(/[A-Z]/)) // [ 'B', index: 0, input: 'BUTTERFLY', groups: undefined ]
                console.log("BUTTERFLY".match(/[A-Z]/g)) // [ 'B', 'U', 'T', 'T', 'E', 'R', 'F', 'L', 'Y' ]
                console.log("butterfly".match(/[A-Z]/)) // null
                console.log("butterfly".match(/[A-Z]/g)) // null
                console.log("butterfly".match(/[a-z]/)) // [ 'b', index: 0, input: 'butterfly', groups: undefined ]
                console.log("butterfly".match(/[a-z]/g)) // [ 'b', 'u', 't', 't', 'e', 'r', 'f', 'l', 'y' ]     
                console.log("butterfly".match(/[a-z]/)) // [ 'b', index: 0, input: 'butterfly', groups: undefined ]
                console.log("Butter fly".match(/[A-Z]/)) // [ 'B', index: 0, input: 'Butter fly', groups: undefined ]
                console.log("Butter fly".match(/[A-Z]/g)) // [ 'B' ]
                console.log("Butter fly".match(/[a-z]/)) // [ 'u', index: 1, input: 'Butter fly', groups: undefined ]
                console.log("Butter fly".match(/[a-z]/g)) // [ 'u', 't', 't', 'e', 'r', 'f', 'l', 'y' ]   
                console.log("Butter fly".match(/[A-z]/)) // [ 'B', index: 0, input: 'Butter fly', groups: undefined ]
                console.log("Butter fly".match(/[A-z]/g)) // ['B', 'u', 't', 't', 'e', 'r', 'f', 'l', 'y']

            // . (dot)

                console.log("cat\ndog".match(/./g)) // [ 'c', 'a', 't', 'd', 'o', 'g' ]
                console.log("cat\tdog".match(/./g)) // ['c', 'a', 't', '\t', 'd', 'o', 'g']
                console.log("cat\vdog".match(/./g)) // ['c', 'a', 't', '\x0B', 'd', 'o', 'g']
                console.log("cat\sdog".match(/./g)) // ['c', 'a', 't', 's', 'd', 'o', 'g']
                console.log("cat\bdog".match(/./g)) // ['c', 'a', 't', '\b', 'd', 'o', 'g']

            // [\s\S] (match any)

                console.log("cat\ndog".match(/[\s\S]/g)) // ['c', 'a', 't', '\n', 'd', 'o', 'g']

            // \w (word)

                console.log("word123 !@#".match(/\w/g)) // ['w', 'o', 'r', 'd', '1', '2', '3']
                console.log("word123 !@#".match(/\w+/g)) // [ 'word123' ]
                console.log("word123 !@#".match(/\bword\b/g)) 
                console.log("word123 !@#".match(/\bword123\b/g)) 
                console.log("word123 !5#".match(/\w/g)) // ['w', 'o', 'r', 'd', '1', '2', '3', '5']
                console.log("word123 !5#".match(/\w+/g)) // [ 'word123', '5' ]
                console.log("word123 !5#".match(/\b123!5#\b/g)) // null
                console.log("word123 !5#".match(/\b!5#\b/g)) // null
                console.log("word & another word".match(/\w/g)) // ['w', 'o', 'r', 'd', 'a', 'n', 'o', 't', 'h', 'e', 'r', 'w', 'o', 'r', 'd']
                console.log("word & another word".match(/\w+/g)) // [ 'word', 'another', 'word' ]
                console.log("word & another word".match(/\banother\b/g)) // [ 'another' ]
                console.log("word & another word".match(/\banother word\b/g)) // [ 'another word' ]

            // \W (not word)

                console.log("word123 !@#".match(/\W/g)) // [ ' ', '!', '@', '#' ]
                console.log("word123 !5#".match(/\W/g)) // [ ' ', '!', '#' ]
                console.log("word & another word".match(/\W/g)) // [ ' ', '&', ' ', ' ' ]

            // \d (digit)

                console.log("word123 !@#".match(/\d/g)) // [ '1', '2', '3' ]
                console.log("word123 !5#".match(/\d/g)) // [ '1', '2', '3', '5' ]
                console.log("word & another word".match(/\d/g)) // null
                console.log("123 word89 556 334".match(/\d+/g)) // [ '123', '89', '556', '334' ]

            // \D (not digit)

                console.log("word123 !@#".match(/\D/g)) // ['w', 'o', 'r', 'd', ' ', '!', '@', '#']
                console.log("word123 !5#".match(/\D/g)) // ['w', 'o', 'r', 'd', ' ', '!', '#']
                console.log("word & another word".match(/\D/g)) // ['w', 'o', 'r', 'd', ' ', '&', ' ', 'a', 'n', 'o', 't', 'h', 'e', 'r', ' ', 'w', 'o', 'r', 'd']

            // \s (whitespace)

                console.log("a b\tc\nd".match(/\s/g)) // [ ' ', '\t', '\n' ]

            // \S (not whitespace)

                console.log("a b\tc\nd".match(/\S/g)) // [ 'a', 'b', 'c', 'd' ]

            // \p{L} (unicode category)

                console.log("abc123あい".match(/\p{L}/gu)) // [ 'a', 'b', 'c', 'あ', 'い' ] (short alias for "Letter")
                console.log("abc123あい".match(/\p{Letter}/gu)) // [ 'a', 'b', 'c', 'あ', 'い' ] 
                console.log("σε αγαπώ".match(/\p{L}/gu)) // ['σ', 'ε', 'α', 'γ', 'α', 'π', 'ώ']
           
            // \P{L} (not unicode category)

                console.log("abc123あい".match(/\P{L}/gu)) // [ '1', '2', '3' ]
                console.log("σε αγαπώ".match(/\P{L}/gu)) // [ ' ' ]

            // \p{Han} (unicode script)

                console.log("漢字abc123".match(/\p{sc=Han}/gu)) // [ '漢', '字' ]
                console.log("漢字abc123".match(/\p{Script=Han}/gu)) // [ '漢', '字' ]

            // // \P{Han} (not unicode script)

                console.log("漢字abc123".match(/\P{sc=Han}/gu)) // [ 'a', 'b', 'c', '1', '2', '3' ]
                console.log("漢字abc123".match(/\P{Script=Han}/gu)) // [ 'a', 'b', 'c', '1', '2', '3' ]

        }

        const groupsAndReferences = () => {

            // (ABC) (capturing group)

                console.log("XYZ ABC DEF".match(/(ABC)/)) // [ 'ABC', 'ABC', index: 4, input: 'XYZ ABC DEF', groups: undefined ]
                console.log("ABC123 ABC ABC456".match(/(ABC)/g)) // [ 'ABC', 'ABC', 'ABC' ]
                console.log("abC AbC ABc".match(/(ABC)/g)) // null
                console.log("abC AbC ABc".match(/[ABC]/g)) // [ 'C', 'A', 'C', 'A', 'B' ]
                console.log("12ABC ABCA8 ABCM ABC45".match(/\b(ABC)\b/g)) // null
            
            // (?<name>ABC) (named capturing group)

                const ncg_1 = "ABC123 DEF456 ABC789".match(/(?<letters>ABC)(?<digits>\d+)/g)
                console.log(ncg_1) // [ 'ABC123', 'ABC789' ]
                console.log(ncg_1.groups) // undefined

                const ncg_2 = "ABC123 DEF456 ABC789".match(/(?<letters>ABC)(?<digits>\d+)/)
                console.log(ncg_2) // [ 'ABC123', 'ABC', '123', index: 0, input: 'ABC123 DEF456 ABC789', groups: [Object: null prototype] { letters: 'ABC', digits: '123' } ]
                console.log(ncg_2.groups) // [Object: null prototype] { letters: 'ABC', digits: '123' }

            // \1 (numeric reference)

                console.log("hello hello world hellow hello Hello hello hello".match(/(\w+)\s\1/g)) // [ 'hello hello', 'hello hello' ]
                console.log("hello hello world hellow hello Hello hello hello".match(/(\w+)\s/g)) // [ 'hello ', 'hello ', 'world ', 'hellow ', 'hello ', 'Hello ', 'hello ']

                const numRef_1 = "hello hello hello world";
                const numRef_regex1 = /(\w+)\s\1/g;
                const numRef_result1 = numRef_1.replace(numRef_regex1, "$1");
                console.log(numRef_result1); // hello hello world

                console.log("123-123 456-789-893--123 31-123-10-123".match(/(\d+)-\1/g)) // [ '123-123', '89-89', '1-1' ]
                
                console.log("ABBA 8998 MAXA".match(/(\w)(\w)\2\1/g)) // [ 'ABBA', '8998' ]
                console.log("ABBBBA 899998 MAXXXA".match(/(\w)(\w)(\w)\3\2\1/g)) // [ 'ABBBBA', '899998' ]
                console.log("ABBBBA 899998 MAXXXA".match(/(\w)(\w)\2{3}\1{1}/g)) // [ 'ABBBBA', '899998' ]

            //  (?:ABC) (non-capturing group)

                const ncg_regex1 = /(ABC)(\d+)/g;
                const ncg_regex2 = /(?:ABC)(\d+)/g;

                let ncg_match1, ncg_match2;

                while (ncg_match1 = ncg_regex1.exec("ABC123 ABC456 ABC789")) {
                    console.log(ncg_match1[0]); 
                    console.log(ncg_match1[1]); 
                    console.log(ncg_match1[2]); 
                }
                /*
                    Iteration 1:
                        ABC123
                        ABC
                        123
                    Iteration 2:
                        ABC456
                        ABC
                        456
                    Iteration 3:
                        ABC789
                        ABC
                        789
                */
                while (ncg_match2 = ncg_regex2.exec("ABC123 ABC456 ABC789")) {
                    console.log(ncg_match2[0]); 
                    console.log(ncg_match2[1]); 
                    console.log(ncg_match2[2]); 
                }
                /*
                    Iteration 1:
                        ABC123
                        123
                        undefined
                    Iteration 2:
                        ABC456
                        456
                        undefined
                    Iteration 3:
                        789
                        undefined
                */                
                
        }

        const substitution = () => {

            // $& (match)

                console.log("Hello, World!".replace(/World/, "[$&]")) // Hello, [World]!
                console.log("Hello, Worldd!".replace(/World/, "[$&]")) // Hello, [World]d!

            // $1 (capture group)

                console.log("Hello, World!".replace(/(Hello), (World)/, "$2, $1")) // World, Hello!

            // $` (before match)

                console.log("Hello, World!".replace(/World/, "[$`]")) // Hello, [Hello, ]!

            // $' (after match)

                 console.log("Hello, World!".replace(/Hello/, "[$']")) // [, World!], World!

            // $$ (escaped $)

                console.log("Hello, World!".replace(/World/, "Price is $$100")) // Hello, Price is $100!

            // \n (escaped characters)

                console.log("Line 1\nLine 2".replace(/\n/g, "\\n")) // Line 1\nLine 2
        }

        const moreExamples = () => {
            const url_1 = "http://something.domain.com";
            console.log(/^https?:\/\/(.+?)\./.exec(url_1)[1]); // something
        }

        // flags();
        // quantifiersAndAlternation();
        // lookaround();
        // escapedChars();
        // anchors();
        // charsClasses();
        // groupsAndReferences();
        // substitution();
        moreExamples();

    }

    const constructor = () => {

        // ------ 1
        const reg_1a = /\w+/
        const reg_1b = new RegExp('\\w+')
        console.log(reg_1a, reg_1b, reg_1a === reg_1b) // /\w+/ /\w+/ false
    
        // ------ 2
        const reg_2a = new RegExp(/ab+c/, "i") // literal notation
        const reg_2b = new RegExp("ab+c", "i") // constructor
        console.log("abbcdafda".match(reg_2a)) // [ 'abbc', index: 0, input: 'abbcdafda', groups: undefined ]
        console.log("abbcdafda".match(reg_2b)) // [ 'abbc', index: 0, input: 'abbcdafda', groups: undefined ]
        console.log("abcdafda".match(reg_2a)) // [ 'abc', index: 0, input: 'abcdafda', groups: undefined ]
        console.log("abcdafda".match(reg_2b)) // [ 'abc', index: 0, input: 'abcdafda', groups: undefined ]
        console.log("bcdafda".match(reg_2a)) // null
        console.log("bcdafda".match(reg_2b)) // null
        console.log("abpcdafda".match(reg_2b)) // null
        console.log("abpcdafda".match(reg_2b)) // null

        // ------ 3
        const arr_3 = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
        const str_3 = "Let me get some bacon and eggs, please";

        console.log(str_3.match(new RegExp(`\\b(${arr_3.join("|")})\\b`, "g"))); // [ 'bacon', 'eggs' ]

    }

    const staticProperties = () => {

        const symbolSpecies = () => {

            // ------ 1
            class MyRegExp_1 extends RegExp {
                static get [Symbol.species]() {
                  return RegExp;
                }
            }
            
            const regex_1 = new MyRegExp_1('foo', 'g');
            console.log(regex_1.test('football')); // true
            console.log(regex_1 instanceof MyRegExp_1); // true
            console.log(regex_1 instanceof RegExp); // true

            const newRegex_1 = regex_1.constructor[Symbol.species]('foo', 'g');
            console.log(newRegex_1 instanceof MyRegExp_1); // false
            console.log(newRegex_1 instanceof RegExp); // true

            // ------ 2
            class MyRegExp_2 extends RegExp {
                static get [Symbol.species]() {
                  return this;
                }
            }
            
            const regex_2 = new MyRegExp_2('foo', 'g');
            console.log(regex_2.test('football')); // true
            console.log(regex_2 instanceof MyRegExp_2); // true
            console.log(regex_2 instanceof RegExp); // true

            // const newRegex_2 = regex_2.constructor[Symbol.species]('foo', 'g'); // TypeError: Class constructor MyRegExp_2 cannot be invoked without 'new' 
        
            // ------ 3
            class MyRegExp_3 extends RegExp { }

            const regex_3 = new MyRegExp_3('foo', 'g');
            console.log('aa', regex_3.test('football')); // true
            console.log(regex_3 instanceof MyRegExp_3); // true
            console.log(regex_3 instanceof RegExp); // true
            
            // const newRegex_3 = regex_3.constructor[Symbol.species]('foo', 'g'); // TypeError: Class constructor MyRegExp_3 cannot be invoked without 'new'
        
            // ------ 4
            class MyRegExp_4 extends RegExp {
                constructor(...args) {
                    console.log("Creating a new MyRegExp_4 instance with args:", args);
                    super(...args);
                }
                static get [Symbol.species]() {
                    console.log("Copying MyRegExp_4");
                    return this;
                }
                exec(value) {
                    console.log("Executing with lastIndex:", this.lastIndex);
                    return super.exec(value);
                }
            }
            
            console.log(Array.from("aabbccdd".matchAll(new MyRegExp_4("[ac]", "g"))));
            /*
                Creating a new MyRegExp_4 instance with args: [ '[ac]', 'g' ]
                Copying MyRegExp_4
                Creating a new MyRegExp_4 instance with args: [ MyRegExp_4 /[ac]/g, 'g' ]
                Executing with lastIndex: 0
                Executing with lastIndex: 1
                Executing with lastIndex: 2
                Executing with lastIndex: 5
                Executing with lastIndex: 6
                [
                    [ 'a', index: 0, input: 'aabbccdd', groups: undefined ],
                    [ 'a', index: 1, input: 'aabbccdd', groups: undefined ],
                    [ 'c', index: 4, input: 'aabbccdd', groups: undefined ],
                    [ 'c', index: 5, input: 'aabbccdd', groups: undefined ]
                ]
            */

            // ------ 5
            class MyRegExp_5 extends RegExp {
                constructor(...args) {
                    console.log("Creating a new MyRegExp_5 instance with args:", args);
                    super(...args);
                }
                static get [Symbol.species]() {
                    console.log("Copying RegExp");
                    return RegExp;
                }
                exec(value) {
                    console.log("Executing with lastIndex:", this.lastIndex);
                    return super.exec(value);
                }
            }
              
            console.log(Array.from("aabbccdd".matchAll(new MyRegExp_5("[ac]", "g"))));
            /*
                Creating a new MyRegExp_5 instance with args: [ '[ac]', 'g' ]
                Copying RegExp
                [
                    [ 'a', index: 0, input: 'aabbccdd', groups: undefined ],
                    [ 'a', index: 1, input: 'aabbccdd', groups: undefined ],
                    [ 'c', index: 4, input: 'aabbccdd', groups: undefined ],
                    [ 'c', index: 5, input: 'aabbccdd', groups: undefined ]
                ]
            */

            // ------ 6 (return RegExp)
            class MyRegExp_6 extends RegExp {
                static get [Symbol.species]() {
                    return RegExp;
                }
            }

            const regex_6 = new MyRegExp_6(/[a-c]/, "g");
            const str_6 = "abcaaa";
            console.log(Array.from(str_6.matchAll(regex_6), (m) => `${regex_6.lastIndex} ${m[0]}`)); // [ '0 a', '0 b', '0 c', '0 a', '0 a', '0 a' ]

            // ------ 7 (return this)
            class MyRegExp_7 extends RegExp {
                static get [Symbol.species]() {
                    return this;
                }
            }

            const regex_7 = new MyRegExp_7(/[a-c]/, "g");
            const str_7 = "abcaaa";
            console.log(Array.from(str_7.matchAll(regex_7), (m) => `${regex_7.lastIndex} ${m[0]}`)); // [ '0 a', '0 b', '0 c', '0 a', '0 a', '0 a' ]

            // ------ 8 (default behavior)
            class MyRegExp_8 extends RegExp {}

            const regex_8 = new MyRegExp_8(/[a-c]/, "g");
            const str_8 = "abcaaa";
            console.log(Array.from(str_8.matchAll(regex_8), (m) => `${regex_8.lastIndex} ${m[0]}`)); // [ '0 a', '0 b', '0 c', '0 a', '0 a', '0 a' ]          
              
        }

        symbolSpecies();
    }

    const staticMethods = () => {

        const escape = () => {
            // limited availability
        }

        escape();

    }

    const instanceProperties = () => {

        // RegExp.prototype.constructor
        const constructor = () => {
            const constructor_1 = new RegExp(/ab+c/, "i")
            const constructor_2 = new RegExp("ab+c", "i")
            const constructor_3 = RegExp(/ab+c/, "i")
            const constructor_4 = RegExp("ab+c", "i")

            console.log(constructor_1.constructor) // [Function: RegExp]
            console.log(constructor_2.constructor) // [Function: RegExp]
            console.log(constructor_3.constructor) // [Function: RegExp]
            console.log(constructor_4.constructor) // [Function: RegExp]
        }

        // RegExp.prototype.dotAll
        const dotAll = () => {
            const regex_1 = new RegExp('foo', 's');
            console.log(regex_1.dotAll); // true

            const regex_2 = new RegExp('bar');
            console.log(regex_2.dotAll); // false

            const str_3 = "bar\nexample foo example";
            const regex_3 = /bar.example/s;
            console.log(regex_3.dotAll); // true
            console.log(str_3.replace(regex_3, "")); //  foo example
            
            const str_4 = "bar\nexample foo example";
            const regex_4 = /bar.example/;
            console.log(regex_4.dotAll); // false
            console.log(str_4.replace(regex_4, ""));
            /*
                bar
                example foo example
            */

        }

        // RegExp.prototype.flags
        const flags = () => {
            console.log(/foo/gi.flags); // gi
            console.log(/bar/muy.flags); // muy
        }

        // RegExp.prototype.global
        const global = () => {
            const regex_1 = new RegExp('foo', 'g');
            console.log(regex_1.global); // true
            
            const regex_2 = new RegExp('bar', 'i');
            console.log(regex_2.global); // false
        }

        // RegExp.prototype.hasIndices
        const hasIndices = () => {
            const regex_1 = new RegExp('foo', 'd');
            console.log(regex_1.hasIndices); // true

            const regex_2 = new RegExp('bar');
            console.log(regex_2.hasIndices); // false
        }

        // RegExp.prototype.ignoreCase
        const ignoreCase = () => {
            const regex_1 = new RegExp('foo');
            const regex_2 = new RegExp('foo', 'i');
            console.log(regex_1.test('Football')); // false
            console.log(regex_2.ignoreCase); // true
            console.log(regex_2.test('Football')); // true
            
            const regex_3 = /foo/i;
            console.log(regex_3.ignoreCase); // true
            console.log(regex_3.test("Football")) // true
        }

        // RegExp.prototype.multiline
        const multiline = () => {
            const regex_1 = new RegExp('^football');
            const regex_2 = new RegExp('^football', 'm');
            console.log(regex_1.multiline); // false          
            console.log(regex_2.multiline); // true   
            console.log(regex_1.test('rugby\nfootball')); // false
            console.log(regex_2.test('rugby\nfootball')); // true

            const regex_3 = /foo/m;
            console.log(regex_3.multiline); // true
            console.log(regex_3.test('rugby\nfootball')); // true
        }

        // RegExp.prototype.source
        const source = () => {
            const regex_1 = /fooBar/gi;
            console.log(regex_1.source); // fooBar          

            console.log(new RegExp().source); // (?:)           
            console.log(new RegExp('\n').source === '\\n'); // true
            console.log(new RegExp('\n').source) // \n         
            console.log(new RegExp(/\n/).source === '\\n'); // true
            console.log(new RegExp(/\n/).source) // \n

        }

        // RegExp.prototype.sticky
        const sticky = () => {

            // ------ 1
            const str_1 = 'table football';
            const regex_1 = new RegExp('foo', 'y');
            regex_1.lastIndex = 6;
            console.log(regex_1.sticky); // true
            console.log(regex_1.lastIndex); // 6
            console.log(regex_1.test(str_1)); // true
            console.log(regex_1.lastIndex); // 9
            console.log(regex_1.test(str_1)); // false
            console.log(regex_1.lastIndex); // 0

            // ------ 2
            const str_2 = "#foo#";
            const regex_2 = /foo/y;
            console.log(regex_2.test(str_2)); // false
            console.log(regex_2.lastIndex); // 0
            regex_2.lastIndex = 1;
            console.log(regex_2.test(str_2));  // true
            console.log(regex_2.lastIndex); // 4
            regex_2.lastIndex = 5;
            console.log(regex_2.test(str_2)); // false
            console.log(regex_2.lastIndex); // 0

            // ------ 3
            const regex_3 = /^foo/y;
            regex_3.lastIndex = 2;
            console.log(regex_3.test("..foo")); // false
            console.log(regex_3.lastIndex); // 0

            // ------ 4
            const regex_4 = /^foo/my;
            regex_4.lastIndex = 2;
            console.log(regex_4.test("..foo")); // false
            console.log(regex_4.lastIndex); // 0
            regex_4.lastIndex = 2;
            console.log(regex_4.test(".\nfoo")); // true 
            console.log(regex_4.lastIndex); // 5
        }

        // RegExp.prototype.unicode
        const unicode = () => {
            const regex_1 = new RegExp('\u{61}');
            const regex_2 = new RegExp('\u{61}', 'u');
            console.log(regex_1.unicode); // false
            console.log(regex_2.unicode); // true
            console.log(regex_1.source); // a       
            console.log(regex_2.source); // a
            const regex_3 = /\u{61}/u;
            console.log(regex_3.unicode); // true
        }

        // RegExp.prototype.unicodeSets
        const unicodeSets = () => {
            const regex_1 = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;
            console.log(regex_1.unicodeSets); // true
        }

        // lastIndex
        const lastIndex = () => {
            const regex_1 = new RegExp('foo', 'g');
            const str_1 = 'table football, foosball';
            regex_1.test(str_1);
            console.log(regex_1.lastIndex); // 9      
            regex_1.test(str_1);
            console.log(regex_1.lastIndex); // 19
        }

        // constructor();
        // dotAll();
        // flags();
        // global();
        // hasIndices();
        // ignoreCase();
        // multiline();
        // source();
        // sticky();
        // unicode();
        // unicodeSets();
        // lastIndex();

    }

    const instanceMethods = () => {

        // RegExp.prototype.exec()
        const exec = () => {

            // ------ 1 (finding successive matches)
            const regex_1 = RegExp('foo*', 'g');
            const str_1 = 'table football, foosball';
            let array_1;
            
            while ((array_1 = regex_1.exec(str_1)) !== null) {
                console.log(`Found ${array_1[0]}. Next starts at ${regex_1.lastIndex}.`);
            }
            /*
                Found foo. Next starts at 9.
                Found foo. Next starts at 19.
            */

            // ------ 2
            const regex_2 = RegExp('foo*', 'g');
            const str_2 = 'table football, foosball';
            
            console.log(regex_2.lastIndex) // 0
            console.log(regex_2.test(str_2)) // true
            console.log(regex_2.lastIndex) // 9
            console.log(regex_2.test(str_2)) // true
            console.log(regex_2.lastIndex) // 19            

            // ------ 3
            const regex_3 = /quick\s(?<color>brown).+?(jumps)/dgi;
            console.log(regex_3.exec("The Quick Brown Fox Jumps Over The Lazy Dog"));
            /*
                [
                    'Quick Brown Fox Jumps',
                    'Brown',
                    'Jumps',
                    index: 4,
                    input: 'The Quick Brown Fox Jumps Over The Lazy Dog',
                    groups: [Object: null prototype] { color: 'Brown' },
                    indices: [
                        [ 4, 25 ],
                        [ 10, 15 ],
                        [ 20, 25 ],
                        groups: [Object: null prototype] { color: [Array] }
                    ]
                ]
            */

            // ------ 4 (finding successive matches)
            const regex_4 = /ab*/g;
            const str_4 = "abbcdefabh";
            let array_4;
            while ((array_4 = regex_4.exec(str_4)) !== null) {
                let result_4 = `Found ${array_4[0]}. `;
                result_4 += `Next match starts at ${regex_4.lastIndex}`;
                console.log(result_4);
            }
            /*
                Found abb. Next match starts at 3
                Found ab. Next match starts at 9
            */

            // ------ 5 (exec() with RegExp literals)
            const result_5a = /(hello \S+)/.exec("This is a hello world!");
            console.log(result_5a);
            /*
                [
                    'hello world!',
                    'hello world!',
                    index: 10,
                    input: 'This is a hello world!',
                    groups: undefined
                ]
            */
            console.log(result_5a[0]); // hello world!
            console.log(result_5a[1]); // hello world!

            const result_5b = /(hello \S+)/.exec("This is a hello  world!");
            console.log(result_5b); // null

        }

        // RegExp.prototype.test()
        const test = () => {

            // ------ 1 
            const str_1 = 'table football';
            const regex_1 = new RegExp('foo*');
            const globalRegex_1 = new RegExp('foo*', 'g');
            console.log(regex_1.test(str_1)); // true           
            console.log(globalRegex_1.lastIndex); // 0           
            console.log(globalRegex_1.test(str_1)); // true           
            console.log(globalRegex_1.lastIndex); // 9            
            console.log(globalRegex_1.test(str_1)); // false
            console.log(globalRegex_1.lastIndex); // 0

            // ------ 2
            function testInput_2(re, str) {
                const res_2 = re.test(str) ? "contains" : "does not contain";
                console.log(`${str} ${res_2} ${re.source}`);
            }
            testInput_2((/foo*/g), 'table football') // table football contains foo*
            testInput_2((/foo*/g), 'table fotball') // table fotball contains foo*
            testInput_2((/foo*/g), 'table ftball') // table ftball does not contain foo*

        }

        // RegExp.prototype.toString()
        const toString = () => {
            console.log(new RegExp('a+b+c')); // /a+b+c/           
            console.log(new RegExp('a+b+c').toString()); // /a+b+c/           
            console.log(new RegExp('bar', 'g').toString()); // /bar/g           
            console.log(new RegExp('\n', 'g').toString()); // /\n/g
            console.log(new RegExp('\\n', 'g').toString()); // /\n/g
            console.log(new RegExp().toString()); // /(?:)/
        }

        // RegExp.prototype[Symbol.match]()
        const symbolMatch = () => {

            // ------ 1 
            class RegExp_1 extends RegExp {
                [Symbol.match](str) {
                    const result = RegExp.prototype[Symbol.match].call(this, str);
                    if (result) {
                        return 'VALID';
                    }
                    return 'INVALID';
                }
            }
            
            console.log('2012-07-02'.match(new RegExp_1('([0-9]+)-([0-9]+)-([0-9]+)'))); // VALID

            // ------ 2 
            class RegExp_2 extends RegExp {}
            console.log('2012-07-02'.match(new RegExp_2('([0-9]+)-([0-9]+)-([0-9]+)')));
            /*
                [
                    '2012-07-02',
                    '2012',
                    '07',
                    '02',
                    index: 0,
                    input: '2012-07-02',
                    groups: undefined
                ]
            */

            // ------ 3
            console.log("abc".match(/a/)) // [ 'a', index: 0, input: 'abc', groups: undefined ]
            console.log(/a/[Symbol.match]("abc")) // [ 'a', index: 0, input: 'abc', groups: undefined ]

            // ------ 4
            const regex_4 = /[abc]/y;
            for (let i = 0; i < 5; i++) {
                console.log("abc".match(regex_4), regex_4.lastIndex);
            }
            /*
                [ 'a', index: 0, input: 'abc', groups: undefined ] 1
                [ 'b', index: 1, input: 'abc', groups: undefined ] 2
                [ 'c', index: 2, input: 'abc', groups: undefined ] 3
                null 0
                [ 'a', index: 0, input: 'abc', groups: undefined ] 1
            */

            // ------ 5
            console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]

            // ------ 6
            console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
            console.log("😄".match(/(?:)/gu)); // [ '', '' ]

            // ------ 7
            const regex_7 = /[0-9]+/g;
            const str_7 = "2016-01-02";
            const result_7 = regex_7[Symbol.match](str_7);
            console.log(result_7); // [ '2016', '01', '02' ]

            // ------ 8
            class RegExp_8 extends RegExp {
                [Symbol.match](str) {
                    const result_8 = RegExp.prototype[Symbol.match].call(this, str);
                    if (!result_8) return null;
                    return {
                        group(n) {
                            return result_8[n];
                        },
                    };
                }
            }
            
            const regex_8 = new RegExp_8("([0-9]+)-([0-9]+)-([0-9]+)");
            const str_8 = "2016-01-02";
            const result_8 = str_8.match(regex_8); 
            console.log(result_8.group(1)); // 2016
            console.log(result_8.group(2)); // 01
            console.log(result_8.group(3)); // 02
              
        }

        // RegExp.prototype[Symbo.matchAll]()
        const symbolMatchAll = () => {

            // ------ 1 
            class RegExp_1 extends RegExp {
                [Symbol.matchAll](str) {
                    const result_1 = RegExp.prototype[Symbol.matchAll].call(this, str);
                    if (!result_1) {
                        return null;
                    }
                        return Array.from(result_1);
                }
            }
            
            const regex_1 = new RegExp_1('-[0-9]+', 'g');
            console.log('2016-01-02|2019-03-07'.matchAll(regex_1));
            /*
            [
                [
                    '-01',
                    index: 4,
                    input: '2016-01-02|2019-03-07',
                    groups: undefined
                ],
                [
                    '-02',
                    index: 7,
                    input: '2016-01-02|2019-03-07',
                    groups: undefined
                ],
                [
                    '-03',
                    index: 15,
                    input: '2016-01-02|2019-03-07',
                    groups: undefined
                ],
                [
                    '-07',
                    index: 18,
                    input: '2016-01-02|2019-03-07',
                    groups: undefined
                ]
            ]
            */

            // ------ 2
            console.log("abcaa".matchAll(/a/g)); // Object [RegExp String Iterator] {}
            console.log(Array.from("abcaa".matchAll(/a/g)));
            /*
                [
                    [ 'a', index: 0, input: 'abcaa', groups: undefined ],
                    [ 'a', index: 3, input: 'abcaa', groups: undefined ],
                    [ 'a', index: 4, input: 'abcaa', groups: undefined ]
                ]
            */
            console.log(/a/g[Symbol.matchAll]("abcaa")); // Object [RegExp String Iterator] {}
            console.log(Array.from(/a/g[Symbol.matchAll]("abcaa")));
            /*
                [
                    [ 'a', index: 0, input: 'abcaa', groups: undefined ],
                    [ 'a', index: 3, input: 'abcaa', groups: undefined ],
                    [ 'a', index: 4, input: 'abcaa', groups: undefined ]
                ]
            */

            // ------ 3
            const regexp_3 = /[a-c]/g;
            const str_3 = "abc";
            console.log(Array.from(str_3.matchAll(regexp_3), (m) => `${regexp_3.lastIndex} ${m[0]}`)); // [ '0 a', '0 b', '0 c' ]
            regexp_3.lastIndex = 1;
            console.log(Array.from(str_3.matchAll(regexp_3), (m) => `${regexp_3.lastIndex} ${m[0]}`)); // [ '1 b', '1 c' ]

            // ------ 4
            class RegExp_4 extends RegExp {
                [Symbol.matchAll](str) {
                    const result_4 = RegExp.prototype[Symbol.matchAll].call(this, str);
                    return result_4 ? Array.from(result_4) : null;
                }
            }
            
            const regex_4 = new RegExp_4("([0-9]+)-([0-9]+)-([0-9]+)", "g");
            const str_4 = "2016-01-02|2019-03-07";
            const result_4 = str_4.matchAll(regex_4);
            
            console.log(result_4[0]);
            /*
                [
                    '2016-01-02',
                    '2016',
                    '01',
                    '02',
                    index: 0,
                    input: '2016-01-02|2019-03-07',
                    groups: undefined
                ]
            */
            console.log(result_4[1]);        
            /*
                [
                    '2019-03-07',
                    '2019',
                    '03',
                    '07',
                    index: 11,
                    input: '2016-01-02|2019-03-07',
                    groups: undefined
                ]
            */

        }

        // RegExp.prototype[Symbol.replace]()
        const replace = () => {

            // ------ 1 
            console.log("abc".replace(/a/, "A")); // Abc
            console.log(/a/[Symbol.replace]("abc", "A")); // Abc

            // ------ 2
            const regex_2 = /a/y

            for(let i = 0; i < 5; i++) {
                console.log("aaa".replace(regex_2, "c"), regex_2.lastIndex)
            }
            /*
                caa 1
                aca 2
                aac 3
                aaa 0
                caa 1
            */

            // ------ 3
            console.log("aa-a".replace(/a/gy, "b")); // bb-a

            // ------ 4
            console.log("😄".replace(/(?:)/g, " ")); //  � �
            console.log("😄".replace(/(?:)/gu, " ")); //  😄

            // ------ 5
            const regex_5 = /-/g;
            const str_5 = "2024-12-17";
            const newstr_5 = regex_5[Symbol.replace](str_5, ".");
            console.log(newstr_5); // 2024.12.17

            // ------ 6
            class RegExp_6 extends RegExp {
                constructor(pattern, flags, count) {
                    super(pattern, flags);
                    this.count = count;
                }
                [Symbol.replace](str, replacement) {
                    let result = str;
                    for (let i = 0; i < this.count; i++) {
                        result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
                    }
                    return result;
                }
            }

            const regex_6 = new RegExp_6("\\d", "", 5);
            const str_6 = "01234567";
            const newstr_6 = str_6.replace(regex_6, "#"); 
            console.log(newstr_6); // #####567

            // ------ 7
            class RegExp_7 extends RegExp {
                constructor(pattern, flags, count) {
                    super(pattern, flags);
                    this.count = count;
                }
            }

            const regex_7 = new RegExp_7("\\d", "", 5);
            const str_7 = "01234567";
            const newstr_7 = str_7.replace(regex_7, "#"); 
            console.log(newstr_7); // #1234567    
              


        }

        // RegExp.prototype[Symbol.search]()
        const search = () => {

            // ------ 1 
            class RegExp_1 extends RegExp {
                constructor(str) {
                    super(str);
                    this.pattern = str;
                }
                [Symbol.search](str) {
                    return str.indexOf(this.pattern);
                }
            }
            
            console.log('table football'.search(new RegExp_1('foo'))); // 6

            // ------ 2
            console.log("abc".search(/b/)); // 1
            console.log(/a/[Symbol.search]("abc")); // 0

            // ------ 3
            const regex_3a = /[abc]/g;
            regex_3a.lastIndex = 2;
            console.log("abc".search(regex_3a)); // 0

            const regex_3b = /[bc]/y;
            regex_3b.lastIndex = 1;
            console.log("abc".search(regex_3b)); // -1
            console.log("abc".match(regex_3b)); // [ 'b', index: 1, input: 'abc', groups: undefined ]

            // ------ 4
            const regex_4 = /-/g;
            const str_4 = "2016-01-02";
            const result_4 = regex_4[Symbol.search](str_4);
            console.log(result_4); // 4

            // ------ 5
            class RegExp_5 extends RegExp {
                constructor(str) {
                    super(str);
                    this.pattern = str;
                }
                [Symbol.search](str) {
                    return str.indexOf(this.pattern);
                }
            }

            const regex_5 = new RegExp_5("a+b");
            const str_5 = "ab a+b";
            const result_5 = str_5.search(regex_5); 
            console.log(result_5); // 3      

        }

        // RegExp.prototype[Symbol.split]()
        const split = () => {

            // ------ 1 
            class RegExp_1 extends RegExp {
                [Symbol.split](str, limit) {
                    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
                    return result.map((x) => `(${x})`);
                }
            }

            console.log('2024-12-17'.split(new RegExp_1('-'))); // [ '(2024)', '(12)', '(17)' ]
            console.log('2024-12-17'.split(new RegExp('-'))); // [ '2024', '12', '17' ]
       
            // ------ 2
            console.log("a-b-c".split(/-/)); // [ 'a', 'b', 'c' ]
            console.log(/-/[Symbol.split]("a-b-c")); // [ 'a', 'b', 'c' ]

            // ------ 3
            const regex_3 = /-/g;
            const str_3 = "2024-12-17";
            const result_3 = regex_3[Symbol.split](str_3);
            console.log(result_3); // [ '2024', '12', '17' ]

            // ------ 4
            class RegExp_4 extends RegExp {
                [Symbol.split](str, limit) {
                    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
                    return result.map((x) => `(${x})`);
                }
            }

            const regex_4 = new RegExp_4("-");
            const str_4 = "2024-12-17";
            const result_4 = str_4.split(regex_4); 
            console.log(result_4); // [ '(2024)', '(12)', '(17)' ]

            // ------ 5
            class RegExp_5 extends RegExp {}

            const regex_5 = new RegExp_5("-");
            const str_5 = "2024-12-17";
            const result_5 = str_5.split(regex_5); 
            console.log(result_5); // [ '2024', '12', '17' ]  
       
        }

        // exec();
        // test();
        // toString();
        // symbolMatch();
        // symbolMatchAll();
        // replace();
        // search();
        split();

    }

    examples();
    // constructor();
    // staticProperties();
    // staticMethods();
    // instanceProperties();
    // instanceMethods();

}