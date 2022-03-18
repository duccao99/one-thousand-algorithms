/**
 * Problem: write a function to calculate the S(n) = 1/2 + 1/4 + 1/6 + .. + 1/(2n)
 *
 * Understanding the problem
 * - What is S(n) = 1/2 + 1/4 + 1/6 + .. + 1/(2n)
 * - Example:
 *   + S(1) = 1/(2.1)
 *   + S(2) = 1/(2.1) + 1/(2.2)
 *   + S(3) = 1/(2.1) + 1/(2.2) + 1/(2.3)
 *
 * Approach : use loop
 * + ret = 0
 * + i from n to 1
 *   + ret = ret + 1/(2i)
 *
 */

function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret = ret + 1 / (2 * i);
  }

  return ret;
}

{
  for (let n = 100; n >= 1; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx(n)}`);
  }
}
