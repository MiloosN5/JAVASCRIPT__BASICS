export const math = () => {

    const staticProps = () => {

        console.log(Math.E); // 2.718281828459045
        console.log(Math.LN10); // 2.302585092994046
        console.log(Math.LN2); // 0.6931471805599453
        console.log(Math.LOG10E); // 0.4342944819032518
        console.log(Math.LOG2E); // 1.4426950408889634
        console.log(Math.PI); // 3.141592653589793
        console.log(Math.SQRT1_2); // 0.7071067811865476
        console.log(Math.SQRT2); // 1.4142135623730951
        console.log(Math[Symbol.toStringTag]); // Math

    }

    const staticMethods = () => {

        const abs = () => {
            console.log(Math.abs(-Infinity)); // Infinity
            console.log(Math.abs(-1)); // 1
            console.log(Math.abs(-0)); // 0
            console.log(Math.abs(0)); // 0
            console.log(Math.abs(1)); // 1
            console.log(Math.abs(Infinity)); // Infinity
            console.log(Math.abs("-1")); // 1
            console.log(Math.abs(-2)); // 2
            console.log(Math.abs(null)); // 0
            console.log(Math.abs("")); // 0
            console.log(Math.abs([])); // 0
            console.log(Math.abs([2])); // 2
            console.log(Math.abs([1, 2])); // NaN
            console.log(Math.abs({})); // NaN
            console.log(Math.abs("string")); // NaN
            console.log(Math.abs()); // NaN
        }
        
        const acos = () => {
            console.log(Math.acos(-2)); // NaN
            console.log(Math.acos(-1)); // 3.141592653589793 (π)
            console.log(Math.acos(0)); // 1.5707963267948966 (π/2)
            console.log(Math.acos(0.5)); // 1.0471975511965979 (π/3)
            console.log(Math.acos(1)); // 0
            console.log(Math.acos(2)); // NaN
        }
        
        const acosh = () => {
            console.log(Math.acosh(0)); // NaN
            console.log(Math.acosh(1)); // 0
            console.log(Math.acosh(2)); // 1.3169578969248166
            console.log(Math.acosh(Infinity)); // Infinity
        }

        const asin = () => {
            console.log(Math.asin(-2)); // NaN
            console.log(Math.asin(-1)); // -1.5707963267948966 (-π/2)
            console.log(Math.asin(-0)); // -0
            console.log(Math.asin(0)); // 0
            console.log(Math.asin(0.5)); // 0.5235987755982989 (π/6)
            console.log(Math.asin(1)); // 1.5707963267948966 (π/2)
            console.log(Math.asin(2)); // NaN
        }

        const asinh = () => {
            console.log(Math.asinh(-Infinity)); // -Infinity
            console.log(Math.asinh(-1)); // -0.881373587019543
            console.log(Math.asinh(-0)); // -0
            console.log(Math.asinh(0)); // 0
            console.log(Math.asinh(1)); // 0.881373587019543
            console.log(Math.asinh(Infinity)); // Infinity
        }

        const atan = () => {
            console.log(Math.atan(-Infinity)); // -1.5707963267948966 (-π/2)
            console.log(Math.atan(-0)); // -0
            console.log(Math.atan(0)); // 0
            console.log(Math.atan(1)); // 0.7853981633974483 (π/4)
            console.log(Math.atan(Infinity)); // 1.5707963267948966 (π/2)

            const atan_1 = (x, y) => Math.atan(y / x);
            console.log(atan_1(4, 7)); // 1.1071487177940904 (π/3)
        }

        const atan2 = () => {
            console.log(Math.atan2(90, 15)); // 1.4056476493802699
            console.log(Math.atan2(15, 90)); // 0.16514867741462683
       
            const formattedNumbers = new Map([
                [-Math.PI, "-π"],
                [(-3 * Math.PI) / 4, "-3π/4"],
                [-Math.PI / 2, "-π/2"],
                [-Math.PI / 4, "-π/4"],
                [Math.PI / 4, "π/4"],
                [Math.PI / 2, "π/2"],
                [(3 * Math.PI) / 4, "3π/4"],
                [Math.PI, "π"],
                [-Infinity, "-∞"],
                [Infinity, "∞"],
              ]);
              
              function format(template, ...args) {
                return String.raw(
                  { raw: template },
                  ...args.map((num) =>
                    (Object.is(num, -0)
                      ? "-0"
                      : (formattedNumbers.get(num) ?? String(num))
                    ).padEnd(5),
                  ),
                );
              }
              
              console.log(`| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|`);
              
              for (const x of [-Infinity, -1, -0, 0, 1, Infinity]) {
                for (const y of [-Infinity, -1, -0, 0, 1, Infinity]) {
                  const atan2 = Math.atan2(y, x);
                  const atan = Math.atan(y / x);
                  if (!Object.is(atan2, atan)) {
                    console.log(format`| ${x} | ${y} | ${atan2} | ${atan} |`);
                  }
                }
              }              
        }

        const atanh = () => {
            console.log(Math.atanh(-2)); // NaN
            console.log(Math.atanh(-1)); // -Infinity
            console.log(Math.atanh(-0)); // -0
            console.log(Math.atanh(0)); // 0
            console.log(Math.atanh(0.5)); // 0.5493061443340548
            console.log(Math.atanh(1)); // Infinity
            console.log(Math.atanh(2)); // NaN
        }

        const cbrt = () => {
            console.log(Math.cbrt(-Infinity)); // -Infinity
            console.log(Math.cbrt(-1)); // -1
            console.log(Math.cbrt(-0)); // -0
            console.log(Math.cbrt(0)); // 0
            console.log(Math.cbrt(1)); // 1
            console.log(Math.cbrt(2)); // 1.2599210498948732
            console.log(Math.cbrt(Infinity)); // Infinity
        }

        const ceil = () => {
            console.log(Math.ceil(-Infinity)); // -Infinity
            console.log(Math.ceil(-7.004)); // -7
            console.log(Math.ceil(-4)); // -4
            console.log(Math.ceil(-0.95)); // -0
            console.log(Math.ceil(-0)); // -0
            console.log(Math.ceil(0)); // 0
            console.log(Math.ceil(0.95)); // 1
            console.log(Math.ceil(4)); // 4
            console.log(Math.ceil(7.004)); // 8
            console.log(Math.ceil(Infinity)); // Infinity
        }
        
        const clz32 = () => {
            console.log(Math.clz32(1000)); // 22
            console.log(Math.clz32(3.5)); // 30
            console.log(Math.clz32(1)); // 31
            console.log(Math.clz32(true)); // 31
            console.log(Math.clz32()); // 32

            const clz32_stuff = [
                NaN,
                Infinity,
                -Infinity,
                0,
                -0,
                false,
                null,
                undefined,
                "foo",
                {},
                [],
            ];
            console.log(clz32_stuff.every((n) => Math.clz32(n) === 32)); // true
        }

        const cos = () => {
            console.log(Math.cos(-Infinity)); // NaN
            console.log(Math.cos(-0)); // 1
            console.log(Math.cos(0)); // 1
            console.log(Math.cos(1)); // 0.5403023058681398
            console.log(Math.cos(Math.PI)); // -1 
            console.log(Math.cos(2 * Math.PI)); // 1 
            console.log(Math.cos(Infinity)); // NaN
        }

        const cosh = () => {
            console.log(Math.cosh(-Infinity)); // Infinity
            console.log(Math.cosh(-1)); // 1.5430806348152437
            console.log(Math.cosh(-0)); // 1
            console.log(Math.cosh(0)); // 1
            console.log(Math.cosh(1)); // 1.5430806348152437
            console.log(Math.cosh(Infinity)); // Infinity
        }

        const exp = () => {
            console.log(Math.exp(-Infinity)); // 0
            console.log(Math.exp(-1)); // 0.36787944117144233
            console.log(Math.exp(0)); // 1
            console.log(Math.exp(1)); // 2.718281828459045
            console.log(Math.exp(Infinity)); // Infinity 
        }

        const expm1 = () => {
            console.log(Math.expm1(-Infinity)); // -1
            console.log(Math.expm1(-1)); // -0.6321205588285577
            console.log(Math.expm1(-0)); // -0
            console.log(Math.expm1(0)); // 0
            console.log(Math.expm1(1)); // 1.718281828459045
            console.log(Math.expm1(Infinity)); // Infinity
        }

        const floor = () => {
            console.log(Math.floor(-Infinity)); // -Infinity
            console.log(Math.floor(-45.95)); // -46
            console.log(Math.floor(-45.05)); // -46
            console.log(Math.floor(-0)); // -0
            console.log(Math.floor(0)); // 0
            console.log(Math.floor(4)); // 4
            console.log(Math.floor(45.05)); // 45
            console.log(Math.floor(45.95)); // 45
            console.log(Math.floor(Infinity)); // Infinity
        }

        // console.log(Math.f16round(5.05)); note available in the nodejs
        
        const fround = () => {
            console.log(Math.fround(1.5)); // 1.5
            console.log(Math.fround(1.5) === 1.5); // true
            console.log(Math.fround(1.337)); // 1.3370000123977661
            console.log(Math.fround(1.337) === 1.337); // false
            console.log(2 ** 150); // 1.42724769270596e+45
            console.log(Math.fround(2 ** 150)); // Infinity (too big for a 32-bit float, so Infinity is returned)
        }

        const hypot = () => {
            console.log(Math.hypot(3, 4)); // 5
            console.log(Math.hypot(3, 4, 5)); // 7.0710678118654755
            console.log(Math.hypot()); // 0
            console.log(Math.hypot(NaN)); // NaN
            console.log(Math.hypot(NaN, Infinity)); // Infinity
            console.log(Math.hypot(3, 4, "foo")); // NaN
            console.log(Math.hypot(3, 4, "5")); // 7.0710678118654755
            console.log(Math.hypot(-3)); // 3 (the same as Math.abs(-3))
        }

        const imul = () => {
            console.log(Math.imul(2, 4)); // 8
            console.log(Math.imul(-1, 8)); // -8
            console.log(Math.imul(-2, -2)); // 4
            console.log(Math.imul(0xffffffff, 5)); // -5
            console.log(Math.imul(0xfffffffe, 5)); // -10
        }

        const log = () => {
            console.log(Math.log(-1)); // NaN
            console.log(Math.log(-0)); // -Infinity
            console.log(Math.log(0)); // -Infinity
            console.log(Math.log(1)); // 0
            console.log(Math.log(10)); // 2.302585092994046
            console.log(Math.log(Infinity)); // Infinity
        }

        const log10 = () => {
            console.log(Math.log10(-2)); // NaN
            console.log(Math.log10(-0)); // -Infinity
            console.log(Math.log10(0)); // -Infinity
            console.log(Math.log10(1)); // 0
            console.log(Math.log10(2)); // 0.3010299956639812
            console.log(Math.log10(100000)); // 5
            console.log(Math.log10(Infinity)); // Infinity
        }

        const log1p = () => {
            console.log(Math.log1p(-2)); // NaN
            console.log(Math.log1p(-1)); // -Infinity
            console.log(Math.log1p(-0)); // -0
            console.log(Math.log1p(0)); // 0
            console.log(Math.log1p(1)); // 0.6931471805599453
            console.log(Math.log1p(Infinity)); // Infinity
        }

        const log2 = () => {
            console.log(Math.log2(-2)); // NaN
            console.log(Math.log2(-0)); // -Infinity
            console.log(Math.log2(0)); // -Infinity
            console.log(Math.log2(1)); // 0
            console.log(Math.log2(2)); // 1
            console.log(Math.log2(3)); // 1.584962500721156
            console.log(Math.log2(1024)); // 10
            console.log(Math.log2(Infinity)); // Infinity
        }

        const max = () => {
            console.log(Math.max(10, 20)); // 20
            console.log(Math.max(-10, -20)); // -10
            console.log(Math.max(-10, 20)); // 20
            
            const max_arr1 = [3, 2, 1, 4];
            console.log(max_arr1.reduce((a, b) => Math.max(a, b), -Infinity)); // 4
            console.log(max_arr1.reduce((a, b) => Math.max(a, b), Infinity)); // Infinity
            console.log(max_arr1.reduce((a, b) => Math.max(a, b))); // 4

            const max_arr2 = [1, 2, 3];
            function getMaxOfArray(numArray) {
                return Math.max.apply(null, numArray);
            }
            console.log(getMaxOfArray(max_arr2)); // 3
            console.log(Math.max(...max_arr2)); // 3             
        }

        const min = () => {
            console.log(Math.min(10, -20)); // -20

            // clipping a value 

                // 1
                let min_val1 = 15;
                let min_boundary1 = 10;

                if (min_val1 > min_boundary1) {
                    min_val1 = min_boundary1;
                }
                console.log(min_val1); // 10

                // 2
                console.log(Math.min(15, min_boundary1)); // 10
        }

        const pow = () => {
            // basic cases
            console.log(Math.pow(7, 2)); // 49
            console.log(Math.pow(7, 3)); // 343
            console.log(Math.pow(2, 10)); // 1024

            // fractional exponents
            console.log(Math.pow(4, 0.5)); // 2 (square root of 4)
            console.log(Math.pow(8, 1 / 3)); // 2
            console.log(Math.pow(2, 0.5)); // 1.4142135623730951
            console.log(Math.pow(2, 1 / 3)); // 1.2599210498948732 (cube root of 2)
            
            // signed exponents
            console.log(Math.pow(7, -2)); // 0.020408163265306124 (1 / 49)
            console.log(Math.pow(8, -1 / 3)); // 0.5

            // signed bases
            console.log(Math.pow(-7, 2)); // 49
            console.log(Math.pow(-7, 3)); // -343
            console.log(Math.pow(-7, 0.5)); // NaN 
            console.log(Math.pow(-7, 1 / 3)); // NaN

            // zero & infinity
            console.log(Math.pow(0, 0)); // 1
            console.log(Math.pow(Infinity, 0.1)); // Infinity
            console.log(Math.pow(Infinity, -1)); // 0
            console.log(Math.pow(-Infinity, 1)); // -Infinity
            console.log(Math.pow(-Infinity, 1.5)); // Infinity
            console.log(Math.pow(-Infinity, -1)); // -0
            console.log(Math.pow(-Infinity, -1.5)); // 0
            console.log(Math.pow(0, 1)); // 0
            console.log(Math.pow(0, -1)); // Infinity
            console.log(Math.pow(-0, 1)); // -0
            console.log(Math.pow(-0, 1.5)); // 0
            console.log(Math.pow(-0, -1)); // -Infinity
            console.log(Math.pow(-0, -1.5)); // Infinity
            console.log(Math.pow(0.9, Infinity)); // 0
            console.log(Math.pow(1, Infinity)); // NaN
            console.log(Math.pow(1.1, Infinity)); // Infinity
            console.log(Math.pow(0.9, -Infinity)); // Infinity
            console.log(Math.pow(1, -Infinity)); // NaN
            console.log(Math.pow(1.1, -Infinity)); // 0

            // NaN
            console.log(Math.pow(NaN, 0)); // 1
            console.log(Math.pow(NaN, 1)); // NaN
            console.log(Math.pow(1, NaN)); // NaN
        }

        const random = () => {
            // getting a random number between 0 (inclusive) & 1 (exclusive)
            function getRandom() {
                return Math.random();
            }
            console.log(getRandom()); // 0.5616870567757535

            // getting a random number between two values
            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }
            console.log(getRandomArbitrary(5, 12)); // 9.18908907931766

            // getting a random integer between two values
            function getRandomInt(min, max) {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
            }
            console.log(getRandomInt(5, 12)); // 8
        }

        const round = () => {
            console.log(Math.round(-Infinity)); // -Infinity
            console.log(Math.round(-20.51)); // -21
            console.log(Math.round(-20.5)); // -20
            console.log(Math.round(-0.1)); // -0
            console.log(Math.round(0)); // 0
            console.log(Math.round(20.49)); // 20
            console.log(Math.round(20.5)); // 21
            console.log(Math.round(42)); // 42
            console.log(Math.round(Infinity)); // Infinity
        }

        const sign = () => {
            console.log(Math.sign(3)); // 1
            console.log(Math.sign(-3)); // -1
            console.log(Math.sign("-3")); // -1
            console.log(Math.sign(0)); // 0
            console.log(Math.sign(-0)); // -0
            console.log(Math.sign(NaN)); // NaN
            console.log(Math.sign("foo")); // NaN
            console.log(Math.sign()); // NaN
        }

        const sin = () => {
            console.log(Math.sin(-Infinity)); // NaN
            console.log(Math.sin(-0)); // -0
            console.log(Math.sin(0)); // 0
            console.log(Math.sin(1)); // 0.8414709848078965
            console.log(Math.sin(Math.PI / 2)); // 1
            console.log(Math.sin(Infinity)); // NaN
        }

        const sinh = () => {
            console.log(Math.sinh(-Infinity)); // -Infinity
            console.log(Math.sinh(-0)); // -0
            console.log(Math.sinh(0)); // 0
            console.log(Math.sinh(1)); // 1.1752011936438014
            console.log(Math.sinh(Infinity)); // Infinity
        }

        const sqrt = () => {
            console.log(Math.sqrt(-1)); // NaN
            console.log(Math.sqrt(-0)); // -0
            console.log(Math.sqrt(0)); // 0
            console.log(Math.sqrt(1)); // 1
            console.log(Math.sqrt(2)); // 1.4142135623730951
            console.log(Math.sqrt(9)); // 3
            console.log(Math.sqrt(Infinity)); // Infinity
        }

        const tan = () => {
            console.log(Math.tan(-Infinity)); // NaN
            console.log(Math.tan(-0)); // -0
            console.log(Math.tan(0)); // 0
            console.log(Math.tan(1)); // 1.5574077246549023
            console.log(Math.tan(Math.PI / 4)); // 0.9999999999999999
            console.log(Math.tan(Infinity)); // NaN
            console.log(Math.tan(Math.PI / 2)); // 16331239353195370
            console.log(Math.tan(Math.PI / 2 + Number.EPSILON)); // -6218431163823738            
        }

        const tanh = () => {
            console.log(Math.tanh(-Infinity)); // -1
            console.log(Math.tanh(-0)); // -0
            console.log(Math.tanh(0)); // 0
            console.log(Math.tanh(1)); // 0.7615941559557649
            console.log(Math.tanh(Infinity)); // 1
        }

        const trunc = () => {
            console.log(Math.trunc(-Infinity)); // -Infinity
            console.log(Math.trunc("-1.123")); // -1
            console.log(Math.trunc(-0.123)); // -0
            console.log(Math.trunc(-0)); // -0
            console.log(Math.trunc(0)); // 0
            console.log(Math.trunc(0.123)); // 0
            console.log(Math.trunc(13.37)); // 13
            console.log(Math.trunc(42.84)); // 42
            console.log(Math.trunc(Infinity)); // Infinity
        }

        // abs(); 
        // acos(); 
        // acosh(); 
        // asin(); 
        // asinh(); 
        // atan(); 
        // atan2(); 
        // atanh(); 
        // cbrt(); 
        // ceil(); 
        // clz32(); 
        // cos(); 
        // cosh(); 
        // exp(); 
        // expm1(); 
        // floor(); 
        // fround(); 
        // hypot(); 
        // imul(); 
        // log(); 
        // log10(); 
        // log1p(); 
        // log2(); 
        // max(); 
        // min(); 
        // pow(); 
        // random();
        // round(); 
        // sign(); 
        // sin(); 
        // sinh(); 
        // sqrt(); 
        // tan();  
        // tanh(); 
        // trunc();

    }

    const moreExamples = () => {

        const degToRad = (degrees) => {
            return degrees * (Math.PI / 180);
        }

        const radToDeg = (rad) => {
            return Math.round(rad / (Math.PI / 180));
        }

        const getTanDeg = (deg) => {
            const rad = (deg * Math.PI) / 180;
            return Math.tan(rad);
        }

        console.log(degToRad(60)); // 1.0471975511965976
        console.log(radToDeg(1.047)); // 60
        console.log(radToDeg(1.05)); // 60
        console.log(radToDeg(1.0472)); // 60
        console.log(radToDeg(1)); // 57

        console.log(getTanDeg(90)); // 16331239353195370
        console.log(getTanDeg(45)); // 0.9999999999999999
        console.log(getTanDeg(180)); // -1.2246467991473532e-16

    }

    // staticProps();
    // staticMethods();
    // moreExamples();
}