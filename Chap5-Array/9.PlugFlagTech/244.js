/**
 * Problem: Check if the array satisfies the following property:
 * "The array does not contain any perfect-number which is greater than 256".
 * If the array satisfies then returns 1, else returns 0
 * 
 * Understanding the problem
 * 
 * + 2^1(2^2-1) = 2(4-1) = 6
 * + 2^6(2^7-1)  
 * + 2^12(2^13-1)
 * 
 * 
  const testCase1 = []; // 1
  const testCase2 = [1]; // 1
  const testCase3 = [1,6,28]; // 1
  const testCase4 = [1,6,2^6(2^7-1)]; // 0
  const testCase5 = [6,2^12(2^13-1)]; // 0
 * 
 * Approach
 * + step 1: isPerfectNumber function
 * + step 2: if(isPerfectNumber(a[i]) && a[i] > 256) flag = 0
 */

/**
 *
 * @param {Number} n
 */
function getNumberDivisor(n) {
  /**
   * 6: 1 2 3
   */
  const divisors = [];
  for (let i = n - 1; i >= 1; i--) {
    if (n % i === 0) divisors.push(i);
  }
  return divisors;
}

/**
 *
 * @param {Number} n
 */
function isPerfectNumber(n) {
  const numberDivisors = getNumberDivisor(n);
  let sumDivisors = 0;

  for (let i = numberDivisors.length - 1; i >= 0; --i) {
    sumDivisors += numberDivisors[i];
  }

  return sumDivisors === n;
}

/**
 *
 * @param {Array} a
 */
function E244(a) {
  let flag = 1;

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPerfectNumber(a[i]) && a[i] > 256) {
      flag = 0;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 1
  const testCase2 = [1]; // 1
  const testCase3 = [1, 6, 28]; // 1
  const testCase4 = [1, 6, 2 ** 6 * (2 ** 7 - 1)]; // 0
  const testCase5 = [6, 2 ** 12 * (2 ** 13 - 1)]; // 0
  console.log(E244(testCase1));
  console.log(E244(testCase2));
  console.log(E244(testCase3));
  console.log(E244(testCase4));
  console.log(E244(testCase5));
}

{
  test1();
}
