/**
 * Problem: check if n was an perfect number
 *
 *
 * Understanding the problem
 * - Perfect number:
 *   + 6
 *     + 6 divisors less than itself: 1,2,3
 *     + sum: 1 + 2 + 3 = 6
 *
 * - n = 5
 * - ret = false
 *
 * - n = 6
 * - ret = true
 *
 *
 *
 */

/**
 *
 * @param {number} n
 */
function getDivisorsOfN(n) {
  let ret = [];

  for (let i = n - 1; i >= 1; --i) {
    if (n % i === 0) ret.push(i);
  }

  return ret;
}
/**
 *
 * @param {number} n
 */
function isPerfectNumber(n) {
  let divisors = getDivisorsOfN(n);
  let sum = 0;

  for (let i = divisors.length - 1; i >= 0; --i) {
    sum = sum + divisors[i];
  }

  return sum === n;
}

/**
 *
 * @param {Number} n
 *
 */
function fx(n) {
  console.log("n: ", n);
  return isPerfectNumber(n);
}

{
  for (let i = 0; i <= 28; ++i) {
    console.log(fx(i));
  }
}
