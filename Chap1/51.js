/**
 * Problem: find n max digit
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * - ret = 3
 *
 * - n = 312
 * - ret = 3
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
  let ret = Number.NEGATIVE_INFINITY;

  while (n !== 0) {
    const digit = n % 10;

    if (ret < digit) {
      ret = digit;
    }

    n = Math.floor(n / 10);
  }

  return ret;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - n max digit = ${fx(i)}`);
  }
}
