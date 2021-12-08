//

// {
//   let x = "Hello";
// }
// console.log(x);

let a = { a: "lalit" };
const obj = [a];
a = null;
console.log(obj);

function abc(name, isDev) {
  return { name, isDev };
}

const obj1 = { lalit: "lalit" };
console.log(obj1);
console.log(abc("Lalit", true));
