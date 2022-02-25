/**
 * Problem: Write a program to display the shift down 
 * rotate of matrix, two seconds - one line 
 * 
 * 
 * Understanding the problem
 * 
 * - Matrix
 * -- 0 1 2
 * 0| 1 6 3
 * 1| 6 28 7
 * 2| 28 16 8
 * 3| 7 11 13
 * 
 * After two seconds display this 
 * 
 * - ret
 * -- 0 1 2
 * 3| 7 11 13
 * 0| 1 6 3
 * 1| 6 28 7
 * 2| 28 16 8
 * 
 * The display stop when user press `E` 
 *
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
async function fx(m) {
  const text = "1. Press `r` to rotate matrix\n2. Press `e` to exit!\n";
  color.yellow("Matrix input");
  advanceLogMatrix(m);
  while (1) {
    const userInput = await asyncGetUserInput(text);

    if (userInput === "e") {
      break;
    }
    if (userInput === "r") {
      matrixShiftDownRotate(m);

      color.yellow("Matrix after shift down rotate");
      advanceLogMatrix(m);
    }
  }
}

function promiseGetText(question, rl) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function asyncGetUserInput(question) {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const userInput = await promiseGetText(question, rl);

  rl.close();

  return userInput;
}

/**
 *
 * @param {Array<Array>} m
 */
function matrixShiftDownRotate(m) {
  /**
   * 1.
   * - m
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 0 0 0
   *
   * - ret
   * -- 0 1 2
   * 3| 0 0 0
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   *
   *
   * - m[0] = m[3]
   * - m[1] = m[0]
   * - m[2] = m[1]
   * - m[3] = m[2]
   *
   * - i from m.length - 1 to 1
   * - swap m[i], m[i-1]
   *
   * 2.
   * - m
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 0 0 0
   *
   * + i = 3 , swap(m,3,2), swap(m,i,i-1)
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 0 0 0
   * 3| 7 8 9
   *
   * + i = 2, swap(m,2,1)
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 0 0 0
   * 2| 4 5 6
   * 3| 7 8 9
   *
   * + i = 1, swap(m,1,0)
   * -- 0 1 2
   * 0| 0 0 0
   * 1| 1 2 3
   * 2| 4 5 6
   * 3| 7 8 9
   *
   *
   *
   *
   *
   *
   *
   *
   */
  for (let i = m.length - 1; i >= 1; --i) {
    swap(m, i, i - 1);
  }
}

/**
 *
 * @param {Array<Array>} m
 * @param {Number} i
 * @param {Number} j
 *
 */
function swap(m, i, j) {
  const temporary = m[i];
  m[i] = m[j];
  m[j] = temporary;
}

const { Color } = require("../TechGather/6.console-color");
const color = new Color();
/**
 *
 * @param {Array<Array>} m
 */
function advanceLogMatrix(m) {
  const topBoundary = "-----Matrix-----";
  console.log(topBoundary); // len = 16
  /**
   *
   * @param {Number} n
   */
  function getNumberDigits(n) {
    let ret = 0;

    while (n !== 0) {
      n = Math.floor(n / 10);
      ret++;
    }

    return ret;
  }

  let columnIndex = "--";
  for (let i = 0; i <= m[0].length - 1; ++i) {
    let space = "";
    let numberDigits = getNumberDigits(m[0][i]);
    for (let j = numberDigits - 1; j >= 0; --j) {
      space += " ";
    }
    columnIndex += i + space;
  }
  console.log(columnIndex); // len = 9
  console.log("columnIndex length: ", columnIndex.length);
  let spaceBetweenLastColumnIndexToRightBoundary =
    topBoundary.length - columnIndex.length;
  console.log(
    "spaceBetweenLastColumnIndexToRightBoundary: ",
    spaceBetweenLastColumnIndexToRightBoundary
  );

  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      row += m[i][j] + " ";
      if (j === m[0].length - 1) {
        const spaces = generateSpace(5);
        row += spaces + "|";
        const matrixIJDigits = getNumberDigits(m[i][j]);
      }
    }
    console.log(row);
  }
  const bottomBoundary = "---------------";
  console.log(bottomBoundary);
}

/**
 *
 * @param {Number} number
 */
function generateSpace(number) {
  /**
   * - n = 1
   * - ret = " "
   *
   * - n = 3
   * - ret = "   "
   */
  let ret = "";
  for (let i = number; i >= 1; --i) {
    ret += " ";
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  let ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

function test1() {
  /**
   *
   * @param {Number} rows
   * @param {Number} columns
   *
   */
  function generateMatrix(rows, columns) {
    let ret = [];
    for (let i = rows - 1; i >= 0; --i) {
      let row = [];
      for (let j = columns - 1; j >= 0; --j) {
        row = push(row, generateNumber(0, 100));
      }
      ret = push(ret, row);
    }
    return ret;
  }

  /**
   *
   * @param {Number} from
   * @param {Number} to
   *
   */
  function generateNumber(from, to) {
    let random = Math.random();
    let ret = random * to;

    if (ret < from || ret > to) {
      return generateNumber(from, to);
    }

    return Math.floor(ret);
  }

  const rows_1 = 1;
  const rows_2 = 2;
  const rows_3 = 3;
  const rows_4 = 4;

  const columns_1 = 1;
  const columns_2 = 2;
  const columns_3 = 3;
  const columns_4 = 4;

  const m2 = generateMatrix(rows_2, columns_3);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_3);

  const column_index_0 = 0;
  const column_index_1 = 1;
  const column_index_2 = 2;
  const column_index_3 = 3;

  const row_index_0 = 0;
  const row_index_1 = 1;
  const row_index_2 = 2;
  const row_index_3 = 3;

  advanceLogMatrix(m2);
  advanceLogMatrix(fx(m2, column_index_0, column_index_1));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx(m4, column_index_0, column_index_2));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx(m5, column_index_2, column_index_1));
}

async function test2() {
  /**
   *
   * @param {Number} rows
   * @param {Number} columns
   *
   */
  function generateMatrix(rows, columns) {
    let ret = [];
    for (let i = rows - 1; i >= 0; --i) {
      let row = [];
      for (let j = columns - 1; j >= 0; --j) {
        row = push(row, generateNumber(0, 100));
      }
      ret = push(ret, row);
    }
    return ret;
  }

  /**
   *
   * @param {Number} from
   * @param {Number} to
   *
   */
  function generateNumber(from, to) {
    let random = Math.random();
    let ret = random * to;

    if (ret < from || ret > to) {
      return generateNumber(from, to);
    }

    return Math.floor(ret);
  }

  const rows_1 = 1;
  const rows_2 = 2;
  const rows_3 = 3;
  const rows_4 = 4;

  const columns_1 = 1;
  const columns_2 = 2;
  const columns_3 = 3;
  const columns_4 = 4;

  const m1 = generateMatrix(rows_1, columns_2);
  const m2 = generateMatrix(rows_2, columns_3);
  const m3 = generateMatrix(rows_2, columns_1);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_3);
  const column_index_0 = 0;
  const column_index_1 = 1;
  const column_index_2 = 2;
  const column_index_3 = 3;

  const row_index_0 = 0;
  const row_index_1 = 1;
  const row_index_2 = 2;
  const row_index_3 = 3;

  await fx(m5);
}

{
  // test1();
  test2();
}
