/**
 * Problem: find n min digit
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * - ret = 1
 *
 * - n = 312
 * - ret = 1
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
  let ret = Number.POSITIVE_INFINITY;

  while (n !== 0) {
    const digit = n % 10;

    if (digit < ret) {
      ret = digit;
    }

    n = Math.floor(n / 10);
  }

  return ret;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - n min digit = ${fx(i)}`);
  }
}
