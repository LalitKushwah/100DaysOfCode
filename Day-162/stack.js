// Remove brackets from an algebraic string containing + and – operators
// Input : "(a-(b+c)+d)"
// Output : "a-b-c+d"

function simplify(str) {
  let res = [];
  let stack = [];
  stack.push(0);
  for (let i = 0; i < str.length; i++) {
    const input = str[i];

    if (input === "(" && i === 0) {
      continue;
    }

    if (input === "+") {
      if (stack[stack.length - 1] === 1) res.push("-");
      if (stack[stack.length - 1] === 0) res.push("+");
    } else if (input === "-") {
      if (stack[stack.length - 1] === 1) res.push("+");
      if (stack[stack.length - 1] === 0) res.push("-");
    } else if (input === "(" && i > 0) {
      if (str[i - 1] === "-") {
        // can use toggle operator
        const x = stack[stack.length - 1] === 1 ? 0 : 1;
        stack.push(x);
      } else if (str[i - 1] === "+") {
        stack.push(stack[stack.length - 1]);
      }
    } else if (input === ")") stack.pop();
    else res.push(input);
  }
  return res.join("");
}
console.log(simplify("a-(b-c-(d+e))-f"));
