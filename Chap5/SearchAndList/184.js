/**
 * Problem: List all position where it's value 
 * was a prime number in an array number
 * 
 * Understanding the problem:
 * + [] - []
 * + [1] - []
 * + [1,2,3,4,5] - 2 3 5  are prime - 1 2 4
 * 
 * Approach:
 * + step 1: func find prime
 * + step 2: loop, find prime, get position
 */

/**
 * 
 * @param {Number} n 
 */
function isPrime(n) {
  /**
   * Problem: Prime Number
   * 
   * 1: false
   * 2: true
   * 3: true
   * 4: false 
   * 5: true
   * 
   * + n = 1 - return -1
   * + n != 1 
   *   +  loop i from 2 to sqrt(n)
   *      + n % i === 0 -> false
   *   + true
   * 
   */

  if (n === 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


/**
 * 
 * @param {Array} a 
 */
function E184(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (isPrime(a[i])) {
      ret.push(i);
    }
  }

  return ret;
}


{
  const a = [];
  const b = [1];
  const c = [1, 2, 3, 4, 5];

  console.log(E184(a));
  console.log(E184(b));
  console.log(E184(c));


}