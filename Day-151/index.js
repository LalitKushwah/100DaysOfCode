// Tandem bycycle problem

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b); // ascending
  blueShirtSpeeds.sort((a, b) => a - b);
  const pair = [];
  if (fastest) {
    let index = 0;
    for (let i = redShirtSpeeds.length - 1; i >= 0; i--) {
      pair.push([redShirtSpeeds[i], blueShirtSpeeds[index]]);
      index++;
    }
  } else {
    let index = blueShirtSpeeds.length - 1;
    for (let i = redShirtSpeeds.length - 1; i >= 0; i--) {
      pair.push([redShirtSpeeds[i], blueShirtSpeeds[index]]);
      index--;
    }
  }
  console.log(pair);
  let sum = 0;
  for (let i = 0; i < pair.length; i++) {
    sum += Math.max(pair[i][0], pair[i][1]);
  }
  return sum;
}

// simplified
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b); // ascending
  blueShirtSpeeds.sort((a, b) => a - b);
  const pair = [];
  let index = fastest ? 0 : blueShirtSpeeds.length - 1;
  for (let i = redShirtSpeeds.length - 1; i >= 0; i--) {
    pair.push([redShirtSpeeds[i], blueShirtSpeeds[index]]);
    index += fastest ? 1 : -1;
  }
  const res = pair.reduce((acc, [a, b]) => {
    return acc + Math.max(a, b);
  }, 0);

  return res;
}
