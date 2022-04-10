/**
 * Problem: examine if n was a square number
 *
 *
 * Understanding the problem
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
  /**
   * - 4
   * - sqrt(4) = 2
   * - 2 - 2 === 0 ? true: false
   *
   * - 5
   * - sqrt(5) = 2,23
   * - 2,23 - 2 === 0? true: false
   *
   *
   */
  return Math.sqrt(n) - Math.floor(Math.sqrt(n)) === 0;
}

{
  for (let i = 0; i <= 28; ++i) {
    console.log(`${i} - ${fx(i)}`);
  }
}
