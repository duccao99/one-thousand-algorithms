/**
 * Problem: Solve the f(x) = ax + b = 0 equation
 *
 *
 * Understanding the problem
 *     ax + b = 0
 * <=> x = -b / a
 *
 * + if a = 0 - return error
 * + if a != 0 - return -b / a
 *
 * + 1 / 0 - error
 *
 *
 * - 5x + 10 = 0
 * <=> x = -10 / 5 = -2
 *
 * Why do we have f(x) = ax + b equation ?
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
function fx(a, b) {
  if (a === 0) return "Error: a should be != 0";
  return -b / a;
}

{
  const a = 5;
  const b = 10;
  console.log(fx(a, b));
}
