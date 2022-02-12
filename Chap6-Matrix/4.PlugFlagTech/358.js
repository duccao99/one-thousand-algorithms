/**
 * Problem: List lines that contains at least one 
 * even value in matrix of number
 *
 * Understanding the problem
 * - What is line that contains at least one even value
 *
 * - matrix
 * -- 0 1 2
 * 0| 1 3 5
 * 1| 2 5 7
 * 2| 6 1 4
 *
 * - [m[0][0],m[0][1],m[0][2]], [m[1][0],m[1][1],m[1][2]],
 *  [m[2][0],m[2][1],m[2][2]]: are lines
 * - [m[0][0], m[0][1], m[0][2]]: is a line that contains zero even value
 * - [m[1][0], m[1][1], m[1][2]]: is a line that contains one even value
 * (one as at least meaning)
 * - [m[2][0], m[2][1], m[2][2]]: is a line that contains more than
 * one even value
 *
  const m1 = [[1,3,5],[2,5,7],[6,1,4]] // 1 2
  const m2 = [[11,13,17],[2,3,-4],[-3,1,-5]] // 1 
  const m3 = [[11,13,17],[3,5,7],[-2,-0,-4]] // 2
 *
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
    let isContainsAtLeastOneEvenValue = false;
    for (let j = row.length - 1; j >= 0; --j) {
      if (isEvenNumber(row[j])) {
        isContainsAtLeastOneEvenValue = true;
        break;
      }
    }
    if (isContainsAtLeastOneEvenValue) {
      ret = push(ret, i);
    }
  }

  return join(ret, " ");
}

/**
*
* @param {Array} a
* @param {any} e

*
*/
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = 0; i <= ret.length - 2; i++) {
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

/**
 *
 * @param {Number} n
 *
 */
function isEvenNumber(n) {
  return !isNaN(n) && n % 2 === 0;
}

function test1() {
  const m1 = [
    [1, 3, 5],
    [2, 5, 7],
    [6, 1, 4],
  ]; // 1 2
  const m2 = [
    [11, 13, 17],
    [2, 3, -4],
    [-3, 1, -5],
  ]; // 1
  const m3 = [
    [11, 13, 17],
    [3, 5, 7],
    [-2, -0, -4],
  ]; // 2

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
}
{
  test1();
}
