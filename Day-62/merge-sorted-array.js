// Problem: Merge two sorted arrays
// Input: [2,4,5,6] [8,9,10,12]
// Output: [2,4,5,6,8,9,10,12]

// Approach-1
// take two variable with name low and high and point to each of the array, when any element in array is lower than other one increase low and keep high as is repeat the same procedure untill low becomes undefined if high still has element then push remaining element of array to new one to which high is assigned

// This is fragile approach and won't work just keeping for records
// O (n)
function mergeSortedArray(arr1, arr2) {
    let low = 0;
    let high = 0;
    let sortedArray = [];
    while (arr1[low] != undefined || arr2[high] != undefined) {
      if (arr1[low] < arr2[high]) {
        sortedArray.push(arr1[low])
        low++;
      } else {
        sortedArray.push(arr2[high]);
        high++;
      }
    }
    if (high) {
      for (let i = high; i < arr2.length; i++) {
        sortedArray.push(arr2[i]);
      }
    } else if (low) {
        for (let i = low; i < arr1.length; i++) {
        sortedArray.push(arr1[low]);
      }
    }
    return sortedArray;
  }
  
  
  function mergeSortedArray2(arr1, arr2) {
    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;
  
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let sortedArray = [];
    let i = 1;
    let j = 1;
  
    while (arr1Item || arr2Item) {
      // !arr2Item is required if array 2 has less no and lower and reaches to end first then arr1 < undefined will break then code
      if (!arr2Item || arr1Item < arr2Item) {
        sortedArray.push(arr1Item);
        arr1Item = arr1[i];
        i++;
      } else {
        sortedArray.push(arr2Item);
        arr2Item = arr2[j];
        j++;
      }
    }
  return sortedArray;
  
  }
  
  
  
  // mergeSortedArray([1,2,3,9],[8,9,10,11,12]);
  mergeSortedArray2([8,9,10,11,12],[1,2,3]);
  