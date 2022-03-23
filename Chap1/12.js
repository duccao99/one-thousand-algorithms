/**
 * Problem: write a function to calculate the
 * S(n) = x + x^2 + x^3 + .. + x^n
 *
 *
 * Understanding the problem
 * - What is S(x,n) = x + x^2 + x^3 + .. + x^n
 * - Example:
 *   + S(4,1) = 4^1 = 4
 *   + S(5,2) = 5^1 + 5^2 = 5 + 25 = 30
 *   + S(6,3) = 6^1 + 6^2 + 6^3= 6 + 36 + 216 = 258
 *
 *
 *
 * Approach : use loop
 * + ret = 1
 * + i from n to 1
 *   + temporary = 1
 *   + j from i to 1
 *     + temporary = temporary x x
 *   + ret = ret + temporary
 */

function fx(x, n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    let temporary = 1;
    for (let j = i; j >= 1; --j) {
      temporary = temporary * x;
    }
    ret = ret + temporary;
  }

  return ret;
}

{
  console.log(fx(4, 1));
  console.log(fx(5, 2));
  console.log(fx(6, 3));
}
