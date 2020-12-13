// basic closure example
function myName(name) {
    let a  = name;
    return function (lastName) {
        return 'My Name is: ' + name + lastName;
    }
}

// const name = myName('Lalit');
// console.log(name('Kushwah'));

// close inside for loop
for (var i=0; i< 3; i++) {
    (function (index) {
        setTimeout(() => {
            console.log(index);
        }, 1000)
    })(i);
}