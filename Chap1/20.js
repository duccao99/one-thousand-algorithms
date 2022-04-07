/**
 * Problem: list the divisor of n
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} x
 * @param {Number} n
 *
 */
function fx(n) {
  let divisors = [];

  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

{
  console.log(fx(0));
  console.log(fx(2));
  console.log(fx(3));
}
