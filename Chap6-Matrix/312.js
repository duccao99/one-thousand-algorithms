/**
 * Problem: Write a function to enter a matrix real numbers
 *
 * Understanding the problem
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

async function asyncAsk(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const text = await promiseGetText(question, rl);

  rl.close();

  return text;
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
    ret[i] = a[i];
  }
  return ret;
}
async function asyncEnteringMatrix(rows, columns) {
  let matrix = [];
  for (let i = 0; i <= rows - 1; i++) {
    let column = [];
    for (let j = 0; j <= columns - 1; j++) {
      const text = await asyncAsk(`Enter value at matrix[${i}][${j}]: `);

      if (isRealNumber(+text)) {
        column = push(column, +text);
      }

      if (!isRealNumber(+text)) {
        console.log("Please enter a real number");
        j--;
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
function isRealNumber(n) {
  if (isNaN(n)) return false;
  return Math.floor(n) - n !== 0;
}

function advanceLogMatrix(matrix) {
  let columnIndex = `--`;

  for (let i = 0; i <= matrix[0].length - 1; i++) {
    columnIndex += i + "   ";
  }
  console.log(columnIndex);

  for (let i = 0; i <= matrix.length - 1; i++) {
    let logger = ``;
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      logger += matrix[i][j] + " ";
    }
    let rowIndex = ``;
    rowIndex += i + "|";
    let retLog = rowIndex + logger;
    console.log(retLog);
  }
}

async function E312() {
  while (true) {
    console.log("This is an entering real number matrix program");
    const rows = await asyncAsk("Enter number of rows: ");
    const columns = await asyncAsk("Enter number of columns: ");
    const matrix = await asyncEnteringMatrix(rows, columns);
    advanceLogMatrix(matrix);
    break;
  }
}

function test1() {
  E312();
}

{
  test1();
}
