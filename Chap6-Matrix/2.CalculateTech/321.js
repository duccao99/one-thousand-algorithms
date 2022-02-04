/**
 * Problem: Multiply the odd values in matrix of integer number
 * 
 * Understanding the problem
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 
  const a2 = [[1,2],[3,4]]; // 
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isOddNumber(n) {
  return !isNaN(n) && n % 2 !== 0;
}

/**
 *
 * @param {Array<Array>} matrix
 */
function E321(matrix) {
  let multiply = 1;
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isOddNumber(matrix[i][j])) {
        multiply *= matrix[i][j];
      }
    }
  }
  return multiply;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; //
  const a2 = [
    [1, 2],
    [3, 4],
  ]; //
  console.log(E321(a1));
  console.log(E321(a2));
}

{
  test1();
}
