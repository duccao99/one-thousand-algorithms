/**
 * Problem: was n contains all even digits
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * - ret = false
 *
 * - n = 246
 * - ret = true
 *
 *
 */

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let flag = true;

  while (n !== 0) {
    const digit = n % 10;

    if (digit % 2 !== 0) {
      flag = false;
      break;
    }

    n = Math.floor(n / 10);
  }

  return flag;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - was n contains even digits = ${fx(i)}`);
  }
}
