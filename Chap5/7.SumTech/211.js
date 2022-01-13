/**
 * Problem: Calculate the average sum of all prime-numbers in 
 * one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2,3,4,5]; // (2+3+5)/3 
 * 
 * Approach
 * + step 1: write a function which use to check prime-number
 * + step 2: put all prime-number into an array
 * + step 3: calculate average
 * 
 */

/**
 *
 * @param {Number} n
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
function E211(a) {
  /**
   * O(n^2 + n)
   */
  if (a.length === 0) return 0;

  const primeNumbers = [];

  for (let i = 0; i < a.length; ++i) {
    if (isPrimeNumber(a[i])) {
      primeNumbers.push(a[i]);
    }
  }

  let result = 0;

  for (let i = 0; i < primeNumbers.length; ++i) {
    result += primeNumbers[i];
  }

  result = result / primeNumbers.length;

  return result;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // (2+3+5)/3

  // console.log(E211(testCase1));
  // console.log(E211(testCase2));
  // console.log(E211(testCase3));
  // console.log(E211(testCase4));
  // console.log(E211(testCase5));
}

/**
 *
 * @param {Array} a
 */
function E211Second(a) {
  if (a.length === 0) return 0;

  let result = 0;
  let amountOfPrime = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isPrimeNumber(a[i])) {
      result += a[i];
      amountOfPrime++;
    }
  }

  result = result / amountOfPrime;

  return result;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // (2+3+5)/3

  const testCase3 = [];
  const startTime = performance.now();
  console.log(`Start time: ${startTime}`);
  for (let i = 1; i <= 9999999; ++i) {
    testCase3.push(i);
  }

  // console.log(E211Second(testCase1));
  // console.log(E211Second(testCase2));
  console.log(E211Second(testCase3));
  const endTime = performance.now();
  console.log(`End time: ${endTime}`);
  console.log(`Total executed time : ${(endTime - startTime) / 1000} seconds`);
  // console.log(E211(testCase4));
  // console.log(E211(testCase5));
}
