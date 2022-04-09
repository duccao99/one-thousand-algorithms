/**
 * Problem: counts n even divisors
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - even divisors: []
 * - count even divisors: 0
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - even divisors: [2,6]
 * - count even divisors: 2
 *
 *
 *
 *
 */

/**
 *
 * @param {number} n
 */
function isEvenNumber(n) {
  return n % 2 === 0;
}

/**
 *
 * @param {number} n
 */
function getNDivisors(n) {
  let ret = [];

  for (let i = n; i >= 1; --i) {
    if (n % i === 0) {
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
  let count = 0;
  for (let i = n; i >= 1; --i) {
    if (n % i === 0 && isEvenNumber(i)) {
      count++;
    }
  }
  console.log("divisors: ", getNDivisors(n));
  return count;
}

{
  for (let i = 0; i <= 7; ++i) {
    console.log(fx(i));
  }
}
