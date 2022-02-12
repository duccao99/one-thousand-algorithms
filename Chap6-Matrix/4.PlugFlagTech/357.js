/**
 * Problem: List all prime lines in matrix of integer
 *
 * Understanding the problem
 * - What is a prime line
 *
 * - matrix
 * -- 0 1 2
 * 0| 1 3 5
 * 1| 2 5 7
 * 2| 3 1 4
 *
 * - [m[0][0],m[0][1],m[0][2]], [m[1][0],m[1][1],m[1][2]],
 *  [m[2][0],m[2][1],m[2][2]]: are lines
 * - [m[0][0], m[0][1], m[0][2]]: is a number line
 * - [m[1][0], m[1][1], m[1][2]]: is a prime line
 * - [m[2][0], m[2][1], m[2][2]]: is either number line or prime line
 *
  const m1 = [[1,3,5],[2,5,7],[3,1,4]] // 1
  const m2 = [[11,13,17],[2,3,-4],[-3,1,-4]] // 0
  const m3 = [[11,13,17],[3,5,7],[-2,-0,-4]] // 0 1
 *
 *
 * Approach
 * + step 0: write helper function like: push, join
 * + step 1: write a function to check if a number is a prime number
 * + step 2: reverse traverse matrix, check each row as line if 
 * it contains only prime number then get it index
 * 
 * 
 * /



 


/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let ret = [];

  for (let i = m.length - 1; i >= 0; --i) {
    const row = m[i];
    let isOnlyPrime = true;

    for (let j = row.length - 1; j >= 0; --j) {
      if (!isPrimeNumber(row[j])) {
        isOnlyPrime = false;
        break;
      }
    }
    if (isOnlyPrime) {
      ret = push(ret, i);
    }
  }

  return join(ret, " ");
}

/**
 *
 * @param {Number} n
 *
 */
function isPrimeNumber(n) {
  if (isNaN(n) || n <= 1) return false;
  for (let i = 2; i <= Math.round(Math.sqrt(n)); ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
*
* @param {Array} a
* @param {any} e

*
*/
function push(a, e) {
  /**
   * - a = [1,2,3]
   * - ret = [1,2,3,4]
   * is there any way to implement this?
   *
   */
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = 0; i <= ret.length - 2; ++i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {string} key
 *
 */
function join(a, key) {
  let ret = "";
  for (let i = a.length - 1; i >= 0; --i) {
    ret += a[i] + key;
  }
  return ret;
}

function test1() {
  const m1 = [
    [1, 3, 5],
    [2, 5, 7],
    [3, 1, 4],
  ]; // 1
  const m2 = [
    [11, 13, 17],
    [2, 3, -4],
    [-3, 1, -4],
  ]; // 0
  const m3 = [
    [11, 13, 17],
    [3, 5, 7],
    [-2, -0, -4],
  ]; // 0 1

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
}
{
  test1();
}
