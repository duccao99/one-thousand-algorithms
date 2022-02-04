/**
 * Problem: Sum values on a row in matrix of real numbers
 * 
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 3 
 * 1| 4 5 6
 * 2| 7 8 9
 * - row: 1
 * - ret: 15
 * 
 * 
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 6
  const r1 = 0

  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 15
  const r1 = 1

  const a1 = [[1,2,3],[4,5,6],[7,8,9]]; // 24
  const r1 = 2
 
 * 
  * 
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 * @param {Number} rowIndex
 */
function E322(matrix, rowIndex) {
  let sum = 0;

  for (let i = matrix[rowIndex].length - 1; i >= 0; --i) {
    sum += matrix[rowIndex][i];
  }

  return sum;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 6
  const r1 = 0;

  const a2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 15
  const r2 = 1;

  const a3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 24
  const r3 = 2;

  console.log(E322(a1, r1));
  console.log(E322(a2, r2));
  console.log(E322(a3, r3));
}

{
  test1();
}
