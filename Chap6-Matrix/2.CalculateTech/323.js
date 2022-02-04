/**
 * Problem: Product of positive values on a column 
 * in matrix of real numbers
 * 
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 
 * - ret = matrix[0][0] * matrix[1][0] * matrix[2][0]
 * -> loop i from matrix.length -1 to 0
 *    ret*= matrix[i][colIndex]
 * 
 * - colIndex = 0
 * - ret: 28
 * 
 * - colIndex = 1
 * - ret: 80
 * 
 * - colIndex = 2
 * - ret: 162
 * 
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]];  
  const c1 = 0 // 28
  const c2 = 1 // 80
  const c3 = 2 // 162



 * 
 * Approach
 * + step 1: 
 * + step 2: 
 * .. 
 * + step n: 
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 * @param {Number} colIndex
 */
function E323(matrix, colIndex) {
  let product = 1;

  for (let i = matrix.length - 1; i >= 0; --i) {
    product *= matrix[i][colIndex];
  }

  return product;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const c1 = 0; // 28
  const c2 = 1; // 80
  const c3 = 2; // 162
  console.log(E323(a1, c1));
  console.log(E323(a1, c2));
  console.log(E323(a1, c3));
}

{
  test1();
}
