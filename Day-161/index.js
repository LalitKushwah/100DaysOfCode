/*

Consider the following operation on an arbitrary positive integer:
If the number is even, divide it by two.
If the number is odd, triple it and add one.

Now form a sequence by performing this operation repeatedly, beginning with the positive integer,
and taking the result at each step as the input for the next step.
The Collatz Conjecture says that this above sequence will always eventually reach the number 1,
regardless of which positive integer is chosen initially.

Eg: 4 > 2 > 1
Eg: 5 > 16 > 8 > 4 > 2 > 1
Eg: 6 > 3 > 10 > 5 > 16 > 8 > 4 > 2 > 1
Eg: 7 > 22 > 11 > 34 > 17 > 52 > 26 > 13 > 40 > 20 > 10 > 5 > 16 > 8 > 4 > 2 > 1

Write a function called findHighestPeak that takes two positive integers as arguments.
The function should return the highest value reached among the collatz conjecture sequences
derived by taking all the integers between the two integer arguments,
as the initial values of the sequences.

*/

function findHighestPeak(start, end) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = start; i <= end; i++) {
    const res = getMaxInCallatzSeq(i);
    if (max < res) {
      max = res;
    }
  }
  return max;
}

function getMaxInCallatzSeq(num) {
  let max = num;
  while (num !== 1) {
    if (num % 2 == 0) {
      num = num / 2;
    } else num = num * 3 + 1;
    max = max > num ? max : num;
  }
  return max;
  // if (num === 1) return 1;
  // if (num % 2 == 0) return Math.max(num, getMaxInCallatzSeq(num / 2));
  // else {
  //   return Math.max(num, getMaxInCallatzSeq(num * 3 + 1));
  // }
}

// console.log(getMaxInCallatzSeq(7));

// test cases
console.log(findHighestPeak(5, 10)); // should print 52
console.log(findHighestPeak(10, 15)); // should print 160
console.log(findHighestPeak(100, 150)); // should print 9232
console.log(findHighestPeak(777, 999)); // should print 250504
