/**
 * Problem: Count the number of value which has the last digit is
 * equal to 5 in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2,3,4,5]; // 1
  const testCase4 = [5,10,15,20,25,30,35,40]; // 4
  const testCase5 = [5,10,15,20,25,30,35,40,125,1235,12345]; // 7
 * 
 * Approach
 * + step 1: write a function which use to get the last digit of an number
 * + step 2: traverse input array, check, count 
 */

/**
 *
 * @param {Number} n
 */
function getNumberLastDigit(n) {
  return n % 10;
}

/**
 *
 * @param {Array} a
 */
function E220(a) {
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (getNumberLastDigit(a[i]) === 5) {
      count++;
    }
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 1
  const testCase4 = [5, 10, 15, 20, 25, 30, 35, 40]; // 4
  const testCase5 = [5, 10, 15, 20, 25, 30, 35, 40, 125, 1235, 12345]; // 7

  console.log(E220(testCase1));
  console.log(E220(testCase2));
  console.log(E220(testCase3));
  console.log(E220(testCase4));
  console.log(E220(testCase5));
}

/**
 *
 * @param {Array} a
 */
function E220ArrayReverseTraverse(a) {
  let count = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    if (getNumberLastDigit(a[i]) === 5) count++;
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 1
  const testCase4 = [5, 10, 15, 20, 25, 30, 35, 40]; // 4
  const testCase5 = [5, 10, 15, 20, 25, 30, 35, 40, 125, 1235, 12345]; // 7

  console.log("");
  console.log(E220ArrayReverseTraverse(testCase1));
  console.log(E220ArrayReverseTraverse(testCase2));
  console.log(E220ArrayReverseTraverse(testCase3));
  console.log(E220ArrayReverseTraverse(testCase4));
  console.log(E220ArrayReverseTraverse(testCase5));
}

/**
 *
 * @param {Array} a
 */
function E220ArrayTraverseFromMid(a) {
  let count = 0;

  const mid = Math.round(a.length / 2);

  for (let i = mid; i >= 0; --i) {
    if (getNumberLastDigit(a[i]) === 5) count++;
  }

  for (let i = mid; i <= a.length - 1; ++i) {
    if (getNumberLastDigit(a[i]) === 5) count++;
  }

  if (getNumberLastDigit(a[mid]) === 5) count--;

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 1
  const testCase4 = [5, 10, 15, 20, 25, 30, 35, 40]; // 4
  const testCase5 = [5, 10, 15, 20, 25, 30, 35, 40, 125, 1235, 12345]; // 7
  console.log("");
  console.log(E220ArrayTraverseFromMid(testCase1));
  console.log(E220ArrayTraverseFromMid(testCase2));
  console.log(E220ArrayTraverseFromMid(testCase3));
  console.log(E220ArrayTraverseFromMid(testCase4));
  console.log(E220ArrayTraverseFromMid(testCase5));

  const testCase6 = [];

  for (let i = 0; i < 100; ++i) {
    testCase6.push(i);
  }
  console.log(E220ArrayTraverseFromMid(testCase6));
}
