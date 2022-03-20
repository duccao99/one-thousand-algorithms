/**
 * Problem: write a function to calculate the
 * S(n) = 1/2 + 3/4 + 5/6 + .. +  (2n+1)/(2n + 2)
 *
 * Understanding the problem
 * - What is S(n) = 1/2 + 3/4 + 5/6 + .. +  (2n+1)/(2n + 2)
 * - Example:
 *   + S(0) = 1/2
 *   + S(1) = 1/2 + 3/4
 *   + S(2) = 1/2 + 3/4 + 5/6
 *
 *
 * Approach : use loop
 * + ret = 0
 * + i from n to 1
 *   + ret = ret + (2i+1)/(2i+2)
 *
 */

function fx(n) {
  let ret = 0;

  for (let i = n; i >= 0; --i) {
    ret = ret + (2 * i + 1) / (2 * i + 2);
  }

  return ret;
}

{
  for (let n = 100; n >= 0; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx(n)}`);
  }
}
