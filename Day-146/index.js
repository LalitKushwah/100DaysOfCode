// Minimum waiting time

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    sum += duration * queriesLeft;
  }
  return sum;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
