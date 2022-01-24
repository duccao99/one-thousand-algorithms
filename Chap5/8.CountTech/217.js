/**
 * Problem: Count the number of element which is divisible by 7
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2,3,4,5]; // 0
  const testCase3 = [1,2,3,4,5,6,7,8,9]; // 1
  const testCase4 = [7,14,21,28]; // 4
 * 
 * Approach
 * + step 1: write a function which use to check if the number is divisible by 7
 * + step 2: traverse, check, count
 * 
 */

/**
 *
 * @param {Number} n
 */
function isNumberDivisibleBy7(n) {
  return n % 7 === 0;
}

/**
 *
 * @param {Array} a
 */
function E217(a) {
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isNumberDivisibleBy7(a[i])) {
      count++;
    }
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 0
  const testCase3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1
  const testCase4 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]; // 10

  console.log(E217(testCase1));
  console.log(E217(testCase2));
  console.log(E217(testCase3));
  console.log(E217(testCase4));
}

/**
 *
 * @param {Array} a
 */
function E217SecondWay(a) {
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (!isNumberDivisibleBy7(a[i])) {
      count++;
    }
  }

  return a.length - count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 0
  const testCase3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1
  const testCase4 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]; // 10

  console.log(E217SecondWay(testCase1));
  console.log(E217SecondWay(testCase2));
  console.log(E217SecondWay(testCase3));
  console.log(E217SecondWay(testCase4));
}

/**
 * + case 1: if the array contains a lot element that is divisible by 7
 *  + handle case 1 by using the first way:  ~O(2 * n + 1 * k + 1)
 *  + handle case 1 by using the second way:  ~O(2 * n + 1)
 * -> We realise that we should use the second way to handle case 1
 * -> We realise that if the execute time is long means the array contains
 * a lot element that is divisible by 7
 *
 *
 * + case 2: if the array contains a lot element that isn't divisible by 7
 *  + handle case 2 by using the first way:  ~O(2 * n + 1)
 *  + handle case 2 by using the second way:  ~O(2 * n + 1 * k + 1)
 * -> We realise that we should use the first way to handle case 2
 * -> We realise that if the execute time is long means the array contains
 * a lot element that isn't divisible by 7
 *
 *
 * + case 3: if the array contains approximately the amount of number which are
 * either divisible by 7 or not divisible by 7 we can use any way.
 *
 */
