/**
 * Problem: Let's check if the matrix contains any positive number
 * 
 * Understanding the problem
 * 
  const m1 = [[1,2,3],[-1,-2,-3],[4,5,6]]; // true
  const m2 = [[-1,-2],[-3,-4]]; // false
  const m3 = [[1,2],[-3,-4]]; // true
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return !isNaN(n) && n >= 0;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let flag = false;

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (isPositiveNumber(m[i][j])) {
        flag = true;
        break;
      }
    }
  }

  return flag;
}

function test1() {
  const m1 = [
    [1, 2, 3],
    [-1, -2, -3],
    [4, 5, 6],
  ]; // true
  const m2 = [
    [-1, -2],
    [-3, -4],
  ]; // false
  const m3 = [
    [1, 2],
    [-3, -4],
  ]; // true

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
}
{
  test1();
}
