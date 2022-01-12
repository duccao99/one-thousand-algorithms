/**
 * Problem: Sum all values which have the first-digit is a even-number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0 
  const testCase2 = [1]; //  0
  const testCase3 = [1,2]; // 2
  const testCase4 = [1,2,3,4,5]; // 6
  const testCase5 = [12,22,32,42]; // 64
 */

/**
 *
 * @param {Number} n
 */
function getNumberFirstDigit(n) {
  let ret;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret = i;
  }

  return ret;
}

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return !(n & 1);
}

/**
 *
 * @param {Function} getNumberFirstDigit
 * @param {Function} isEvenNumber
 *
 *
 */
const isFirstDigitNumberEven = (getNumberFirstDigit, isEvenNumber) => (n) => {
  return isEvenNumber(getNumberFirstDigit(n));
};

/**
 *
 * @param {Array} a
 */
function E210(a) {
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isFirstDigitNumberEven(getNumberFirstDigit, isEvenNumber)(a[i])) {
      ret += a[i];
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; //  0
  const testCase3 = [1, 2]; // 2
  const testCase4 = [1, 2, 3, 4, 5]; // 6
  const testCase5 = [12, 22, 32, 42]; // 64

  console.log(E210(testCase1));
  console.log(E210(testCase2));
  console.log(E210(testCase3));
  console.log(E210(testCase4));
  console.log(E210(testCase5));
}
