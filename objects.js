export const objects = () => {

    // +++++++++++++++ Object() - constructor
  
    const obj_1 = new Object();
    const obj_2 = new Object({ name: "Alisa" });
    const obj_3 = new Object(5);
  
    console.log(obj_1, typeof (obj_1)); // {} object
    console.log(obj_2, typeof (obj_2)); // { name: 'Alisa' } object
    console.log(obj_3, typeof (obj_3)); // [Number: 5] object
  
    try {
      const bigInt_1 = new BigInt(22n);
      console.log(bigInt_1, typeof (bigInt_1));
    } catch (error) {
      console.error(error.message); // BigInt is not a constructor
    }
  
    // primitive data type
    const bigInt_2 = BigInt(22n);
    console.log(bigInt_2, typeof (bigInt_2)) // 22n bigint
  
    try {
      const symbol_1 = new Symbol("id"); // Symbol is not a constructor
      console.log(symbol_1, typeof (symbol_1));
    } catch (error) {
      console.error(error.message);
    }
  
    // primitive data type
    const symbol_2 = Symbol("id2");
    console.log(symbol_2, typeof (symbol_2)) // Symbol(id2) symbol
  
    // Wrapper objects (for BigInt & Symbol)
    const obj_4 = new Object(5n);
    const obj_5 = new Object(Symbol("id"));
  
    console.log(obj_4, typeof (obj_4)); // [BigInt: 5n] object
    console.log(obj_5, typeof (obj_5)); // [Symbol: Symbol(id)] object
  
    // +++++++++++++++ Object.assign() - create a new object by copying properties from 'obj'
  
    // 1
  
    const obj_6 = { x: 1 };
    Object.assign(obj_6, {
      greet() {
        return "Hello!";
      }
    });
    console.log(obj_6, typeof (obj_6)); // { x: 1, greet: [Function: greet] } object
    console.log(obj_6.greet()); // "Hello!"
  
    // 2
  
    const obj_7 = { a: 1 };
    const obj_8 = { b: 2 };
    const obj_9 = Object.assign({}, obj_7, obj_8);
    console.log(obj_9, typeof (obj_9)); // { a: 1, b: 2 } object
  
    // 3
  
    const obj_10 = { name: "Jack" };
    const obj_11 = Object.assign({}, obj_10);
    console.log(obj_11, typeof (obj_11)); //{ name: 'Jack' } object
  
    // 4 - shallow copy
  
    const obj_12 = {
      name: "Peter",
      residence: {
        country: "Slovakia",
        city: "Martin"
      }
    };
  
    const obj_13 = Object.assign({}, obj_12);
    console.log(obj_13, typeof (obj_13)); // { name: 'Peter', residence: { country: 'Slovakia', city: 'Martin' } } object
    console.log(obj_13.residence.city); // Martin
  
    obj_13.residence.city = "Bratislava"
    console.log(obj_12, typeof (obj_12))
    /*
      {
        name: 'Peter',
        residence: { country: 'Slovakia', city: 'Bratislava' }
      } object
    */
    console.log(obj_13, typeof (obj_13))
    /*
      {
        name: 'Peter',
        residence: { country: 'Slovakia', city: 'Bratislava' }
      } object
    */
  
    // 5
  
    const prototypeMethod = {
      greet() {
        console.log(`hello, my name is ${this.name}!`);
      },
    };
  
    function Person(name) {
      this.name = name;
    }
  
    Object.assign(Person.prototype, prototypeMethod);
  
    const obj_14 = new Person("Irma");
    obj_14.age = 25;
    console.log(obj_14, typeof (obj_14)); // Person { name: 'Irma', age: 25 } object
    try {
      console.log(Person.greet())
    } catch (error) {
      console.error(error.message); //Person.greet is not a function
    }
    obj_14.greet(); // hello, my name is Irma!
  
    // +++++++++++++++ Object.create() - create a new object with 'obj' as a prototyper
  
    const proto_1 = {
      greet() {
        console.log("hello!");
      },
    };
  
    const obj_15 = Object.create(proto_1);
    console.log(obj_15, typeof (obj_15)); // {} object
    obj_15.greet(); // hello!
    obj_15.name = "Larisa";
    console.log(obj_15, typeof (obj_15)); // { name: 'Larisa' } object
  
    // +++++++++++++++ Object.defineProperties()
  
    const obj_16 = { name: "Paula" };
  
    Object.defineProperty(obj_16, 'age', {
      value: 33,
      writable: true,
      enumerable: true,
      configurable: true
    })
  
    Object.defineProperties(obj_16, {
      'favColor': {
        value: 'green',
        writable: false,
        enumerable: true,
        configurable: true
      },
      'favSport': {
        value: 'Volleyball',
        writable: false,
        enumerable: false,
        configurable: true
      },
      'favAnimal': {
        value: 'elephant',
        writable: false,
        enumerable: true,
        configurable: false
      },
      'favCity': {
        value: 'Paris',
        writable: false,
        enumerable: false,
        configurable: false
      }
    })
  
    console.log(obj_16, typeof (obj_16)); // { name: 'Paula', age: 33, favColor: 'green', favAnimal: 'elephant' } object
    console.log(Object.keys(obj_16)); //[ 'name', 'age', 'favColor', 'favAnimal' ]
    for (let property in obj_16) {
      console.log(property);
    }
    /*
      name
      age
      favColor
      favAnimal
    */
  
    obj_16.name = "Petra"
    obj_16.age = 27
  
    try {
      obj_16.favColor = "blue"
    } catch (error) {
      console.error(error.message); // Cannot assign to read only property 'favColor' of object '#<Object>'
    }
  
    try {
      obj_16.favSport = "Basketball"
    } catch (error) {
      console.error(error.message); // Cannot assign to read only property 'favSport' of object '#<Object>'
    }
  
    try {
      obj_16.favAnimal = "Tiger"
    } catch (error) {
      console.error(error.message); // Cannot assign to read only property 'favAnimal' of object '#<Object>'
    }
  
    try {
      obj_16.favCity = "Madrid"
    } catch (error) {
      console.error(error.message); // Cannot assign to read only property 'favCity' of object '#<Object>'
    }
  
    console.log(obj_16); // { name: 'Petra', age: 27, favColor: 'green', favAnimal: 'elephant' }
  
    delete obj_16.name;
    delete obj_16.age;
    delete obj_16.favColor;
    delete obj_16.favSport;
  
    try {
      delete obj_16.favAnimal;
    } catch (error) {
      console.error(error.message); // Cannot delete property 'favAnimal' of #<Object>
    }
  
    try {
      delete obj_16.favCity;
    } catch (error) {
      console.error(error.message); // Cannot delete property 'favCity' of #<Object>
    }
  
    console.log(obj_16); // { favAnimal: 'elephant' }
  
    // +++++++++++++++ Object.entries() -  returning a array of pairs [key, value]
  
    const obj_17 = { name: "Dejan", age: 30, favCity: "Belgrade" };
    console.log(Object.entries(obj_17), typeof (Object.entries(obj_17))) // [ [ 'name', 'Dejan' ], [ 'age', 30 ], [ 'favCity', 'Belgrade' ] ] object
  
    // +++++++++++++++ Object.keys() + Object.values()
  
    const obj_18 = { foo: "bar", baz: 42 };
    console.log(Object.keys(obj_18)); // ['foo', 'baz']
    console.log(Object.values(obj_18)); // ['bar', 42]
  
    const obj_19 = ["a", "b", "c"];
    console.log(Object.keys(obj_19)); // [ '0', '1', '2' ]
    console.log(Object.values(obj_19)); // [ 'a', 'b', 'c' ]
  
    const obj_20 = { 0: "a", 1: "b", 2: "c" };
    console.log(Object.keys(obj_20)); // [ '0', '1', '2' ]
    console.log(Object.values(obj_20)); // ['a', 'b', 'c']
  
    const obj_21 = { 100: "a", 2: "b", 7: "c" };
    console.log(Object.keys(obj_21)); // [ '2', '7', '100' ]
    console.log(Object.values(obj_21)); // [ 'b', 'c', 'a' ]
  
    const obj_22 = Object.create(
      {},
      {
        getFoo: {
          value() {
            return this.foo;
          },
        },
      },
    );
    obj_22.foo2 = "bar";
    console.log(Object.keys(obj_22)); // ['foo2']
    console.log(Object.values(obj_22)); // ['bar']
  
    console.log(Object.keys("animal")) // [ '0', '1', '2', '3', '4', '5' ]
    console.log(Object.values("animal")) // [ 'a', 'n', 'i', 'm', 'a', 'l' ]
  
    console.log(Object.keys(104)); // []
    console.log(Object.values(104)); // []
  
    // +++++++++++++++ Object.isExtensible() + Object.preventExtensions()
  
    // NOTE: seald & frozen objects are by definition non-extensible
  
    const obj_23 = {};
    console.log(Object.isExtensible(obj_23)); // true
    obj_23.name = "Mark";
    console.log(obj_23); // { name: 'Mark' }
    console.log(Object.isExtensible(obj_23)); // true
    Object.preventExtensions(obj_23);
    console.log(Object.isExtensible(obj_23)); // false
  
    try {
      obj_23.job = "Web developer";
      console.log(obj_23);
    } catch (error) {
      console.error(error.message); // Cannot add property age, object is not extensible
    }
  
    // +++++++++++++++ Object.freeze() + Object.isFrozen()
  
    const obj_24 = { name: "Mirjana" };
    const obj_25 = Object.freeze(obj_24);
    console.log(Object.isExtensible(obj_24)); // false
    console.log(Object.isExtensible(obj_25)); // false
  
    try {
      obj_24.name = "Milana";
    } catch (error) {
      console.error(error.message); /// Cannot assign to read only property 'name' of object '#<Object>'
    }
  
    console.log(obj_24); // { name: 'Mirjana' }
    console.log(obj_25); // { name: 'Mirjana' }
  
    try {
      obj_25.name = "Milana";
    } catch (error) {
      console.error(error.message); // Cannot assign to read only property 'name' of object '#<Object>'
    }
  
    console.log(obj_24); // { name: 'Mirjana' }
    console.log(obj_25); // { name: 'Mirjana' }
  
    try {
      obj_24.age = 25;
    } catch (error) {
      console.error(error.message); // Cannot add property age, object is not extensible
    }
  
    console.log(obj_24); // { name: 'Mirjana' }
    console.log(obj_25); // { name: 'Mirjana' }
  
    try {
      obj_25.age = 25;
    } catch (error) {
      console.error(error.message); // Cannot add property age, object is not extensible
    }
  
    console.log(obj_24); // { name: 'Mirjana' }
    console.log(obj_25); // { name: 'Mirjana' }
  
    console.log(Object.isFrozen(obj_24)); // true
    console.log(Object.isFrozen(obj_25)); // true
  
    // +++++++++++++++ Object.seal() + Object.isSealed()
  
    const obj_26 = { name: "Svetlana" };
    const obj_27 = Object.seal(obj_26);
    console.log(Object.isExtensible(obj_26)); // false
    console.log(Object.isExtensible(obj_27)); // false
  
    obj_26.name = "Milica";
  
    console.log(obj_26); // { name: 'Milica' }
    console.log(obj_27); // { name: 'Milica' }
  
    obj_27.name = "Milica";
  
    console.log(obj_26); // { name: 'Milica' }
    console.log(obj_27); // { name: 'Milica' }
  
    try {
      obj_26.age = 25;
    } catch (error) {
      console.error(error.message); // Cannot add property age, object is not extensible
    }
  
    console.log(obj_26); // { name: 'Milica' }
    console.log(obj_27); // { name: 'Milica' }
  
    try {
      obj_27.age = 25;
    } catch (error) {
      console.error(error.message); // Cannot add property age, object is not extensible
    }
  
    console.log(obj_26); // { name: 'Milica' }
    console.log(obj_27); // { name: 'Milica' }
  
    console.log(Object.isSealed(obj_26)); // true
    console.log(Object.isSealed(obj_27)); // true
  
    // +++++++++++++++ Object.fromEntries()
  
    // 1
  
    const map_1 = new Map([
      ["name", "Jessika"],
      ["country", "France"]
    ]);
  
    const obj_28 = Object.fromEntries(map_1);
    console.log(obj_28, typeof (obj_28)); // { name: 'Jessika', country: 'France' } object
  
    // 2
  
    const arr_1 = [
      ["music", "pop"],
      ["year", 2024]
    ];
  
    const obj_29 = Object.fromEntries(arr_1);
    console.log(obj_29, typeof (obj_29)); // { music: 'pop', year: 2024 } object
  
    // +++++++++++++++ Object.getOwnPropertyDescriptor(s)()
  
    const obj_30 = { name: "Pavel", gender: "male" };
    console.log(Object.getOwnPropertyDescriptor(obj_30, "gender")); // { value: 'male', writable: true, enumerable: true, configurable: true }
    console.log(Object.getOwnPropertyDescriptor(obj_30, "color")); // undefined
    console.log(Object.getOwnPropertyDescriptors(obj_30));
    /*
      {
        name: {
          value: 'Pavel',
          writable: true,
          enumerable: true,
          configurable: true
        },
        gender: {
          value: 'male',
          writable: true,
          enumerable: true,
          configurable: true
        }
      }
    */
  
    // +++++++++++++++ Object.getOwnPropertyNames() - returning all of the direct object properties, despite being enumerable or not
  
    const obj_31 = { name: "Paula" };
  
    Object.defineProperty(obj_31, 'age', {
      value: 33,
      writable: true,
      enumerable: true,
      configurable: true
    })
  
    Object.defineProperties(obj_31, {
      'favColor': {
        value: 'green',
        writable: false,
        enumerable: true,
        configurable: true
      },
      'favSport': {
        value: 'Volleyball',
        writable: false,
        enumerable: false,
        configurable: true
      },
      'favAnimal': {
        value: 'elephant',
        writable: false,
        enumerable: true,
        configurable: false
      },
      'favCity': {
        value: 'Paris',
        writable: false,
        enumerable: false,
        configurable: false
      }
    })
  
    console.log(Object.keys(obj_31)); // [ 'name', 'age', 'favColor', 'favAnimal' ]
    console.log(Object.getOwnPropertyNames(obj_31)); // [ 'name', 'age', 'favColor', 'favSport', 'favAnimal', 'favCity' ]
  
    // +++++++++++++++ Object.getOwnPropertySymbols()
  
    const obj_32 = {};
    const symbol_3 = Symbol("a");
    const symbol_4 = Symbol.for("b");
  
    obj_32[symbol_3] = "localSymbol";
    obj_32[symbol_4] = "globalSymbol";
  
    const obj_33 = Object.getOwnPropertySymbols(obj_32);
  
    console.log(obj_33.length); // 2
    console.log(obj_33); // [Symbol(a), Symbol(b)]
    console.log(obj_33[0]); // Symbol(a)
    console.log(obj_33[1]); // Symbol(b)
  
    // +++++++++++++++ Object.getPrototypeOf() - vraca prototip objekta
  
    const obj_34 = { name: "Igor", country: "Serbia" };
    console.log(Object.getPrototypeOf(obj_34)); // [Object: null prototype] {}
  
    const proto_2 = { name: "Jack", country: "UK" };
    const obj_35 = Object.create(proto_2);
    console.log(Object.getPrototypeOf(obj_35)); // { name: 'Jack', country: 'UK' }
    console.log(obj_35.name); // Jack
    console.log(Object.getPrototypeOf(obj_35) === proto_2); // true
  
    // +++++++++++++++ Object.setPrototypeOf() - setting a object prototype
  
    const obj_36 = { name: "Igor", country: "Serbia" };
    const proto_3 = { protoProp: 'new_value' };
    Object.setPrototypeOf(obj_36, proto_3);
    console.log(Object.getPrototypeOf(obj_36)); // { protoProp: 'new_value' }
    console.log(obj_36); // { name: 'Igor', country: 'Serbia' }
    console.log(obj_36.protoProp); // new_value
  
    const obj_37 = {};
    const proto_4 = { foo: 'bar' };
  
    console.log(obj_37.foo); // undefined
    Object.setPrototypeOf(obj_37, proto_4);
    console.log(obj_37.foo); // bar
  
    // +++++++++++++++ Object.hasOwn()
  
    // 1
  
    const proto_5 = {
      greet() {
        console.log(`hello, my name is ${this.name}!`);
      },
    };
  
    function Person_2(name) {
      this.name = name;
    }
  
    Object.assign(Person_2.prototype, proto_5);
  
    const obj_38 = new Person_2("Irma");
    console.log(obj_38); // Person_2 { name: 'Irma' }
    console.log(Object.hasOwn(obj_38, "name")); // true
    console.log(Object.hasOwn(obj_38, "greet")); // false
  
    // 2
  
    const obj_39 = { x: 1 };
    Object.assign(obj_39, {
      greet() {
        return "Hello";
      }
    });
  
    console.log(obj_39); // { x: 1, greet: [Function: greet] }
    console.log(Object.hasOwn(obj_39, "x")); // true
    console.log(Object.hasOwn(obj_39, "greet")); // true
  
    // 3
  
    const proto_6 = { color: "Blue", types: ["Navy", "Sky blue", "Sapphire", "Cyan"] };
    const obj_40 = Object.create(proto_6);
  
    console.log(obj_40.color);    // "Blue"
    console.log(obj_40.types); // ["Navy", "Sky blue", "Sapphire", "Cyan"]
    obj_40.size = "Large"
    console.log(obj_40); // { size: 'Large' }
    console.log(Object.hasOwn(obj_40, "color")); // false (because it is inside the prototype)
    console.log(Object.hasOwn(obj_40, "types")); // false (because it is inside the prototype)
    console.log(Object.hasOwn(obj_40, "size")); // true (because it is directly added to the 'obj_31')
  
    // 4
  
    class Person_3 {
      constructor(name) {
        this.name = name; // direct object property
      }
  
      greet() { // method defined in the prototype
        console.log(`Hello, I'm ${this.name}`);
      }
    }
  
    // creating a instance
    const obj_41 = new Person_3("Irma");
    console.log(obj_41); // Person_3 { name: 'Irma' }
    console.log(Object.hasOwn(obj_41, "name")); // true
    console.log(Object.hasOwn(obj_41, "greet")); // false
  
    // +++++++++++++++ Object.is() - checking that two objects are strictly equal
  
    const obj_42 = { user: "user_1", credentials: { email: "email1", password: "password1" } }
    const obj_43 = { user: "user_2", credentials: { email: "email2", password: "password2" } }
    const obj_44 = obj_43;
    const obj_45 = { user: "user_1", credentials: { email: "email1", password: "password1" } }
  
    console.log(Object.is(obj_42, obj_43)); // false
    console.log(Object.is(obj_42, obj_45)); // false
    console.log(Object.is(obj_43, obj_44)); // true
    console.log(Object.is(undefined, undefined)); // true
    console.log(Object.is(null, null)); // true
    console.log(Object.is(true, true)); // true
    console.log(Object.is(false, false)); // true
    console.log(Object.is("text", "text")); // true
    console.log(Object.is("text", "teXt")); // false
    console.log(Object.is(187n, 187)); // false
    console.log(Object.is(187n, 187n)); // true
    console.log(Object.is(Symbol("something"), Symbol("something"))); // false (generates a new unique symbol, even if the passed values are the same)
    console.log(Object.is(Symbol("something2"), Symbol.for("something2"))); // false
    console.log(Object.is(Symbol.for("something3"), Symbol.for("something3"))); // true (it will look for an existing symbol with that key - if it exists, it will return it, if it doesn't, it will create a new symbol)
    console.log(Object.is(NaN, NaN)); // true
    console.log(Object.is(5, 5)); // true
    console.log(Object.is(5, -5)); // false
    console.log(Object.is(5, +5)); // true
    console.log(Object.is(0, -0)); // false
    console.log(Object.is(0, +0)); // true
    console.log(Object.is(-0, +0)); // false
  
    console.log('----------------------');
  
    // +++++++++++++++ Object.prototype
  
    // +++++++++++++++ Object.prototype.hasOwnProperty()
  
    const obj_46 = { name: "Marko" };
    console.log(obj_46.hasOwnProperty("name")); // true
    console.log(obj_46.hasOwnProperty("toString")); // false
    console.log(Object.hasOwn(obj_46, "name")); // true
    console.log(Object.hasOwn(obj_46, "toString")); // false
  
    // +++++++++++++++ Object.prototype.isPrototypeOf()
  
    function Person_4() { }
    const obj_47 = new Person_4();
    console.log(Person_4.prototype.isPrototypeOf(obj_47)); // true
    console.log(obj_47.isPrototypeOf()); // false
    console.log(Object.getPrototypeOf(obj_47) === Person_4.prototype) // true
  
    // +++++++++++++++ Object.prototype.propertyIsEnumerable()
  
    const obj_48 = { name: "Ana" };
    console.log(obj_48.propertyIsEnumerable("name")); // true
    console.log(obj_48.propertyIsEnumerable("toString")); // false
    console.log(Object.getOwnPropertyDescriptor(obj_48, "name").enumerable); // true
    
    try {
      console.log(Object.getOwnPropertyDescriptor(obj_48, "toString").enumerable);
    } catch (error) {
      console.error(error.message); // Cannot read properties of undefined (reading 'enumerable')
    }
  
    // +++++++++++++++ Object.prototype.toLocaleString()
  
    const obj_49 = new Date();
    console.log(obj_49.toLocaleString()); // example: "10/30/2024, 5:10:22 PM" (depending on the localization)
  
  
    // +++++++++++++++ Object.prototype.toString()
  
    const obj_50 = { name: "Marko" };
    console.log(obj_50.toString()); // "[object Object]"
  
    // +++++++++++++++ Object.prototype.valueOf()
  
    const obj_51 = { name: "Marko" };
    console.log(obj_51.valueOf()); // { name: "Marko" }
  
  }
  
  
  
  
  
  
  
  