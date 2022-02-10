/**
 * Problem: Let's check if a matrix column is decreasing or not
 * 
 * Understanding the problem
 * - What is column decreasing
 * 
 * - matrix
 * -- 0 1 2
 * 0| 1 3 4 
 * 1| 2 2 4
 * 2| 3 1 4
 * 
 * + Look from the top to the bottom: 
 * 3
 * 2
 * 1
 * is decreasing (1)
 * 
 * + Look from the bottom to the top
 * 1
 * 2
 * 3
 * is decreasing (2)
 * 
 * - Implement (2)
 * 
  const m1 = [[1,1,4],[2,2,4],[3,3,4]]; // {totalColumns:3, column_1:false,column_2:true,column_3:false}
  const m2 = [[-1,-2],[-4,-3]]; //{totalColumns:2, column_1:false,column_2:false}
  const m3 = [[1,2],[3,4]]; //{totalColumns:2, column_1:true,column_2:true}
  const m4 = [[28,2],[2,4]]; //{totalColumns:2, column_1:false,column_2:true}


 * 
 * 
 * Approach
 * + step 1: count number of column in the matrix - done
 * + step 2: write a function to generate object key corresponding 
 * the number of column and save the number of row
 * + step 3: check if a column is decreasing
 * + step 4: save to object result
 * 
 */

/**
 *
 * @param {Number} numberOfColumn
 *
 */
function generateObjectKeyCorrespondingTheNumberOfColumn(numberOfColumn) {
  /**
   * - numberOfColumn = 3
   * - ret = {
   *  column_1:0,
   *  column_2:0,
   *  column_3:0,
   * }
   */
  const ret = {};

  for (let i = 1; i <= numberOfColumn; ++i) {
    const columnString = "column";
    ret[columnString + "_" + i] = 0;
  }

  return ret;
}

/**
 *
 * @param {Array} column
 *
 */
function isColumnDecreasing(column) {
  let flag = true;

  return flag;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) ret[i] = a[i];
  return ret;
}
/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  const ret = {
    totalColumns: m[0].length,
    ...generateObjectKeyCorrespondingTheNumberOfColumn(m[0].length),
  };

  /**
   * - column traverse
   * - matrix
   * -- 0 1 2
   * 0| 1 3 4
   * 1| 2 2 4
   * 2| 3 1 4
   * 3| 4 0 4
   *
   * - m = [[1,3,4],[2,2,4],[3,1,4],[4,0,4]]
   *
   * - m[0][0]  - m[0][1]  - m[0][2]
   * - m[1][0]  - m[1][1]  - m[1][2]
   * - m[2][0]  - m[2][1]  - m[2][2]
   * - m[3][0]  - m[3][1]  - m[3][2]
   *
   *
   *
   */
  let rowIndex = m.length - 1;
  let columnIndex = m[0].length - 1;
  for (let i = columnIndex; i >= 0; i--) {
    let column = [];
    let flag = true;
    for (let j = rowIndex; j >= 1; --j) {
      column.push(m[j][i]);
      if (m[j - 1][i] >= m[j][i]) {
        flag = false;
        break;
      }
    }
    const column_i = "column_" + (i + 1);
    ret[column_i] = flag;
  }

  return ret;
}

function test1() {
  const m1 = [
    [3, 1, 4],
    [2, 2, 4],
    [1, 3, 4],
  ]; // {totalColumns:3, column_1:false,column_2:true,column_3:false}
  const m2 = [
    [-1, -2],
    [-4, -3],
  ]; //{totalColumns:2, column_1:false,column_2:false}
  const m3 = [
    [1, 2],
    [3, 4],
  ]; //{totalColumns:2, column_1:true,column_2:true}
  const m4 = [
    [28, 2],
    [2, 4],
  ]; //{totalColumns:2, column_1:false,column_2:true}

  const m5 = [
    [1, 3, 4],
    [2, 2, 4],
    [3, 1, 4],
    [4, 0, 4],
  ]; //{totalColumns:3, column_1:true,column_2:false,column_3:false}

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
  console.log(fx(m4));
  console.log(fx(m5));
}
{
  test1();
}
