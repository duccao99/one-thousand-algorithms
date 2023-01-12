/**
 * Problem: Write a function to get Primitive Number
 *
 *
 */

/**
 *
 * @param {number} n
 */
function getNumberDivisor(n) {
  /**
   * + 22
   * + ret: 1,2,4,5,10
   * + divisor: n % i = 0
   *
   */

  const ret = [];

  for (let i = 1; i < n; ++i) {
    if (n % i === 0) {
      ret.push(i);
    }
  }

  return ret;
}

/**
 *
 * @param {number} n
 */
function wasPrimitiveNumber(n) {
  /**
   * Primitive Number: 6
   * + 6
   * + divisors: 1,2,3
   * + k = 1 + 2 + 3 = 6
   * + 6 is primitive number
   *
   */
  const numberDivisors = getNumberDivisor(n);
  let sum = 0;

  for (let i = numberDivisors.length - 1; i >= 0; --i) {
    sum += numberDivisors[i];
  }

  return sum === n;
}

/**
 *
 * @param {number} x
 */
function f(x) {
  return wasPrimitiveNumber(x);
}

const x1 = 33;
const x2 = 23;
const x3 = 6;

console.log(f(x1));
console.log(f(x2));
console.log(f(x3));
