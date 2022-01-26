/**
 * Problem: Count the number of even numbers in one-dimensional 
 * array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2,3,4,5]; // 2
  const testCase4 = [1,2,3,4,5,6,7,8,9]; // 4
  const testCase5 = []; // 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return !(n & 1);
}

/**
 *
 * @param {Array} a
 */
function E216(a) {
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isEvenNumber(a[i])) {
      count++;
    }
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 2
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 4
  const testCase5 = []; //

  for (let i = 1; i < 99; ++i) {
    testCase5.push(i);
  }

  console.log(E216(testCase1));
  console.log(E216(testCase2));
  console.log(E216(testCase3));
  console.log(E216(testCase4));
  console.log(E216(testCase5));
}
