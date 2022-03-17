/**
 * Problem: write a function to calculate the S(n) = 1 + 1/2 + 1/3 + .. + 1/n
 *
 * Understanding the problem
 * - What is S(n) = 1 + 1/2 + 1/3 + .. + 1/n?
 * - Example:
 *   + S(1) = 1
 *   + S(2) = 1 + 1/2
 *   + S(3) = 1 + 1/2 + 1/3
 *
 * Approach : use loop
 * + ret = 0
 * + i from n to 1
 *   + ret = ret + 1/i
 *
 */

function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret = ret + 1 / i;
  }

  return ret;
}

{
  for (let n = 100; n >= 1; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx(n)}`);
  }
}
