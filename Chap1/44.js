/**
 * Problem: sum n digits
 *
 *
 * Understanding the problem
 *
 * - n = 5
 * - ret = 5
 *
 * - n = 12
 * - ret = 3
 *
 * - n = 123
 * - ret = 6
 *
 * - n = 123
 *   + temporary = floor(n / 10) = (123 / 10) = 12
 *   + temporary = 123 % 10 = 3
 *
 * Modulo
 * + a = nq + r
 * + x mod y = [0, 1, 2,.., y - 1]
 * 
 * + 123 = 12 * 10 + 3
 * + 12 = 1 * 10 + 2
 * + 1 = 0 * 10 + 1
 *

 *
 *
 *
 * + equation: n = aq + r
 * + n = 10
 *   + q = [1,10]
 *   + r = [0,1,2,3,4]
 *
 *   + q > 10, q > n
 *   + r = 10
 * 
 * + n = 123
 * + q = 0
 * + 123 = a * 0 + r
 *   -> r = 123, a = any
 *
 * + n = 12
 * + q = 0 
 * + 12 = a * 0 + r
 *   -> r = 12, a = any
 *   
 *
 */

function modulusExample1() {
  /**
   * x mod y = [0, 1, 2,.., y - 1]
   */
  for (let i = 90; i >= 10; --i) {
    const restrictedIndex = i % 20; // [0, 1, 2,.., 19]

    if (restrictedIndex == 19) {
      // do restrictedIndex = 19 thing
    }

    if (restrictedIndex == 18) {
      // do restrictedIndex = 18 thing
    }
    // ..

    if (restrictedIndex == 0) {
      // do restrictedIndex = 0 thing
    }
  }
}

function modulusExample2() {
  /**
   *
   * @param {number} index
   */
  function printPattern(index) {
    console.log(index);
  }

  /**
   * x mod y = [0, 1, 2, .. , y -1]
   * x mod 0 = error
   */
  for (let i = 90; i >= 10; --i) {
    const restrictedIndex = i % 20; // restrictedIndex = [0, 1, 2,.., 19]
    printPattern(restrictedIndex);
  }
}

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let ret = 0;

  while (n !== 0) {
    ret = ret + (n % 10);
    n = Math.floor(n / 10);
  }

  return ret;
}

{
  for (let i = 1; i <= 123; ++i) {
    console.log(`n = ${i} - sum = ${fx(i)}`);
  }
}
