/**
 * Problem: write a function to calculate the
 * S(n) = 1/2 + 2/3 + 3/4 + .. +  n/(n + 1)
 *
 * Understanding the problem
 * - What is S(n) = 1/2 + 2/3 + 3/4 + .. +  n/(n + 1)
 * - Example:
 *   + S(1) = 1/2
 *   + S(2) = 1/2 + 2/3
 *   + S(3) = 1/2 + 2/3 + 3/4
 *
 *
 * Approach : use loop
 * + ret = 0
 * + i from n to 1
 *   + ret = ret + i/(i+1)
 *
 */

function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret = ret + i / (i + 1);
  }

  return ret;
}

{
  for (let n = 100; n >= 1; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx(n)}`);
  }
}
