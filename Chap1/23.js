/**
 * Problem: count divisors of n
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - count: 2
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - count: 4
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function getNDivisors(n) {
  let divisors = [];
  for (let i = n; i >= 1; --i) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

/**
 *
 * @param {Number} x
 * @param {Number} n
 *
 */
function fx(n) {
  let count = 0;

  console.log("divisors: ", getNDivisors(n));

  for (let i = n; i >= 1; --i) {
    if (n % i === 0) {
      count++;
    }
  }

  return count;
}

{
  for (let i = 0; i <= 7; ++i) {
    console.log(fx(i));
  }
}
