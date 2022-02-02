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
  for (let i = 0; i <= matrix.length - 1; i++) {
    let logger = ``;
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      logger += matrix[i][j] + " ";
    }
    console.log(logger);
  }
}

function advanceLogMatrix(matrix) {
  /**
   *
   * --0 1
   * 0|1 2
   * 1|3 4
   */
  let retColumnLog = `--`;

  for (let i = 0; i <= matrix[0].length - 1; ++i) {
    retColumnLog += i + " ";
  }
  console.log(retColumnLog);

  for (let i = 0; i <= matrix.length - 1; ++i) {
    let logger = ``;
    for (let j = 0; j <= matrix[i].length - 1; ++j) {
      logger += matrix[i][j] + " ";
    }

    let rowInex = i + "|";
    let retRowLog = rowInex + logger;

    console.log(retRowLog);
  }
}

/**
 *
 * @param {Number} rows
 * @param {Number} columns
 */
async function enteringMatrix(rows, columns) {
  let matrix = [];
  for (let i = 0; i <= rows - 1; ++i) {
    let column = [];
    for (let j = 0; j <= columns - 1; ++j) {
      const text = await asyncAskUser(`Enter value at matrix[${i}][${j}]: `);
      if (isIntegerNumber(+text)) {
        column = push(column, +text);
      }
      if (!isIntegerNumber(+text)) {
        console.log("Please enter an integer number");
        j++;
      }
    }
    matrix = push(matrix, column);
  }
  return matrix;
}

/**
 *
 * @param {Number} n
 */
function isIntegerNumber(n) {
  return Math.floor(n) - n === 0;
}

async function E311() {
  while (true) {
    console.log("This is an entering integer matrix program");

    const rows = await asyncAskUser("Enter number of row: ");
    const columns = await asyncAskUser("Enter number of column: ");
    // const matrix = initializeMatrix(rows, columns);
    const matrix = await enteringMatrix(rows, columns);
    console.log("matrix: ", matrix);
    advanceLogMatrix(matrix);
    break;
  }
}

function test1() {
  E311();
}

{
  test1();
}
