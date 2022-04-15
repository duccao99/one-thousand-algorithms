/**
 * Problem: calculate the
 * s(n,x) = 2thRoot(x^n + 2thRoot(x^(n-1) + .. + 2thRoot(x^2 + 2thRoot(x^1))))
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
 *   + ret = 2thRoot(x^1) =  2thRoot(x^(5 - 5 + 1)) =  2thRoot(x^(n - i + 1))
 * + i = 4
 *   + ret = 2thRoot(x^2 + ret) = 2thRoot(x^(n - i + 1) + ret)
 *
 */

/**
 *
 * @param {number} n
 */
function sqrt(n) {
  return Math.pow(n, 1 / 2);
}

/**
 *
 * @param {number} n
 * @param {number} x
 *
 *
 */
function fx(n, x) {
  // 2thRoot(x^(n - i + 1) + ret)
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret = sqrt(x ** (n - i + 1) + ret);
  }

  return ret;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`S(${i},${i}) - ${fx(i, i)}`);
  }
}
