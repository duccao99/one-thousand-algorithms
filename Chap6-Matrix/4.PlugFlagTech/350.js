/**
 * Problem: Let's check if the matrix contains any odd number
 * 
 * Understanding the problem
 * 
  const m1 = [[1,2,3],[-1,-2,-3],[4,5,6]]; // true
  const m2 = [[-1,-2],[-3,-4]]; // true
  const m3 = [[1,2],[-3,-4]]; // true
  const m4 = [[28,2],[-2,-4]]; // false

 * 
 * 
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 *
 * 
 */

/**
 *
 * @param {Array} n
 *
 */
function isOddNumber(n) {
  return !isNaN(n) && n % 2 !== 0;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  let flag = false;

  const matrixMiddlePosition = [
    Math.floor(m.length / 2),
    Math.floor(m[0].length / 2),
  ];

  for (let i = 0; i <= matrixMiddlePosition[0]; ++i) {
    for (let j = 0; j <= m[i].length - 1; j++) {
      if (isOddNumber(m[i][j])) {
        flag = true;
        break;
      }
      if (j === matrixMiddlePosition[1] && i === matrixMiddlePosition[0]) {
        break;
      }
    }
  }

  if (flag === false) {
    for (let i = matrixMiddlePosition[0]; i <= m.length - 1; ++i) {
      for (let j = 0; j <= m[i].length - 1; j++) {
        if (i === matrixMiddlePosition[0]) {
          j = matrixMiddlePosition[1] + 1;
        }
        if (isOddNumber(m[i][j])) {
          flag = true;
          break;
        }
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
  ]; // true
  const m3 = [
    [1, 2],
    [-3, -4],
  ]; // true
  const m4 = [
    [28, 2],
    [-2, -4],
  ]; // false

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
  console.log(fx(m4));
}
{
  test1();
}
