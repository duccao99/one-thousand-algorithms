/**
 * Problem: List all position where it's value was a `square number`
 * in an array number
 * 
 * Understanding the problem
 * + Scenario 1: [] - []
 * + Scenario 2: [1] - 1
 * + Scenario 3: [1, 2, 3, 4, 5] - 1 4
 * 
 * 
 * 
 * Approach
 * + step 1: write a function to check square number
 * + step 2: loop, find square, get position
 */


/**
 * 
 * @param {Number} n 
 */
function isSquareNumber(n) {
  /**
   * Problem: Check Square Number
   * 
   * Understanding the problem
   * - The square number is a number that when we calculate 
   * is square root, the result will be an integer 
   * 
   * - Example: 
   * + 1 - sqrt(1) = 1 - integer -> square number
   * + 2 - sqrt(2) = 1.424... - not an integer -> not a square number
   * + 3 - sqrt(3) = 1.73... - not an integer -> not a square number
   * + 4 - sqrt(4) = 2 - integer -> square number
   * ...
   * and so on
   * 
   * 
   * 
   * 
   * + Scenario 1: 1 - true
   * + Scenario 2: 2 - false
   * + Scenario 3: [1, 2, 3, 4, 5] - 1 4
   * 
   * 
   * Approach
   * + step 1: calculate sqrt(n) 
   *  - Step 1 purpose: calculate sqrt(n) to check if n is a integer or not
   *  - How to check if n is an integer in JS?
   *    + Math.floor
   *    + Javascript toPrecision()
   * + step 2: if the calculated sqrt result is an integer then return true
   *           if floor(sqrt(n)) = sqrt(n) 
   * + step 3: if the calculated sqrt result is not an integer then return false
   * 
   */

  if (Math.floor(Math.sqrt(n)) === Math.sqrt(n)) {
    return true;
  }
  return false;

}


/**
 * 
 * @param {Array} a 
 */
function E185(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (isSquareNumber(a[i])) {
      ret.push(i);
    }
  }

  return ret;
}



{
  const a = [];
  const b = [1];
  const c = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(E185(a)); // []
  console.log(E185(b)); // [0]
  console.log(E185(c)); // [0, 3, 8]



}