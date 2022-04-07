/**
 * Problem: multiply divisors of n
 *
 *
 * Understanding the problem
 * - n = 5
 * - divisors: 1, 5
 * - multiply: 5
 *
 * - n = 6
 * - divisors: 1, 2, 3, 6
 * - multiply: 36
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

  for (let i = n; i >= 1; --i) {
    divisors.push(i);
  }

  console.log("divisors: ", divisors);

  let multiply = 1;
  for (let i = divisors.length - 1; i >= 0; --i) {
    multiply = multiply * divisors[i];
  }

  return multiply;
}

{
  console.log(fx(0));
  console.log(fx(2));
  console.log(fx(3));
}
