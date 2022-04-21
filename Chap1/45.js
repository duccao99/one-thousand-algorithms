/**
 * Problem: multiply n digits
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * - ret = 1 x 2 x 3 = 6
 *
 * - n = 123
 * - ret = 1;
 * + ret = 3 x 1 = 123 mod 10 x 1 = 3
 * + n = 12 = floor(123 / 10)
 *
 * + ret = 2 x 3 x 1 = 2 x ret = n mod 10 x ret
 * + n = floor(n / 10) = 1
 *
 * + ret = 1 x 2 x 3 x 1 = 1 x ret = n mod 10 x ret
 * + n = floor(n / 10) = 0
 * + break
 *
 *
 */

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let ret = 1;

  while (n !== 0) {
    ret = (n % 10) * ret;
    n = Math.floor(n / 10);
  }

  return ret;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - multiply = ${fx(i)}`);
  }
}
