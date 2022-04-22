/**
 * Problem: Given a, b. find a,b GCD - Greatest Common Divisor
 *
 *
 * English Grammar
 * - a = 15
 * - b = 10
 * - Since both numbers can be divided by 5
 * divided by means:
 *   + a mod 5 = 0
 *   + b mod 5 = 0
 *  divided by not means:
 *   + 5 mod a = 0
 *   + 5 mod b = 0
 *
 *
 *
 * Understanding the problem
 * - GCD(a,b): Greatest Common Divisor
 * - GCD Example:
 *   + a = 15, b = 10
 *   + GCD (15, 10) = 5
 *   + 15 divisors: 15, 5, 3, 1
 *   + 10 divisors: 10, 5, 2, 1
 *   + Common divisor: 5, 1
 *   + Greatest Common Divisor: 5
 *
 * + step 1: func get n divisors
 * + step 2: get a, b divisors
 * + step 3: get a, b common divisors
 * + step 4: get max step 3
 *
 *
 */

/**
 *
 * @param {number} n
 */
function getNDivisors(n) {
  const ret = [];

  for (let i = n; i >= 0; --i) {
    if (n % i === 0) {
      ret.push(i);
    }
  }

  return ret;
}

/**
 *
 * @param {number} n
 *
 */
function fx1(a, b) {
  const aDivisors = getNDivisors(a);
  const bDivisors = getNDivisors(b);
  const abCommonDivisor = [];

  for (let i = aDivisors.length - 1; i >= 0; --i) {
    for (let j = bDivisors.length - 1; j >= 0; --j) {
      if (aDivisors[i] === bDivisors[j]) {
        abCommonDivisor.push(aDivisors[i]);
      }
    }
  }

  let GreatestCommonDivisor = Number.NEGATIVE_INFINITY;

  for (let i = abCommonDivisor.length - 1; i >= 0; --i) {
    if (abCommonDivisor[i] > GreatestCommonDivisor) {
      GreatestCommonDivisor = abCommonDivisor[i];
    }
  }

  return GreatestCommonDivisor;
}

{
  const a = 10;
  const b = 15;
  console.log(`GCD (${a}, ${b}) = ${fx1(a, b)}`);
}
