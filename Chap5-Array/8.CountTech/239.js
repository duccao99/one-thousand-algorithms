/**
 * Problem: Count the number of distinct prime-number 
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [2]; // 1
  const testCase4 = [1,2,2]; // 0
  const testCase5 = [1,2,2,3,3,3,4,4,4,4]; // 0
  const testCase6 = [1,2,2,3,3,3,4,4,4,4,5,5,5,5]; // 0
  const testCase7 = [1,2,3,4,5]; // 3
  const testCase8 = [1,2,3,4,5,3,2]; // 1
 * 
 * Approach 1: check prime func, brute force - n^2n
 * Approach 2: 
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i <= Math.round(Math.sqrt(n)); ++i)
    if (n % i === 0) return false;

  return true;
}

/**
 *
 * @param {Array} a
 */
function E239BruteForce(a) {
  const aLength = a.length;

  let count = 0;

  /**
   * - 1 2 2
   * - result: 0
   * + i = 0, a[i] = a[0] = 1
   *   + j = 1, a[j] = a[1] = 2, isDistinct = true, isPrime = false
   * + i = 1, a[i] = a[1] = 2
   *   + j = 2, a[j] = a[i], isDistinct = false
   * + i = 2, a[i] = a[2] = 2
   *   + j = 3, break child loop, isDistinct = true, isPrime = true
   *
   *
   * - 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5
   */

  if (a.length === 1 && isPrimeNumber(a[0])) return 1;

  for (let i = 0; i < aLength; ++i) {
    let isDistinct = true;

    for (let j = i + 1; j < aLength; ++j) {
      if (a[j] === a[i]) {
        isDistinct = false;
        break;
      }
    }

    for (let k = i - 1; k >= 0; --k) {
      if (a[i] === a[k]) {
        isDistinct = false;
        break;
      }
    }

    if (isDistinct && isPrimeNumber(a[i])) count++;
  }

  return count;
}

function test1() {
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [2]; // 1
  const testCase4 = [1, 2, 2]; // 0
  const testCase5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // 0
  const testCase6 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]; // 0
  const testCase7 = [1, 2, 3, 4, 5]; // 3
  const testCase8 = [1, 2, 3, 4, 5, 3, 2]; // 1

  console.log(E239BruteForce(testCase1));
  console.log(E239BruteForce(testCase2));
  console.log(E239BruteForce(testCase3));
  console.log(E239BruteForce(testCase4));
  console.log(E239BruteForce(testCase5));
  console.log(E239BruteForce(testCase6));
  console.log(E239BruteForce(testCase7));
  console.log(E239BruteForce(testCase8));
}

{
  test1();
}
