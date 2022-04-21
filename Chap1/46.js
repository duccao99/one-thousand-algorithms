/**
 * Problem: count n odd digits
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * + ret = 2
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
  let ret = 0;

  while (n !== 0) {
    const digit = n % 10;

    if (digit % 2 !== 0) {
      ret = ret + 1;
    }

    n = Math.floor(n / 10);
  }

  return ret;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - odd digits = ${fx(i)}`);
  }
}
