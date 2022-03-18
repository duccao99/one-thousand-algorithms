/**
 * Problem: write a function to calculate the S(n) = 1 + 1/3+ 1/5 +...+1/(2n+1)
 *
 * Understanding the problem
 * - What is S(n) = 1 + 1/3+ 1/5 +...+1/(2n+1)
 * - Example:
 *   + S(0) = 1/(2.0+1)
 *   + S(1) = 1/(2.0+1) + 1/(2.1+1)
 *   + S(2) = 1/(2.0+1) + 1/(2.1+1) + 1/(2.2+1)
 *
 * Approach : use loop
 * + ret = 0
 * + i from n to 1
 *   + ret = ret + 1/(2i+1)
 *
 */

function fx(n) {
  let ret = 0;

  for (let i = n; i >= 0; --i) {
    ret = ret + 1 / (2 * i + 1);
  }

  return ret;
}

{
  for (let n = 100; n >= 0; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx(n)}`);
  }
}
