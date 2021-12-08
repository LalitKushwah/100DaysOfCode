const input = { outer: "outer", l1: { l2: "lalit", l21: { l3: "Kushwah" } } };

function flattenObj(obj) {
  let flattenedObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key]) {
      //Object.assign(flattenedObj, flattenObj(obj[key]))
      flattenedObj = { ...flattenedObj, ...flattenObj(obj[key]) };
    } else {
      flattenedObj[key] = obj[key];
    }
  });
  return flattenedObj;
}
console.log(flattenObj(input));
