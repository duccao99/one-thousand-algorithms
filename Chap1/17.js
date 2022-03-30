/**
 * Problem: write a function to calculate the
 * S(x,n) = x + x^2/2! + x^3/3! + .. + x^n/n!
 *
 *
 * Understanding the problem
 * - What is S(x,n) = x + x^2/2! + x^3/3! + .. + x^n/n!
 * - Example:
 *   + S(2,1) = 2/1!
 *   + S(3,2) = 3/1! + 3^2/2!
 *   + S(4,3) = 4/1! + 4^2/2! + 4^3/3!
 *
 *
 *
 */

/**
 *
 * @param {number} n
 */
function factorial(n) {
  /**
   * - 3! = 3 x 2 x 1
   * - 4! = 4 x 3 x 2 x 1
   */
  let ret = 1;

  for (let i = n; i >= 1; --i) {
    ret = ret * i;
  }

  return ret;
}

function fx(x, n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    const numerator = x ** i;
    const denominator = factorial(i);
    ret = ret + numerator / denominator;
  }

  return ret;
}

{
  console.log(fx(2, 1));
  console.log(fx(3, 2));
  console.log(fx(4, 3));
}
