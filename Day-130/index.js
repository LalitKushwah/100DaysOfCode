// add(3,5,4)
// add(3)(5)(4)


function add(num) {
  return function (value) {
    return num + value;
  }
}
console.log(add(3)(5))