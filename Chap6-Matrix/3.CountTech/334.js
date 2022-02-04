/**
 * Problem: Write a function to count the number of positive 
 * number in matrix of real numbers
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 -3            
 * 1| 4 -5 6               
 * 2| -7 8 9              
 * 
 * - ret = 6
 * 
  const a1 = [[1,2,-3],[4,-5,6],[7,-8,9]]; // 6
  const a2 = [[1,2,3],[4,5,6],[7,8,-6]]; // 8
  const a3 = [[1,2,-3],[4,-5,6],[7,-8,-9]]; // 5
  
  * 
 */

/**
 *
 * @param {NUmber} n
 */
function isPositiveNumber(n) {
  return !isNaN(n) && n >= 0;
}

/**
 *
 * @param {Array} arr
 * @param {any} ele
 */
function push(arr, ele) {
  const ret = new Array(arr.length + 1);

  ret[ret.length - 1] = ele;

  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = arr[i];
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array} array
 */
function pourMatrixToArray(matrix) {
  let array = [];
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      array = push(array, matrix[i][j]);
    }
  }
  return array;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 *
 */
function E334(matrix) {
  let a = pourMatrixToArray(matrix);
  let count = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPositiveNumber(a[i])) {
      count++;
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, -3],
    [4, -5, 6],
    [7, -8, 9],
  ]; // 6
  const a2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -6],
  ]; // 8
  const a3 = [
    [1, 2, -3],
    [4, -5, 6],
    [7, -8, -9],
  ]; // 5

  console.log(E334(a1));
  console.log(E334(a2));
  console.log(E334(a3));
}

{
  test1();
}
