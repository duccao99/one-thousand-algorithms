/**
 * Problem: List all negative lines in a matrix of number
 *
 * Understanding the problem
 * - What is negative line
 *
 * - matrix
 * -- 0 1 2
 * 0| 1 3 4
 * 1| -2 -2 -4
 * 2| -3 1 -4
 *
 * - [m[0][0],m[0][1],m[0][2]], [m[1][0],m[1][1],m[1][2]],
 *  [m[2][0],m[2][1],m[2][2]]: are lines
 * - [m[0][0], m[0][1], m[0][2]]: is a positive line
 * - [m[1][0], m[1][1], m[1][2]]: is a negative line
 * - [m[2][0], m[2][1], m[2][2]]: is either positive line or negative line
 *
 *
  const m1 = [[1,3,4],[-2,-2,-4],[-3,1,-4]] // 1
  const m2 = [[-1,-3,-4],[2,2,-4],[-3,1,-4]] // 0
  const m3 = [[-1,-3,-4],[2,2,-4],[-3,-1,-4]] // 0 2
 *
 */

/**
 *
 * @param {Array} a
 * @param {Number} e
 *
 *
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
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
  let ret = ``;
  for (let i = a.length - 1; i >= 0; i--) {
    ret += a[i] + key;
  }
  return ret;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let ret = [];
  for (let i = m.length - 1; i >= 0; --i) {
    const row = m[i];
    let flag = true;
    for (let j = row.length - 1; j >= 0; --j) {
      if (row[j] > 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      ret = push(ret, i);
    }
  }
  return join(ret, " ");
}

function test1() {
  const m1 = [
    [1, 3, 4],
    [-2, -2, -4],
    [-3, 1, -4],
  ]; // 1
  const m2 = [
    [-1, -3, -4],
    [2, 2, -4],
    [-3, 1, -4],
  ]; // 0
  const m3 = [
    [-1, -3, -4],
    [2, 2, -4],
    [-3, -1, -4],
  ]; // 0 2

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
}
{
  test1();
}
