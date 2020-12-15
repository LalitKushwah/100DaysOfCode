const obj = {
    a: 1,
    b: {
      c: 2
    },
    d: {
      e: {
        f: 3
      }
    },
    g: {
      h: {
        i: {
          j: 10
        }
      }
    },
    k: {
      l: 20
    }
  }
  
  function flatObject(obj) {
      const flatObject = {};
      const path = []; // current path
  
      function dig(obj) {
          for (let key in obj) {
              path.push(key);
              flatObject[path.join('.')] = obj[key];
              dig(obj[key])
              path.pop();
          }
      }
  
      dig(obj);
      return flatObject;
  }
  
  const flatten = flatObject(obj);
  
  const keys = Object.keys(flatten);
  let sum = 0;
  keys.forEach(key => {
    if (typeof flatten[key] === 'number') {
      sum = sum + flatten[key];
    }
  });
  console.log(sum)