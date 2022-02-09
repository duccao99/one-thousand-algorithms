/**
 * Problem: Let's check if the matrix contains only positive number
 * 
 * Understanding the problem
 * 
  const m1 = [[1,2,3],[-1,-2,-3],[4,5,6]]; // false
  const m2 = [[-1,-2],[-3,-4]]; // false
  const m3 = [[1,2],[3,4]]; // true
  const m4 = [[28,2],[2,4]]; // true

 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Number} n
 *
 */
function isNegativeNumber(n) {
  return !isNaN(n) && n <= 0;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let flag = true;

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (isNegativeNumber(m[i][j])) {
        flag = false;
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
  ]; // false
  const m2 = [
    [-1, -2],
    [-3, -4],
  ]; // false
  const m3 = [
    [1, 2],
    [3, 4],
  ]; // true
  const m4 = [
    [28, 2],
    [2, 4],
  ]; // true

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
  console.log(fx(m4));
}
{
  test1();
}
