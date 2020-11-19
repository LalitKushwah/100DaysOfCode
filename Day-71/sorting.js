const array = [ 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let length = array.length;

function bubbleSort(array) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if(array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}


function selectionSort(array) {
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i+1 ; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

function insertionSort(array) {
  for (let i=0; i< length; i++) {
    if (array[i] > array[0]) {
      array.unshift(array.splice(i,1)[0]);
    } else {
      for (let j = 1; j < i; i++) {
        if (array[i] > array[j-1] && array[i] < array[j]) {
          array.splice(j,0,array.splice(i,0)[0])
        }
      }
    }
  }
  return array;
}

insertionSort(array);

// O(n^2)
// bubbleSort(array)

// O (n^2)
// selectionSort(array);
