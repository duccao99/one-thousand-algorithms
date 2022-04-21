/**
 * Problem: sum n even digits
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * + ret = 2
 *
 * - n = 46
 * + ret = 10
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
  let ret = 0;

  while (n !== 0) {
    const digit = n % 10;

    if (digit % 2 === 0) {
      ret = ret + digit;
    }

    n = Math.floor(n / 10);
  }

  return ret;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - sum even digits = ${fx(i)}`);
  }
}
