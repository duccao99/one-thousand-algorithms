/**
 * Problem: calculate the s(n) = sqrt(n! + sqrt((n-1)! + .. + sqrt(2! + sqrt(1!))))
 *
 *
 * Understanding the problem
 * - sqrt: square root
 * - n!:
 *   + 3! = 3 x 2 x 1
 *
 * - n = 5
 * - ret = 0
 *
 * + i = 5
 *   + ret = sqrt(1!) = sqrt((n - i + 1)!)
 * + i = 4
 *   + ret = sqrt(2! + sqrt(1!)) = sqrt((n - i + 1)! + ret)
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
    ret = Math.sqrt(factorial(n - i + 1) + ret);
  }

  return ret;
}

/**
 *
 * @param {number} n
 */
function factorial(n) {
  let ret = 1;

  for (let i = n; i >= 2; --i) {
    ret = ret * i;
  }

  return ret;
}

{
  for (let i = 1; i <= 28; ++i) {
    console.log(`${i} - ${fx(i)}`);
  }
}
