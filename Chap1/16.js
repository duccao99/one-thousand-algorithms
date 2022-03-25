/**
 * Problem: write a function to calculate the
 * S(x,n) = x + x^2/(1+2) + x^3/(1+2+3) + .. + x^n/(1+2+..+n)
 *
 *
 * Understanding the problem
 * - What is S(x,n) = x + x^2/(1+2) + x^3/(1+2+3) + .. + x^n/(1+2+..+n)
 * - Example:
 *   + S(2,1) = 2
 *   + S(3,2) = 3 + 3^2/(1+2)
 *   + S(4,3) = 4 + 4^2/(1+2) + 4^3/(1+2+3)
 *
 *
 *
 */

function fx(x, n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    let numerator = x ** i;
    let denominator = 0;
    for (let j = i; j >= 1; --j) {
      denominator += j;
    }
    ret = ret + numerator / denominator;
  }

  return ret;
}

{
  console.log(fx(2, 1));
  console.log(fx(3, 2));
  console.log(fx(4, 3));
}
