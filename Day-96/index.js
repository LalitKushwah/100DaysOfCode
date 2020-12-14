
// Hoisting Example

console.log(demo);
console.log(x);

var x = 20;

function demo () {
    console.log('This is demo function');
}

console.log(x);

// while memory allocation phase - variables are created with undefined value 
//  and functions are created with content inside it