/**
 * Problem: write a function to calculate the
 * S(x,n) = x + x^3 + x^5 + .. + x^(2n+1)
 *
 *
 * Understanding the problem
 * - What is S(x,n) = x + x^3 + x^5 + .. + x^(2n+1)
 * - Example:
 *   + S(4,0) = 4 = 4
 *   + S(5,2) = 5 + 5^3 + 5^5 = 5 + 125 + 3125 = 3255
 *   + S(6,3) = 6 + 6^3 + 6^5 + 6^7 = 6 + 216 + 7776 + 279936 = 287934
 *
 * Approach : use loop
 * + ret = 1
 * + i from n to 0
 *   + ret = ret + Math.pow(x,2*i+1)
 */

function fx(x, n) {
  let ret = 0;

  for (let i = n; i >= 0; --i) {
    ret = ret + Math.pow(x, 2 * i + 1);
  }

  return ret;
}

{
  console.log(fx(4, 1));
  console.log(fx(5, 2));
  console.log(fx(6, 3));
}
