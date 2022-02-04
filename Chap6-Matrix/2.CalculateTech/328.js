/**
 * Problem: Calculate the average of product of positive numbers
 * in matrix of real numbers
 * 
 * Understanding the problem
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 2 -3
 * 1| 4 -5 6
 * 2| -7 8 9
 * 
 * - ret = 1*2*4*6*8*9 / 6
 * 
 * 
  const a1 = [[1,2,-3],[4,-5,6],[-7,8,9]];
  const a2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];  
  const a3 = [[1,-2],[-3,4]];  // 
  const a4 = [[2]];  //2

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
 *
 */
function E328(matrix) {
  let product = 1;
  let count = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (isPositiveNumber(matrix[i][j])) {
        product *= matrix[i][j];
        count++;
      }
    }
  }

  return product / count;
}

function test1() {
  const a1 = [
    [1, 2, -3],
    [4, -5, 6],
    [-7, 8, 9],
  ];
  const a2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  const a3 = [
    [1, -2],
    [-3, 4],
  ]; // 2
  const a4 = [[2]]; //2
  console.log(E328(a1));
  console.log(E328(a2));
  console.log(E328(a3));
  console.log(E328(a4));
}

{
  test1();
}
