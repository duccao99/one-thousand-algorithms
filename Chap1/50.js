/**
 * Problem: find n reverse
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * + ret = 321
 *
 * - n = 46
 * + ret = 64
 *
 *
 * - n = 123
 * - ret = 321
 *
 * + digit = 3
 * + ret = [3]
 *
 * + digit = 2
 * + ret = [3,2]
 *
 * + digit = 1
 * + ret = [3,2,1]
 *
 *
 */

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let ret = [];

  while (n !== 0) {
    const digit = n % 10;

    ret.push(digit);

    n = Math.floor(n / 10);
  }

  return ret.join("");
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - n reverse = ${fx(i)}`);
  }
}
