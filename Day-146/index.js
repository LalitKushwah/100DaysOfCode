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

// Bubble sort
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const item = array[j];
      if (item > array[j + 1]) {
        array[j] = array[j + 1];
        array[j + 1] = item;
      }
    }
  }
  return array;
}
