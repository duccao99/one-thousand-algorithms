/**
 * Problem: Count n digit
 *
 *
 * Understanding the problem
 * - n = 4
 * -> ret = 1
 *
 * - n = 10
 * -> ret = 2
 *
 * - n = 123
 * - ret = 3
 *   + floor(123 / 10) = 12 - 1
 *   + floor(12 / 10) = 1 - 2
 *   + floor(1 / 10) = 0 - 3
 *
 *
 *
 */

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let ret = 0;

  while (n !== 0) {
    n = Math.floor(n / 10);
    ret = ret + 1;
  }

  return ret;
}

{
  for (let i = 1; i <= 1234; ++i) {
    console.log(`n = ${i} - digit = ${fx(i)}`);
  }
}
