function getClosestOne(input, expInput) {
  if (!input.length) return null;
  if (input.length === 1) return input[0];

  let min = Number.POSITIVE_INFINITY;
  let index = 0;
  for (let i = 0; i < input.length; i++) {
    const inp = input[i];
    const diff = expInput > inp ? expInput - inp : inp - expInput;
    const res = Math.min(diff, min);
    min = res === diff ? diff : min;
    index = res === diff ? i : index;
  }
  return input[index];
}
console.log(getClosestOne([10, 29, 40, 28], 37));
