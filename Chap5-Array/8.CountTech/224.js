/**
 * Problem: Count the number of perfect-numbers in 
 * one-dimensional array of number
 * 
 * Understanding the problem
 * Perfect number is a number which when we 
 * calculate the sum of it's divisor (not count itself)
 * the result will be equal to it
 * 
 * - 0
 * + divisors: 0/0 errr
 * 
 * - 6
 * + divisors: 1,2,3
 * + 1 + 2 + 3 = 6
 * -> 6 is a perfect number = ))
 * 
 * - 28
 * + divisors: 1,2,4,7,14
 * + 1 + 2 + 4 + 7 + 14 = 28
 * 
 * - 496
 * 
 * - 8128
 * 
  const testCase1 = []; // 0
  const testCase2 = [1,2,3,4,5]; // 0
  const testCase3 = [1,2,3,4,5,6,11,12,22,28]; // 2
 * 
 * Approach
 * + step 1: write a function which use to check if a number is a perfect number
 * + step 2: traversal input array, check, count
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPerfectNumber(n) {
  /**
   * - 6
   * + divisors: 1,2,3
   * + 1 + 2 + 3 = 6
   *
   * + step 1: write a function which use to get number divisors
   * + step 2: calculate sum of step 1, check if it equal to n then return true
   * else return false
   */
  if (n === 0) return false;

  const nDivisors = getNumberDivisors(n);

  let sumDivisor = 0;

  for (let i = nDivisors.length - 1; i >= 0; --i) sumDivisor += nDivisors[i];

  return sumDivisor === n;
}

/**
 *
 * @param {Array} a
 */
function E224(a) {
  let count = 0;
  for (let i = a.length - 1; i >= 0; --i) if (isPerfectNumber(a[i])) count++;
  return count;
}

/**
 *
 * @param {Number} n
 */
function getNumberDivisors(n) {
  const result = [];
  for (let i = 1; i < n; ++i) {
    if (n % i === 0) result.push(i);
  }
  return result;
}

/**
 *
 * @param {Array} a
 */
function E224(a) {
  let count = 0;
  for (let i = 0; i < a.length; ++i) if (isPerfectNumber(a[i])) count++;
  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 0
  const testCase3 = [1, 2, 3, 4, 5, 6, 11, 12, 22, 28]; // 2

  // console.log(E224(testCase1));
  // console.log(E224(testCase2));
  // console.log(E224(testCase3));
}

function checkPerfectNumberFrom0To999999() {
  const sixNineDigits = 999999;
  const mid = Math.round(sixNineDigits / 2);

  async function checkPerfectNumberFrom0ToMid() {
    for (let i = 0; i < mid; ++i) {
      if (await isPerfectNumber(i)) {
        await console.log(`${i} is a perfect number`);
      }
    }
  }
  async function checkPerfectNumberFromMidToEnd() {
    for (let i = sixNineDigits; i >= mid; --i) {
      await console.log(`${i}`);

      if (await isPerfectNumber(i)) {
        await console.log(`${i} is a perfect number`);
      }
    }
  }

  // checkPerfectNumberFrom0ToMid();
  checkPerfectNumberFromMidToEnd();
}

async function asyncLogIfrom0To999999ForLoop() {
  /**
   * i = i + 1
   * - 2 = 0010, 1 = 0001
   * - 2 + 1 = 3 = 0011
   * + 0010
   * + 0001
   * --------
   *   0011
   *
   * - 2 | 1
   * + 0010
   * + 0001
   * ------
   *   0011
   *
   */
  for (let i = 0; i < 999999; i = i | 1) {
    await console.log(i);
  }
}

async function asyncLogIfrom0To999999WhileLoop() {
  let j = 0;
  while (j < 999999) {
    await console.log(`${j}`);
    j++;
  }
}

{
  // asyncLogIfrom0To999999ForLoop();
  // asyncLogIfrom0To999999WhileLoop();
}

function LogIfrom0To999999ForLoop() {
  for (let i = 0; i < 999999; ++i) {
    console.log(i);
  }
}

function LogIfrom0To999999WhileLoop() {
  let j = 0;
  while (j < 999999) {
    console.log(`${j}`);
    j++;
  }
}

{
  // LogIfrom0To999999ForLoop();
  // LogIfrom0To999999WhileLoop();

  function Add(x, y) {
    if (y == 0) return x;
    else return Add(x ^ y, (x & y) << 1);
  }

  for (let i = 0; i < 999999; i = Add(i, 1)) {
    // console.log(i);
  }
}

/**
 * Problem: How to make for loop faster
 *
 */

{
  // checkPerfectNumberFrom0To999999();
  const n1 = Math.pow(2, 12) * (Math.pow(2, 13) - 1);
  console.log(n1);
  console.log(isPerfectNumber(n1));

  const n2 = Math.pow(2, 24) * (Math.pow(2, 25) - 1);
  console.log(n2);
  console.log(isPerfectNumber(n2));
}
