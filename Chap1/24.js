/**
 * Problem: list n odd divisor
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - odd divisors: 1, 5
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - odd divisors: 1, 3
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
function fx1(n) {
  let divisors = [];

  for (let i = n; i >= 1; --i) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  let oddDivisors = [];

  for (let i = divisors.length - 1; i >= 0; --i) {
    if (divisors[i] % 2 !== 0) {
      oddDivisors.push(divisors[i]);
    }
  }

  return oddDivisors;
}

/**
 *
 * @param {Number} n
 */
function fx2(n) {
  let ret = [];

  for (let i = n; i >= 1; --i) {
    if (n % i === 0 && i % 2 !== 0) {
      ret.push(i);
    }
  }

  return ret;
}

{
  for (let i = 0; i <= 7; ++i) {
    console.log(fx1(i));
    // console.log(fx2(i));
  }
}
