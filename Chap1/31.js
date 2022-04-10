/**
 * Problem: examine if n was an prime number
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
  if (n === 0 || n === 1) return false;

  let ret = true;

  for (let i = n - 1; i >= 2; --i) {
    if (n % i === 0) {
      ret = false;
      break;
    }
  }

  return ret;
}

{
  for (let i = 0; i <= 28; ++i) {
    console.log(`${i} - ${fx(i)}`);
  }
}
