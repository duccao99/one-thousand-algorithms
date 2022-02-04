/**
 * Problem: Count the extreme element in matrix of real numbers
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 3 2            
 * 1| 6 5 4             
 * 2| 7 8 9   
 *         
 *   
 * - ret = 3
 *  
  const a1 = [[1,3,2],[6,5,4],[7,8,9]]; // 7
  const a2 = [[1,3,2],[5,5,5],[8,8,8]]; // 3
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function fx(matrix) {
  let count = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (matrix[i][j - 1] === undefined) {
        if (
          matrix[i][j] > matrix[i][j + 1] ||
          matrix[i][j] < matrix[i][j + 1]
        ) {
          count++;
        }
      }
      if (matrix[i][j + 1] === undefined) {
        if (
          matrix[i][j] > matrix[i][j - 1] ||
          matrix[i][j] < matrix[i][j - 1]
        ) {
          count++;
        }
      }
      if (matrix[i][j - 1] !== undefined && matrix[i][j + 1] !== undefined) {
        if (
          (matrix[i][j] > matrix[i][j - 1] &&
            matrix[i][j] > matrix[i][j + 1]) ||
          (matrix[i][j] < matrix[i][j - 1] && matrix[i][j] < matrix[i][j + 1])
        ) {
          count++;
        }
      }
    }
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 3, 2],
    [6, 5, 4],
    [7, 8, 9],
  ]; // 7
  const a2 = [
    [1, 3, 2],
    [5, 5, 5],
    [8, 8, 8],
  ]; // 3
  console.log(fx(a1));
  console.log(fx(a2));
}

{
  test1();
}
