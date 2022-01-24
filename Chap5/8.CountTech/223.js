/**
 * Problem: Count the number of prime-numbers in one-dimensional 
 * array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2,3,4,5]; // 3
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 4
 * 
 * Approach
 * + step 1: write a function which use to check if the number is a prime-number
 * + step 2: traverse input array, check prime, count
 */

/**
 *
 * @param {Numbers} n
 */
function isPrimeNumber(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) return false;
  }

  return true;
}

/**
 *
 * @param {Array} a
 */
function E223(a) {
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isPrimeNumber(a[i])) count++;
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2, 3, 4, 5]; // 3
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 4

  console.log(E223(testCase1));
  console.log(E223(testCase2));
  console.log(E223(testCase3));
  console.log(E223(testCase4));
}
