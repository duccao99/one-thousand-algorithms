/**
 * Problem: sum n divisors which are less than itself
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - sum: 1
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - sum: 6
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 *
 */
function fx(n) {
  let ret = 0;
  let divisors = [];

  for (let i = n - 1; i >= 1; --i) {
    if (n % i === 0) {
      ret = ret + i;
      divisors.push(i);
    }
  }

  console.log("divisors: ", divisors);
  return ret;
}

{
  for (let i = 0; i <= 7; ++i) {
    console.log(fx(i));
  }
}
