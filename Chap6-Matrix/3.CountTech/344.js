/**
 * Problem: Count the number of values exists
 * in matrix of real numbers
 * 
 * Understanding the problem
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 1 2 1            
 * 1| 5 1 3             
 * 2| 1 4 1   
 *         
 * - ret = 5
 * 
 * -- 0 1 2
 * 0| 1 2 1  
 * 1| 2 5 2 
 * 2| 1 2 1
 *   
 * - ret = 3
 *  
  const a1 = [[1,2,1],[5,1,3],[1,4,1]]; // 5
  const a2 = [[1,2,1],[2,5,2],[1,2,1]]; // 3
 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function getMax(matrix) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (matrix[i][j] >= max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}
/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = e;
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function fx(matrix) {
  let indexes = [];
  let max = getMax(matrix);

  for (let i = 0; i <= max; ++i) {
    indexes = push(indexes, 0);
  }

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      indexes[matrix[i][j]] += 1;
    }
  }

  let uniquevalues = [];
  for (let i = indexes.length - 1; i >= 0; --i) {
    if (indexes[i] > 0) {
      uniquevalues = push(uniquevalues, i);
    }
  }

  let count = 0;

  for (let i = uniquevalues.length - 1; i >= 0; --i) {
    count++;
  }

  return count;
}

function test1() {
  const a1 = [
    [1, 2, 1],
    [5, 1, 3],
    [1, 4, 1],
  ]; // 5
  const a2 = [
    [1, 2, 1],
    [2, 5, 2],
    [1, 2, 1],
  ]; // 3

  const a3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // 3
  console.log(fx(a1));
  console.log(fx(a2));
  console.log(fx(a3));
}

{
  test1();
}
