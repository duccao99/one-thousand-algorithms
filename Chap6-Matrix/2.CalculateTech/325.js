/**
 * Problem: Product the even numbers on a column
 * in matrix of integer number
 * 
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 
 * - col = 0
 *   + ret = 4
 * - col = 1
 *   + ret = 16
 * - col = 2
 *   + ret = 6
 * 
 * 
  const a1 = [[1,2,3],[4,5,6],[7,8,9]];  
  const c1 = 0 // 4
  const c2 = 1 // 16
  const c3 = 2 // 6
 * 
 */

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return !isNaN(n) && n % 2 === 0;
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Number} columnIndex
 */
function E325(matrix, columnIndex) {
  let product = 1;

  for (let i = matrix.length - 1; i >= 0; --i) {
    if (isEvenNumber(matrix[i][columnIndex])) {
      product *= matrix[i][columnIndex];
    }
  }

  return product;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const c1 = 0; // 4
  const c2 = 1; // 16
  const c3 = 2; // 6
  console.log(E325(a1, c1));
  console.log(E325(a1, c2));
  console.log(E325(a1, c3));
}

{
  test1();
}
