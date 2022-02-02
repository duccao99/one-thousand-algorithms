/**
 * Problem: Write a function to enter a matrix of number
 *
 * Understanding the problem
 *
 * - Matrix m x n
 * - m: the number of rows
 * - n: the number of columns
 *
 * - Example: 3 x 4
 * - 3 rows
 * - 4 cols
 * - result:
 * ----- 0 1 2 3
 *     0|1 2 3 4
 *     1|2 1 3 4
 *     2|3 4 1 2
 *
 *
 *
 *
 * Approach
 * + step 1:
 * + step 2:
 * ..
 * + step n:
 *
 *
 *
 *
 */
const readline = require("readline");

function promiseGetText(question, rl) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function asyncAskUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const text = await promiseGetText(question, rl);

  rl.close();
  return text;
}

/**
 * @param {Array: a}
 * @param {Number: e}
 *
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 * @param {Number: rows}
 * @param {Number: columns}
 *
 */
function initializeMatrix(rows, columns) {
  /**
   * - rows: 3
   * - columns: 4
   * --- 0 1 2 3
   *  0| 0 0 0 0
   *  1| 0 0 0 0
   *  2| 0 0 0 0
   */
  let matrix = [];

  for (let i = rows; i >= 1; --i) {
    let column = [];
    for (let j = columns; j >= 1; --j) {
      column = push(column, 0);
    }
    matrix = push(matrix, column);
  }

  return matrix;
}

function logMatrix(matrix) {
  const rows = matrix.length - 1;

  for (let i = rows; i >= 0; --i) {
    const columns = matrix[i].length - 1;
    let logger = ``;
    for (let j = columns; j >= 0; --j) {
      logger += matrix[i][j] + " ";
    }
    console.log(logger);
  }
}

async function E311() {
  while (true) {
    console.log("This is an entering matrix program");

    const rows = await asyncAskUser("Enter number of row: ");
    const columns = await asyncAskUser("Enter number of column: ");
    const matrix = initializeMatrix(rows, columns);

    logMatrix(matrix);
    break;
  }
}

function test1() {
  E311();
}

{
  test1();
}
