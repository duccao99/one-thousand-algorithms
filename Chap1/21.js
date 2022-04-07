/**
 * Problem: sum divisors of n
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - sum: 6
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - sum: 12
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

  console.log("divisors: ", divisors);
  let sum = 0;
  for (let i = divisors.length - 1; i >= 0; --i) {
    sum = sum + divisors[i];
  }

  return sum;
}

{
  console.log(fx(0));
  console.log(fx(2));
  console.log(fx(3));
}
