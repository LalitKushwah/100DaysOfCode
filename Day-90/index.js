
// Nullish coalescing operator

const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

// =========================================================================

// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
const target = {
    message1: "hello",
    message2: "everyone"
  };
  
  const handler1 = {};
  
  const proxy1 = new Proxy(target, handler1);
  console.log(proxy1.message1); // hello
  console.log(proxy1.message2); // everyone

  // =========================================================================
  // Private Field
  class Base {
    static #privateStaticMethod() {
      return 42;
    }
    static publicStaticMethod1() {
      return Base.#privateStaticMethod();
    }
    static publicStaticMethod2() {
      return this.#privateStaticMethod();
    }
  }
  
  class Derived extends Base {}
  
  console.log(Derived.publicStaticMethod1()); // 42
  console.log(Derived.publicStaticMethod2()); // TypeError

  // =========================================================================
  // types array
  let int16View = new Int16Array(buffer);

  // =========================================================================
  // Flat array
  const arr1 = [0, 1, 2, [3, 4]];

  console.log(arr1.flat());
  // expected output: [0, 1, 2, 3, 4]
  
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  
  console.log(arr2.flat(2));
  // expected output: [0, 1, 2, [3, 4]]
  