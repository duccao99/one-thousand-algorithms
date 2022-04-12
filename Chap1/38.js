/**
 * Problem: calculate the
 * s(n) = (n+1)thRoot(n + nthRoot(n - 1 + .. + 3rdRoot(2 + 2thRoot(1))))
 *
 *
 * Understanding the problem
 * - nthRoot:
 *   + n = 5, x = 2
 *   + 5thRoot(2) x 5thRoot(2) x 5thRoot(2) x 5thRoot(2) x  5thRoot(2) = 2
 *   + do multiplication 5 = n = nth root times
 *   + nthRoot(x^m) = x^(m/n) ?
 *     + 5thRoot(2) = 2^(1/5)
 *
 * - n = 5
 * - ret = 0
 * - i from n to 1
 *
 * + i = 5
 *   + ret = 2thRoot(1) = (5 - 5 + 2)thRoot(5 - 5 + 1)
 *   = (n - i + 2)thRoot(n - i + 1)
 * + i = 4
 *   + ret = 3rdRoot(2 + 2thRoot(1)) = (5 - 4 + 2)rdRoot(5 - 4 + 1 + ret)
 *   = (n - i + 2)thRoot(n - i + 1 + ret)
 */

/**
 *
 * @param {number} x
 * @param {number} nth
 */
function nthRoot(x, nth) {
  return Math.pow(x, 1 / nth);
}

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret = nthRoot(n - i + 1 + ret, n - i + 2);
  }

  return ret;
}

/**
 *
 * @param {number} n
 */
function factorial(n) {
  let ret = 1;

  for (let i = n; i >= 2; --i) {
    ret = ret * i;
  }

  return ret;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`${i} - ${fx(i)}`);
  }
}
