function MyPromise(executor) {
  let onResolve;
  function resolve(value) {
    onResolve(value);
  }
  this.then = function (callback) {
    onResolve = callback;
    return this;
  };
  this.catch = function (callback) {};
  executor(resolve);
}

new MyPromise((res, rej) => {
  console.log("Executor function got called");
  setTimeout(() => res("Resolve Called"), 1000);
}).then((response) => console.log(response));
