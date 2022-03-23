/**
 * Problem: write a function to calculate the
 * S(n) = x^2 + x^4 + x^6 + .. + x^2n
 *
 *
 * Understanding the problem
 * - What is S(x,n) = x^2 + x^4 + x^6 + .. + x^2n
 * - Example:
 *   + S(4,1) = 4^2 = 16
 *   + S(5,2) = 5^2 + 5^4 = 25 + 625 = 650
 *   + S(6,3) = 6^2 + 6^4 + 6^6 = 36 + 1296 + 46656 = 47988
 *
 *
 *
 * Approach : use loop
 * + ret = 1
 * + i from n to 1
 *   + ret = ret + Math.pow(x,2*i)
 */

function fx(x, n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret = ret + Math.pow(x, 2 * i);
  }

  return ret;
}

{
  console.log(fx(4, 1));
  console.log(fx(5, 2));
  console.log(fx(6, 3));
}
