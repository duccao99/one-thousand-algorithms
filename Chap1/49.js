/**
 * Problem: find n first digit
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * + ret = 1
 *
 * - n = 46
 * + ret = 4
 *
 *
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
  let ret;

  while (n !== 0) {
    ret = n % 10;
    n = Math.floor(n / 10);
  }

  return ret;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - n first digit = ${fx(i)}`);
  }
}
