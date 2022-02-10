/**
 * Problem: Let's check if a matrix row is increasing or not
 * 
 * Understanding the problem
 * - What is increasing
 * + Look from the left to the right: 1,2,3 (1)
 * + Look from the right to the left: 3,2,1
 * - Implement (1)
 * 
  const m1 = [[1,2,3],[-1,-2,-3],[4,5,6]]; // {totalRow:3, r1:true, r2:false,r3:true}
  const m2 = [[-1,-2],[-4,-3]]; // {totalRow:2, r1:true, r2:false,r3:true}
  const m3 = [[1,2],[3,4]]; // {totalRow:2,r1:true,r2:true}
  const m4 = [[28,2],[2,4]]; // {totalRow:2,r1:false,r2:true}
 * 
 * 
 * Approach
 * + step 1: count number of row in the matrix - done
 * + step 2: write a function to generate object key corresponding 
 * the number of row and save the number of row
 * + step 3: check if a row is increasing
 * + step 4: save to object result
 * 
 */

/**
 *
 * @param {Array<Array>} m
 *
 */
function getMatrixNumberOfRow(m) {
  return m.length;
}

/**
 *
 * @param {Number} numberOfRow
 *
 */
function generateObjectKey(numberOfRow) {
  /**
   * - numberOfRow = 3
   * - ret = {
   *  r1:0,
   *  r2:0,
   *  r3:0,
   * }
   */
  const ret = {};

  for (let i = 1; i <= numberOfRow; ++i) {
    const rowString = "row";
    ret[rowString + "_" + i] = 0;
  }

  return ret;
}

/**
 *
 * @param {Array} row
 *
 */
function isRowInscreasing(row) {
  /**
   * - 1 2 3
   *
   */
  let flag = true;

  for (let i = row.length - 1; i >= 1; --i) {
    if (row[i - 1] > row[i]) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array<Array>} m
 */
function fx(m) {
  const totalRows = getMatrixNumberOfRow(m);
  const ret = {
    totalRows: totalRows,
    ...generateObjectKey(totalRows),
  };

  for (let i = m.length - 1; i >= 0; --i) {
    const row_i = m[i];
    const row_i_string = "row" + "_" + (i + 1);
    ret[row_i_string] = isRowInscreasing(row_i);
  }

  return ret;
}

function test1() {
  const m1 = [
    [1, 2, 3],
    [-1, -2, -3],
    [4, 5, 6],
  ]; // {totalRow:3, r1:true, r2:false,r3:true}
  const m2 = [
    [-1, -2],
    [-4, -3],
  ]; // {totalRow:2, r1:false, r2:false,r3:true}
  const m3 = [
    [1, 2],
    [3, 4],
  ]; // {totalRow:2,r1:true,r2:true}
  const m4 = [
    [28, 2],
    [2, 4],
  ]; // {totalRow:2,r1:false,r2:true}

  console.log(fx(m1));
  console.log(fx(m2));
  console.log(fx(m3));
  console.log(fx(m4));
}
{
  test1();
}
