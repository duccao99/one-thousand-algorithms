/**
 * Problem: Write a function to output the matrix of real number
 * 
 * Understanding the problem
 * -- 0 1 2
 *  0|1 2 3 
 *  1|4 5 6 
 *  2|7 8 9
 * 
 * + i = 2
 *   + j = 2
 *   + a[2][2] 
 *   + ret = 1 = a[0][0] = a[a.length - i - 1][a.length - j - 1]
 * 
 *  
  const a1 = [[1,2,3],[3,2,1],[4,5,6]]; // 
  const a2 = [[1.1,1.2],[2.1,2.2]]; // 
  const a3 = [[1.1,1.2,1.3],[2.1,2.2,2.3],[3.1,3.2,3.3]]; // 
 * 
 * Approach
 * + step 1: write a function to check if a number was a real number
 * + step 2: traverse matrix, check if exist an element which
 * wasn't real number then log error
 * + step 3: log matrix
 * 
 */

/**
 *
 * @param {Number} n
 */
function isRealNumber(n) {
  return !isNaN(n) && Math.floor(n) - n !== 0;
}

/**
 *
 * @param {Array<Array>} matrix
 */
function isRealNumberMatrix(matrix) {
  let ret = true;
  for (let i = matrix.length - 1; i >= 0; --i) {
    let flag = true;
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      if (!isRealNumber(matrix[i][j])) {
        flag = false;
        break;
      }
    }
    if (flag === false) {
      ret = flag;
      break;
    }
  }
  return ret;
}

/**
 *
 * @param {Array<Array>} matrix
 */
function E314(matrix) {
  if (!isRealNumberMatrix(matrix)) {
    console.log("This matrix was not a real number matrix");
    return console.log("");
  }

  let columnIndex = "--";
  for (let i = matrix[0].length - 1; i >= 0; --i) {
    columnIndex += matrix[0].length - i - 1 + "   ";
  }
  console.log(columnIndex);

  for (let i = matrix.length - 1; i >= 0; --i) {
    let logger = "";
    for (let j = matrix[i].length - 1; j >= 0; --j) {
      logger += matrix[matrix.length - i - 1][matrix.length - j - 1] + " ";
    }
    let rowIndex = i + "|";
    let retLog = rowIndex + logger;
    console.log(retLog);
  }
  console.log("");
}

function test1() {
  const a1 = [
    [1, 2, 3],
    [3, 2, 1],
    [4, 5, 6],
  ]; //
  const a2 = [
    [1.1, 1.2],
    [2.1, 2.2],
  ]; //
  const a3 = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3],
    [3.1, 3.2, 3.3],
  ]; //

  E314(a1);
  E314(a2);
  E314(a3);
}

{
  test1();
}
