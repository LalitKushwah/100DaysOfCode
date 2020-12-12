// Object.freeze()
// Object.seal()
// Object.defineProperties(obj, 'property', {value: '', writable: false})

const a = [1,2,3, {address: {city: 'indore'}}];
const b = [...a];
b[3].address.city = 'Pune';

console.log(a);
console.log(b);

const myObj = {
    name: "Lalit",
    age: 26,
    address: {
        city: "Indore"
    }
};

Object.freeze(myObj);

myObj.address.city = "Pune";
// myObj.name = "XYZ";
// myObj.lastName = "Kushwah";

console.log(myObj);