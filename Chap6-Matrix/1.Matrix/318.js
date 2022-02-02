/**
 * Problem: Write a function to calculate the summation 
 * of the matrix of number
 * 
 * Understanding the problem
 * 
  const a1 = [[1,2,-3],[4,5,-6],[7,8,-9]]; // -18
  const a2 = [[-1,-2],[-3,-4]]; // -10
  const a3 = [[1,2],[3,4]]; // 0
 * 
 * Approach
 * + step 1: write a function to check if a number was a negative number
 * + step 2: traverse matrix, calculate the sum of negative value
 */

/**
 *
 * @param {Number} n
 */
function wasNegativeNumber(n) {
  return !isNaN(n) && n <= 0;
}
/**
 *
 * @param {Array<Array>} matrix
 */
function E318(matrix) {
  let sum = 0;
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (wasNegativeNumber(matrix[i][j])) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function test1() {
  const a1 = [
    [1, 2, -3],
    [4, 5, -6],
    [7, 8, -9],
  ]; // -18
  const a2 = [
    [-1, -2],
    [-3, -4],
  ]; // -10
  const a3 = [
    [1, 2],
    [3, 4],
  ]; // 0

  console.log(E318(a1));
  console.log(E318(a2));
  console.log(E318(a3));
}

{
  test1();
}
