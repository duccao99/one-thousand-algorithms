/**
 * Problem: count n max digit
 *
 *
 * Understanding the problem
 *
 * - n = 3123
 * - ret = 2
 *
 * - 12344321
 * - ret = 2
 *
 *
 */

/**
 *
 * @param {number} n
 */
function getNMaxDigit(n) {
  let max = Number.NEGATIVE_INFINITY;

  while (n !== 0) {
    const digit = n % 10;

    if (digit > max) {
      max = digit;
    }

    n = Math.floor(n / 10);
  }

  return max;
}

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  const nMaxDigit = getNMaxDigit(n);
  let count = 0;

  while (n !== 0) {
    const digit = n % 10;

    if (digit === nMaxDigit) {
      count++;
    }

    n = Math.floor(n / 10);
  }

  return count;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - count n max digit = ${fx(i)}`);
  }
}
