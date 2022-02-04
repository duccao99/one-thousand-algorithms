/**
 * Problem: Let's sum values on a row in matrix of real numbers
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 3            
 * 1| 8 9 4               
 * 2| 7 6 5              
 * 
 * - rowIndex = 1
 * - Ret = matrix[1][0] + matrix[1][1] + matrix[1][2] 
 * -> for i from matrix.length - 1 to 0
 *    ret += matrix[rowIndex][i]
 * 
 * - rowIndex = 0
 *   + ret = 6
 * - rowIndex = 1
 *   + ret = 21
 * - rowIndex = 2
 *   + ret = 18
 * 
 * 
 * 
 * 
 * 
  const a1 = [[1,2,3],[8,9,4],[7,6,5]]; 
  const r1 = 0 // 6
  const r2 = 1 // 21
  const r3 = 2 // 18
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function E331(matrix, rowIndex) {
  if (rowIndex < 0 || rowIndex > matrix.length - 1) return null;

  let sum = 0;

  for (let j = matrix.length - 1; j >= 0; --j) {
    sum += matrix[rowIndex][j];
  }

  return sum;
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ];
  const r1 = 0; // 6
  const r2 = 1; // 21
  const r3 = 2; // 18
  const r4 = 3; // null
  const r5 = -1; // null

  console.log(E331(a1, r1));
  console.log(E331(a1, r2));
  console.log(E331(a1, r3));
  console.log(E331(a1, r4));
  console.log(E331(a1, r5));
}

{
  test1();
}
