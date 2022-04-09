/**
 * Problem: find n maximum odd divisor
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - max odd divisor: 5
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - max odd divisor: 3
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function getNOddDivisors(n) {
  let ret = [];

  for (let i = n; i >= 1; --i) {
    if (n % i === 0 && i % 2 !== 0) {
      ret.push(i);
    }
  }

  return ret;
}

/**
 *
 * @param {Number} n
 *
 */
function fx(n) {
  let ret = Number.NEGATIVE_INFINITY;

  for (let i = n; i >= 1; --i) {
    if (n % i === 0 && i % 2 !== 0 && i > ret) {
      ret = i;
    }
  }

  console.log("odd divisors: ", getNOddDivisors(n));

  return ret;
}

{
  for (let i = 0; i <= 7; ++i) {
    console.log(fx(i));
  }
}
