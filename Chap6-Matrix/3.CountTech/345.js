/**
 * Problem: Let's sum the extreme elements in matrix 
 * of real numbers, an extreme element is an element that
 * greater than it's surrounding elements
 * 
 * 
 * Understanding the problem
 * 
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 1            
 * 1| 5 1 3             
 * 2| 1 4 1   
 * 
 * - extreme element position: matrix[0][1], matrix[1][1], matrix[2][1]
 *         
 *  
  const a1 = [[1,2,1],[5,1,3],[1,4,1]]; // 3
  const a2 = [[1,2,1,3],[2,5,2,4],[1,2,1,3],[2,5,2,4]]; // 8
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function fx(matrix) {
  let countExtreme = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (matrix[i][j - 1] !== undefined && matrix[i][j + 1] !== undefined) {
        if (
          (matrix[i][j] > matrix[i][j - 1] &&
            matrix[i][j] > matrix[i][j + 1]) ||
          (matrix[i][j] < matrix[i][j - 1] && matrix[i][j] < matrix[i][j + 1])
        ) {
          countExtreme++;
        }
      }
    }
  }

  return countExtreme;
}

function test1() {
  const a1 = [
    [1, 2, 1],
    [5, 1, 3],
    [1, 4, 1],
  ]; // 3
  const a2 = [
    [1, 2, 1, 3],
    [2, 5, 2, 4],
    [1, 2, 1, 3],
    [2, 5, 2, 4],
  ]; // 8
  console.log(fx(a1));
  console.log(fx(a2));
}

{
  test1();
}
