/**
 * Problem: calculate the s(n) = sqrt(n+sqrt(n-1+sqrt(n-2+..+sqrt(2+sqrt(1)))))
 *
 *
 * Understanding the problem
 * - sqrt: square root
 *
 * - n = 5
 *
 * + i = 5
 *   + ret = sqrt(1) = sqrt(n-i+1)
 * + i = 4, n - i + 1 = 5 - 4 + 1 = 1 + 1 = 2
 *   + ret = sqrt(2+sqrt(1)) = sqrt(n-i+1+ret)
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
    ret = Math.sqrt(n - i + 1 + ret);
  }

  return ret;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`${i} - ${fx(i)}`);
  }
}
