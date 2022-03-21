/**
 * Problem: write a function to calculate the
 * S(n) = 1 x 2 x 3 x .. x n
 *
 * Understanding the problem
 * - What is S(n) = 1 x 2 x 3 x .. x n
 * - Example:
 *   + S(1) = 1
 *   + S(2) = 1 x 2
 *   + S(3) = 1 x 2 x 3
 *
 *
 * Approach : use loop
 * + ret = 0
 * + i from n to 1
 *   + ret = ret * i
 *
 */

function fx(n) {
  let ret = 1;

  for (let i = n; i >= 1; --i) {
    ret = ret * i;
  }

  return ret;
}

{
  for (let n = 100; n >= 1; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx(n)}`);
  }
}
