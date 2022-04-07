/**
 * Problem: sum n even divisors
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - even divisors: []
 * - sum even divisors: null
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - even divisors: 2, 6
 * - sum even divisors: 8
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
    if (n % i === 0) divisors.push(i);
  }
  return divisors;
}

/**
 *
 * @param {Number} n
 *
 */
function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    if (n % i === 0 && i % 2 === 0) {
      ret = ret + i;
    }
  }

  console.log("divisors: ", getNDivisors(n));

  return ret;
}

{
  for (let i = 0; i <= 7; ++i) {
    console.log(fx(i));
  }
}
