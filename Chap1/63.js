/**
 * Problem: Given a,b. Find a,b least common multiple
 *
 *
 * Understanding the problem
 *
 * LCM(a,b): Least Common Multiple
 *
 * - Approach 1
 * + a = 3
 * + b = 5
 * + 3 multiples: 3, 6, 9, 12, 15, 18, 21, 24, ...
 * + 5 multiples: 5, 10, 15, 20, 25, 30, 35, 40,..
 *
 * + Common multiple: 15
 * + Least Common Multiple: 15
 *
 * - Approach 2
 * Equation: a x b = LCM(a,b) * GCD(a,b)
 * -> LCM(a,b) = (a x b) / GCD(a,b)
 *
 *
 *
 *
 */

/**
 *
 * @param {number} a
 * @param {number} b
 *
 */
function fx2(a, b) {
  function gcd(a, b) {
    /**
     * GCD: Greatest Common Divisor
     * - a = 15
     * - b = 10
     * - a divisors: 1, 3, 5, 15
     * - b divisors: 1, 2, 5, 10
     * - common divisor: 5
     * - greatest common divisor: 5
     *
     * - GCD Recursive Algorithm
     * + a = 15
     * + b = 10
     * + gcd(a,b) = gcd(15,10)
     *
     * + gcd(b, a % 10) = gcd(10,5)
     *
     * + gcd(10,5)
     * + gcd(b, a % 10) = gcd(5, 0)
     *
     * + gcd(5,0)
     * + gcd(b, a % 10) = 5
     *
     *
     *
     *
     *
     */

    // The algorithm
    // if (b === 0) {
    //   return a;
    // }
    // return gcd(b, a % 10);

    /**
     * How to find the recursive algorithm
     * + a = 15
     * + b = 10
     * + ret = 5
     *
     * Euclidean Algorithm
     * + step 1: a,b
     * + step 2: a mod b = R
     * + step 3: a = b, b = R
     * + step 4: repeat step 2, 3 until a mod b = 0 then break
     * + step 5: gcd = b
     *
     * + a = 15, b = 10
     *
     * + a mod b = 15 mod 10 = 5
     * + a = 10, b = 5
     * + gcd = 5
     *
     * + a mod b = 10 mod 5 = 0
     * + break
     * + gcd = 5
     *
     * -> có thể là vọc đại, may mắn tìm ra quy luật
     * hoặc vì bỏ thời gian ra vọc nên thế lực siêu nhiên
     * cho khả năng nghĩ ra quy luật -> the new energy enter
     * to the system to support the desire of this sapiens.
     *
     *
     * +
     *
     *
     *
     * + a mod b = r , r = [1,2,..,b-1]
     *
     *
     * + if
     *
     * + return gcd()
     *
     *
     * + Recursive tech
     *   + if something - return
     *   + recall function
     *   + Example:
     *
     *   Find the recursive algorithm to calculate the
     *   n! = n x (n - 1) x (n - 2) x .. x 2 x 1
     *   + n decrease each time, n, n - 1 so
     *   we might have the recall function like this
     *   factorial(n - 1).
     *   + n decrease until it equal to 1, so we might
     *   have the break condition like this
     *   if (n === 1) {
     *      return n;
     *   }
     *   + log something to figure it out
     *
     *   + recall function: factorial(n - 1)
     *   + break condition:
     *   if (n === 1) {
     *      return n;
     *   }
     *
     *   function factorial(n) {
     *     if(n === 1){
     *      return n;
     *     }
     *
     *     return n x factorial(n - 1);
     *   }
     *
     * - a = 10
     * - b = 15
     *
     * + r = a mod b =  10 mod 15 = 10
     * + a = b = 15
     * + b = r = 10
     * + gcd = b = 10
     *
     * + r = a mod b = 15 mod 10 = 5
     * + a = b = 10
     * + b = r = 5
     * + gcd = b = 5
     *
     * + r = a mod b = 10 mod 5 = 0, break
     * + gcd = 5
     *
     *
     * ->
     * + if b = 0 return a;
     * + gcd(b, a mod b)
     *
     *
     */
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  console.log(`gcd(${a},${b}): ${gcd(a, b)}`);

  return (a * b) / gcd(a, b);
}

/**
 *
 * @param {number} n
 *
 */
function fx1(a, b) {
  let lcm = null;
  let aMultiples = [];
  let bMultiples = [];

  for (let i = 1; i <= Number.POSITIVE_INFINITY; ++i) {
    aMultiples.push(a * i);
    bMultiples.push(b * i);
    let wasFound = false;

    for (let j = 0; j <= aMultiples.length - 1; ++j) {
      for (let k = 0; k <= bMultiples.length - 1; ++k) {
        if (aMultiples[j] === bMultiples[k]) {
          lcm = aMultiples[j];
          wasFound = true;
          break;
        }
      }
      if (wasFound) {
        break;
      }
    }

    if (wasFound) {
      break;
    }
  }

  return lcm;
}

{
  const a1 = 10;
  const b1 = 15;

  const a2 = 10;
  const b2 = 15;

  console.log(`LCM (${a1}, ${b1}) = ${fx1(a1, b1)}`);
  console.log(`LCM (${a2}, ${b2}) = ${fx1(a2, b2)}`);
  console.log("");
  console.log(`LCM (${a1}, ${b1}) = ${fx2(a1, b1)}`);
  console.log(`LCM (${a2}, ${b2}) = ${fx2(a2, b2)}`);
}
