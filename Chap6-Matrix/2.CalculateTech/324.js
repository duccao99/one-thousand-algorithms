/**
 * Problem: Sum the positive values on a row in matrix of real numbers
 * 
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 -3
 * 1| 4 -5 6
 * 2| -7 8 9
 * 
 * - rowIndex = 0
 * - sum = matrix[0][0] + matrix[0][1] + matrix[0][2]
 * -> loop i from matrix.length - 1 to 0
 *   sum+=matrix[rowIndex][i]
 * 
  const a1 = [[1,2,-3],[4,-5,6],[-7,8,9]];  
  const r1 = 0 // 3
  const r2 = 1 // 10
  const r3 = 2 // 17
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
 * @param {Array<Array>} matrix
 * @param {Number} rowIndex
 */
function E324(matrix, rowIndex) {
  let sum = 0;

  for (let j = matrix.length - 1; j >= 0; --j) {
    if (isPositiveNumber(matrix[rowIndex][j])) {
      sum += matrix[rowIndex][j];
    }
  }

  return sum;
}

function test1() {
  const a1 = [
    [1, 2, -3],
    [4, -5, 6],
    [-7, 8, 9],
  ];
  const r1 = 0; // 3
  const r2 = 1; // 10
  const r3 = 2; // 17
  console.log(E324(a1, r1));
  console.log(E324(a1, r2));
  console.log(E324(a1, r3));
}

{
  test1();
}
