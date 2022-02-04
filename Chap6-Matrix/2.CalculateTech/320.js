/**
 * Problem: Sum the positive value in matrix of real numbers
 * 
 * Understanding the problem
 * 
  const a1 = [[1.1,1.2],[1.3,1.4]]; // 
  const a2 = [[1,2,3],[4,5,6],[7,8,9]]; // 
  const a3 = [[1,2,3],[-1,-2,-3],[4,-5,-6]]; // 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return n >= 0;
}
/**
 *
 * @param {Array<Array>} matrix
 */
function E320(matrix) {
  let sum = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isPositiveNumber(matrix[i][j])) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

function test1() {
  const a1 = [
    [1.1, 1.2],
    [1.3, 1.4],
  ]; //
  const a2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; //
  const a3 = [
    [1, 2, 3],
    [-1, -2, -3],
    [4, -5, -6],
  ]; //

  console.log(E320(a1));
  console.log(E320(a2));
  console.log(E320(a3));
}

{
  test1();
}
