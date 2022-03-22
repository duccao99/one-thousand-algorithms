/**
 * Problem: write a function to calculate the
 * S(n) = 1 + 1 x 2 + 1 x 2 x 3 + .. + 1 x 2 x 3 x .. x n
 *
 *
 * Understanding the problem
 * - What is S(n) = 1 + 1 x 2 + 1 x 2 x 3 + .. + 1 x 2 x 3 x .. x n
 * - Example:
 *   + S(1) = 1
 *   + S(2) = 1 + 1 x 2 = 3
 *   + S(3) = 1 + 1 x 2 + 1 x 2 x 3 = 9
 *   + S(4) = 1 + 1 x 2 + 1 x 2 x 3 + 1 x 2 x 3 x 4 = 33
 *
 * Approach : use loop
 * + ret = 1
 * + i from n to 1
 *     let temporary = 1
 *   + j from i to 1
 *     + temporary = temporary x j
 *   + ret = ret + temporary
 *
 */

function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    let temporary = 1;
    for (let j = i; j >= 1; --j) {
      temporary = temporary * j;
    }
    ret = ret + temporary;
  }

  return ret;
}

{
  for (let i = 1; i <= 5; ++i) {
    console.log(`f(${i}) = ${fx(i)}`);
  }
}
