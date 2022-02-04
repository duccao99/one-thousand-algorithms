/**
 * Problem: Let's sum odd values on a column in 
 * matrix of integer numbers
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 1 3            
 * 1| 8 9 4               
 * 2| 7 3 5              
 * 
 * - colIndex = 0
 *   + sum = matrix[0][0] +  matrix[2][0]
 *   -> i from matrix.length to 0
 *   -> sum += matrix[i][colIndex] if it was an odd number
 * - colIndex = 1
 * - colIndex = 2
 * 
 * 
 * 
  const a1 = [[1,1,3],[8,9,4],[7,3,5]]; 
  const c1 = 0 // 8
  const c2 = 1 // 13
  const c3 = 2 // 8
  const c4 = -1 // null 
  const c5 = 4 // null

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
 * @param {Number}columnIndex
 *
 */
function E332(matrix, columnIndex) {
  if (columnIndex < 0 || columnIndex > matrix[0].length - 1) return null;
  let sum = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    if (isOddNumber(matrix[i][columnIndex])) {
      sum += matrix[i][columnIndex];
    }
  }

  return sum;
}

function test1() {
  const a1 = [
    [1, 1, 3],
    [8, 9, 4],
    [7, 3, 5],
  ];
  const c1 = 0; // 8
  const c2 = 1; // 13
  const c3 = 2; // 8
  const c4 = -1; // null
  const c5 = 4; // null

  console.log(E332(a1, c1));
  console.log(E332(a1, c2));
  console.log(E332(a1, c3));
  console.log(E332(a1, c4));
  console.log(E332(a1, c5));
}

{
  test1();
}
