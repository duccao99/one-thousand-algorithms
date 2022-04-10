/**
 * Problem: calculate the s(n) = sqrt(2+sqrt(2+..+sqrt(2+sqrt(2))))
 *
 *
 * Understanding the problem
 *
 * - n = 5
 *
 * + i = 5
 *   + ret = sqrt(2)
 * + i = 4
 *   + ret = sqrt(2+ sqrt(2)) = sqrt(2+ret)
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

  for (let i = n; i >= 1; --i) {
    ret = Math.sqrt(2 + ret);
  }

  return ret;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`${i} - ${fx(i)}`);
  }
}
