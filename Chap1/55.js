/**
 * Problem: count n first digit
 *
 *
 * Understanding the problem
 *
 * - n = 1123
 * - ret = 2
 *
 * - n = 1010
 * - ret = 2
 *
 * - n = 23452345
 * - ret = 2
 *
 *
 */

/**
 *
 * @param {number} n
 */
function getNFirstDigit(n) {
  let ret;

  while (n !== 0) {
    const digit = n % 10;

    ret = digit;

    n = Math.floor(n / 10);
  }

  return ret;
}

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  const nFirstDigit = getNFirstDigit(n);
  let count = 0;

  while (n !== 0) {
    const digit = n % 10;

    if (digit === nFirstDigit) {
      count++;
    }

    n = Math.floor(n / 10);
  }

  return count;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - count n first digit = ${fx(i)}`);
  }
}
