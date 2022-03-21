/**
 * Problem: write a function to calculate the x^n
 *
 *
 * Understanding the problem
 * - What is x^n
 * - Example:
 *   + x = 3, n = 2, x^n = 3^2 = 3 x 3 = 9
 *   + x = 5, n = 4, x^n = 5^4 = 5 x 5 x 5 x 5 = 625
 *
 *
 * Approach : use loop
 * + ret = 1
 * + i from n to 1
 *   + ret = ret * x
 *
 */

function fx(x, n) {
  let ret = 1;

  for (let i = n; i >= 1; --i) {
    ret = ret * x;
  }

  return ret;
}

{
  console.log(fx(3, 2));
  console.log(fx(5, 4));
}
