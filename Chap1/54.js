/**
 * Problem: count n min digit
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
 */

/**
 *
 * @param {number} n
 */
function getNMinDigit(n) {
  let min = Number.POSITIVE_INFINITY;

  while (n !== 0) {
    const digit = n % 10;

    if (digit < min) {
      min = digit;
    }

    n = Math.floor(n / 10);
  }

  return min;
}

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  const nMinDigit = getNMinDigit(n);
  let count = 0;

  while (n !== 0) {
    const digit = n % 10;

    if (nMinDigit === digit) {
      count++;
    }

    n = Math.floor(n / 10);
  }

  return count;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - count n min digit = ${fx(i)}`);
  }
}
