/**
 * Problem: calculate the s(n) = sqrt(1+sqrt(2+sqrt(3+..+sqrt(n-1+sqrt(n)))))
 *
 *
 * Understanding the problem
 * - sqrt: square root
 *
 * - n = 5
 * - ret = 0
 *
 * + i = 5
 *   + ret = sqrt(5) = sqrt(n) = sqrt(i+ ret)
 * + i = 4
 *   + ret = sqrt(4+sqrt(5)) = sqrt(i+ret)
 * + i = 3
 *   + ret = sqrt(3+sqrt(4+sqrt5)) = sqrt(i + ret)
 * + i = 2
 *   + ret = sqrt(2 + sqrt(3+sqrt(4+sqrt5)))  = sqrt(i + ret)
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
    ret = Math.sqrt(i + ret);
  }

  return ret;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`${i} - ${fx(i)}`);
  }
}
