/**
 * Problem: Count the number of `saddle value` in
 * matrix of number. An element was called `saddle value`
 * when it greatest on a row and smallest on a column 
 * 
 * 
 * Understanding the problem
 * - saddle value:
 *   + greatest on a row
 *   + smallest on a column
 *  
 * 
 * - matrix             
 * -- 0 1 2             
 * 0| 6 2 1            
 * 1| 5 1 3             
 * 2| 7 4 1   
 * 
 * - ret = {
 *  count: 1,
 *  values: [5],
 *  coordinate: [[1,0]]
 * }
 * 
 * - matrix             
 * -- 0 1 2 3             
 * 0| 6 2 1 7           
 * 1| 5 1 3 2            
 * 2| 7 4 9 6  
 * 3| 8 2 3 4
 * 
 * - ret = {
 *  count: 1,
 *  values: [5],
 *  coordinate: [[1,0]]
 * }
 *         
 *         
 * 
 * Approach
 * + step 1: get current checking position - checkPos = [i,j] - done
 * + step 2: write a function to check if value at checkPos 
 * is greatest on a row - done
 * + step 3: write a function to check if value at checkPos 
 * is a smallest value on a column 
 * 
 *  
 * 
 * 
  
const a1 = [[6,2,1],[5,1,3],[7,4,1]]; // {count:1,values:[5],coordinate:[[1,0]]]}
  const a2 = [[6,2,1,7],[5,1,3,2],[7,4,9,6],[8,2,3,4]]; // {count:1,values:[5],coordinate:[[1,0]]]}


 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} checkPos
 */
function isSmallestOnColumn(matrix, checkPos) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 6 2 3
   * 1| 5 2 3
   * 2| 7 8 9
   *
   * - checkPos = [1,0]
   *
   */
  let flag = true;

  const checkColumnIndex = checkPos[1];

  for (let i = matrix.length - 1; i >= 0; --i) {
    if (matrix[i][checkColumnIndex] < matrix[checkPos[0]][checkPos[1]]) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array<Array>} matrix
 * @param {Array<Number,Number>} checkPos
 */
function isGreatestOnRow(matrix, checkPos) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 6 2 3
   * 1| 5 2 3
   * 2| 7 8 9
   *
   * - checkPos = [1,0]
   *
   */
  let checkRowIndex = checkPos[0];
  let flag = true;

  for (let i = matrix[checkRowIndex].length - 1; i >= 0; --i) {
    if (matrix[checkRowIndex][i] > matrix[checkPos[0]][checkPos[1]]) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) ret[i] = a[i];
  return ret;
}

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function fx(matrix) {
  let flag = false;

  let ret = {
    count: 0,
    values: [],
    coordinate: [],
  };

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      const checkPos = [i, j];
      let flagCheckRow = isGreatestOnRow(matrix, checkPos);
      let flagCheckColumn = isSmallestOnColumn(matrix, checkPos);

      flag = flagCheckRow && flagCheckColumn;

      if (flag) {
        ret.count++;
        ret.coordinate = push(ret.coordinate, checkPos);
        ret.values = push(ret.values, matrix[i][j]);
      }
    }
  }

  return ret;
}

function test1() {
  const a1 = [
    [6, 2, 1],
    [5, 1, 3],
    [7, 4, 1],
  ]; // {count:1,values:[5],coordinate:[[1,0]]]}

  const a2 = [
    [6, 2, 1, 7],
    [5, 1, 3, 2],
    [7, 4, 9, 6],
    [8, 2, 3, 4],
  ]; // {count:1,values:[5],coordinate:[[1,0]]]}

  const a3 = [
    [1, 2, 4],
    [3, 4, 5],
    [5, 4, 7],
    [5, 6, 6],
  ]; // 1

  console.log(fx(a1));
  console.log(fx(a2));
  console.log(fx(a3));
}

{
  test1();
}
