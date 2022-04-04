/**
 * Problem: write a function to calculate the
 * S(x,n) = 1 + x + x3/3! + x5/5! + .. + x(2n+1)/(2n+1)!
 *
 *
 * Understanding the problem
 * - What is S(x,n) = 1 + x + x3/3! + x5/5! + .. + x(2n+1)/(2n+1)!
 * - Example:
 *   + S(2,0) = 1 + 2^(2.0+1)/(2.0+1)! = 1 + 2/1! = 1 + 2/1 = 1 + 2 = 3
 *   + S(3,2) = 1 + 3^(2.0+1)/(2.0+1)! + 3^(2.1+1)/(2.1+1)! + 3^(2.2+1)/(2.2+1)!
 *            = 1 + 3^1/1! + 3^3/3! + 3^5/5! = 10.525
 *   + S(4,3) = 1 + 4^(2.0+1)/(2.0+1)! + 4^(2.1+1)/(2.1+1)!
 *              + 4^(2.2+1)/(2.2+1)! + 4^(2.3+1)/(2.3+1)!
 *            = 1 + 4 + 4^3/3! + 4^5/5! + 4^7/7! = 27.4507936
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function factorial(n) {
  /**
   * - 3! = 3 x 2 x 1
   * - 4! = 4 x 3 x 2 x 1
   *
   * + factorial(4)
   *   + n = 4
   *   + factorial(n-1)*n = 4*factorial(3)
   *
   * + factorial(3)
   *    + n = 3
   *    + factorial(n-1)*n = 3*factorial(2)
   *
   * + factorial(2)
   *    + n = 2
   *    + factorial(n-1)*n = 2*factorial(1)
   *
   * + factorial(1)
   *    + n = 1
   *    + factorial(n-1)*n = 1*factorial(0)
   *
   */
  if (n === 1 || n === 0) return 1;
  return factorial(n - 1) * n;
}

/**
 *
 * @param {Number} x
 * @param {Number} n
 *
 */
function fx(x, n) {
  let ret = 1;

  for (let i = n; i >= 0; --i) {
    const numerator = x ** (2 * i + 1);
    const denominator = factorial(2 * i + 1);
    ret = ret + numerator / denominator;
  }

  return ret;
}

/**
 * - Those energy are gone. You can't do multiple stuff. It does not
 * effective. Focus
 */

{
  console.log(fx(2, 0));
  console.log(fx(3, 2));
  console.log(fx(4, 3));
}
