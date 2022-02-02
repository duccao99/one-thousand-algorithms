/**
 * Problem: Write a function to check if a matrix of number contains 
 * any even value that smaller than 2004 or not
 * 
 * Understanding the problem
 * 
  const a1 = [[1,2],[3,4]]; // true
  const a2 = [[2005,2006],[2007,2008]]; // false
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isNumberSmallerThan2004(n) {
  return !isNaN(n) && n < 2004;
}

/**
 *
 * @param {Array<Array>} matrix
 */
function E316(matrix) {
  let flag = false;

  for (let i = matrix.length - 1; i >= 0; --i) {
    let subFlag = false;
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isNumberSmallerThan2004(matrix[i][j])) {
        subFlag = true;
        break;
      }
    }

    if (subFlag === true) {
      flag = subFlag;
      break;
    }
  }

  return flag;
}

function test1() {
  const a1 = [
    [1, 2],
    [3, 4],
  ]; // true
  const a2 = [
    [2005, 2006],
    [2007, 2008],
  ]; // false

  console.log(E316(a1));
  console.log(E316(a2));
}

{
  test1();
}
