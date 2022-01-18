/**
 * Problem: Check the one-dimensional array of number, was it contains
 * any prime-number. 
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2]; // 1
  const testCase4 = [1,2,3,4,5]; // 1
  const testCase5 = [1,2,3,4,5,6,7,8,9]; // 1
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (n === 0 || n === 1) return false;

  for (let i = Math.round(Math.sqrt(n)); i >= 2; --i) {
    if (n % i === 0) return false;
  }

  return true;
}

/**
 *
 * @param {Array} a
 */
function E243(a) {
  let flag = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPrimeNumber(a[i])) {
      flag = 1;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2]; // 1
  const testCase4 = [1, 2, 3, 4, 5]; // 1
  const testCase5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1

  console.log(E243(testCase1));
  console.log(E243(testCase2));
  console.log(E243(testCase3));
  console.log(E243(testCase4));
  console.log(E243(testCase5));
}

{
  test1();
}
