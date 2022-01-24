/**
 * Problem: Count the number of palindromic-number
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [121,11,12,13,12321]; // 3
 * 
 * Approach
 * + step 1: func is palindromic
 * + step 2: traverser, check, get result
 */

/**
 *
 * @param {Number} n
 */
function isPalindromicNumber(n) {
  const nString = n.toString();

  for (let i = 0; i < nString.length; ++i) {
    if (nString[i] !== nString[nString.length - i - 1]) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {Number} n
 */
function getNumberDigits(n) {
  let count = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    count++;
  }
  return count;
}

/**
 *
 * @param {Number} n
 */
function isPalindromicNumber(n) {
  /**
   * 12345
   *
   */
  const nLength = getNumberDigits(n);

  for (let i = 0; i < nLength; ++i) {
    if (i !== nLength - i - 1) {
      const linearElement = Math.floor(n / Math.pow(10, nLength - i - 1)) % 10;
      const reverseElement = Math.floor(n / Math.pow(10, i)) % 10;

      if (linearElement !== reverseElement) return false;
    }
  }

  return true;
}

/**
 *
 * @param {Array} a
 */
function E218(a) {
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isPalindromicNumber(a[i])) {
      count++;
    }
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [121, 11, 12, 13, 12321]; // 3

  console.log("First way retsult");
  console.log(E218(testCase1));
  console.log(E218(testCase2));
  console.log(E218(testCase3));
}

/**
 *
 * @param {Array} a
 */
function E218SecondWay(a) {
  let isNotPalindromicCount = 0;

  for (let i = 0; i < a.length; ++i) {
    if (!isPalindromicNumber(a[i])) {
      isNotPalindromicCount++;
    }
  }

  return a.length - isNotPalindromicCount;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [121, 11, 12, 13, 12321]; // 3

  console.log("Second way retsult");
  console.log(E218SecondWay(testCase1));
  console.log(E218SecondWay(testCase2));
  console.log(E218SecondWay(testCase3));
}
