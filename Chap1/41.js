/**
 * Problem: calculate the
 * s(n) = 1/(1+1/1+..+1/(1+1))
 *
 *
 * Understanding the problem
 *
 * - ret = 0
 * - i from n to 1
 * - n = 4
 *
 * + i = 4
 *   + ret = 1 + 1/1
 * + i = 3
 *   + ret = 1 + 1/(1+1/1) = 1 + 1/ret
 * + i = 2
 *   + ret = 1 + 1/(1 + 1/(1+1)) = 1 + 1/ret
 * + i = 1
 *   + 1 + 1/(1 + 1/(1 + 1/(1+1))) = 1 + 1/ret
 *
 *
 */

/**
 *
 * @param {number} n
 * @param {number} x
 *
 *
 */
function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    if (i === n) {
      ret = 1 + 1 / 1;
    }

    if (i !== n) {
      ret = 1 + 1 / ret;
    }
  }

  return ret;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`S(${i}) - ${fx(i)}`);
  }
}
