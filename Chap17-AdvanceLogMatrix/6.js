/**
 * Problem: Write a program to display the
 * shift left rotate clockwise the values 
 * lying on the matrix boundary 
 * as description bellow
 * + t-time one-rotate
 * + Display a featured element so that we can 
 * se the shift left rotate clockwise clearer
 * 
 * 
 * 
 *
 * /
  
/**
 *
 * @param {Array<Array>} m
 */
async function fx(m) {
  color.yellow("Matrix input");
  advanceLogMatrix(m);

  let columnIndexNeedToPaintColor = 1;
  const coordinateNeedToPaintColor = {
    i: 0,
    j: 0,
  };
  let isiIncreasing = false;
  let isjIncreasing = false;
  let isjDecreasing = false;
  let isiDecreasing = false;

  while (1) {
    const userInput = await asyncGetUserInput("");

    if (userInput === "e") {
      clearInterval(interval);
      break;
    }

    if (userInput === "s") {
      function start() {
        matrixShiftLeftBoundaryClockwiseRotate(m);

        // console.clear();
        const coordinate = {
          x: 0,
          y: 0,

          // x: 100,
          // y: 100,
        };

        console.clear();

        process.stdout.cursorTo(coordinate.x, coordinate.y);
        advanceLogMatrix(m, null, null, [
          coordinateNeedToPaintColor.i,
          coordinateNeedToPaintColor.j,
        ]);
      }
      const timeSecond = 300;
      awaitTimeSecondsThenDoSomething(timeSecond, start);
    }
  }
}

let interval = {};

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
function matrixShiftLeftBoundaryClockwiseRotate(m) {
  /**
   *
   * @param {Array<Array>} m
   */
  function shiftLeftClockwiseLeftBoundary(m) {
    /**
     * - matrix
     * -- 0 1 2
     * 0| 1 2 3
     * 1| 4 5 6
     * 2| 7 8 9
     * 3| 1 0 1
     *
     * - left boundary
     * -- 0
     * 0| 1
     * 1| 4
     * 2| 7
     * 3| 1
     *
     * - left boundary ret
     * -- 0
     * 0| 2
     * 1| 1
     * 2| 4
     * 3| 7
     */

    const firstColumnIndex = 0;

    for (let i = m.length - 1; i >= 1; --i) {
      const temporary = m[i][firstColumnIndex];
      m[i][firstColumnIndex] = m[i - 1][firstColumnIndex];
      m[i - 1][firstColumnIndex] = temporary;
    }

    return m;
  }
  /**
   *
   * @param {Array<Array>} m
   */
  function shiftLeftClockwiseTopBoundary(m) {
    /**
     * - matrix
     * -- 0 1 2
     * 0| 1 2 3
     * 1| 4 5 6
     * 2| 7 8 9
     * 3| 1 0 1
     *
     * - top boundary
     * -- 0 1 2
     * 0| 1 2 3
     * 1|
     * 2|
     * 3|
     *
     * - top boundary ret
     * -- 0 1 2
     * 0| 2 3 6
     * 1|
     * 2|
     * 3|
     */
    const firstRowIndex = 0;

    for (let i = 0; i <= m[firstRowIndex].length - 1 - 1; ++i) {
      const temporary = m[firstRowIndex][i];
      m[firstRowIndex][i] = m[firstRowIndex][i + 1];
      m[firstRowIndex][i + 1] = temporary;
    }

    return m;
  }
  /**
   *
   * @param {Array<Array>} m
   */
  function shiftLeftClockwiseRightBoundary(m) {
    /**
     * - matrix
     * -- 0 1 2
     * 0| 1 2 3
     * 1| 4 5 6
     * 2| 7 8 9
     * 3| 1 0 1
     *
     * - right boundary
     * -- 0 1 2
     * 0|     3
     * 1|     6
     * 2|     9
     * 3|     1
     *
     * - right boundary ret
     * -- 0 1 2
     * 0|     6
     * 1|     9
     * 2|     1
     * 3|     0
     *
     *
     */
    const lastColumnIndex = m[0].length - 1;

    for (let i = 0; i <= m.length - 1 - 1; ++i) {
      const temporary = m[i][lastColumnIndex];
      m[i][lastColumnIndex] = m[i + 1][lastColumnIndex];
      m[i + 1][lastColumnIndex] = temporary;
    }

    return m;
  }
  /**
   *
   * @param {Array<Array>} m
   */
  function shiftLeftClockwiseBottomBoundary(m) {
    /**
     * - matrix
     * -- 0 1 2
     * 0| 1 2 3
     * 1| 4 5 6
     * 2| 7 8 9
     * 3| 1 0 1
     *
     * - bottom boundary
     * -- 0 1 2
     * 0|
     * 1|
     * 2|
     * 3| 1 0 1
     *
     * - bottom boundary ret
     * -- 0 1 2
     * 0|
     * 1|
     * 2|
     * 3| 0 1 9
     *
     *
     */

    const lastRowIndex = m.length - 1;

    for (let i = m[lastRowIndex].length - 1; i >= 2; --i) {
      const temporary = m[lastRowIndex][i];
      m[lastRowIndex][i] = m[lastRowIndex][i - 1];
      m[lastRowIndex][i - 1] = temporary;
    }

    return m;
  }

  const ret1 = shiftLeftClockwiseLeftBoundary(m);
  const ret2 = shiftLeftClockwiseTopBoundary(ret1);
  const ret3 = shiftLeftClockwiseRightBoundary(ret2);
  const ret4 = shiftLeftClockwiseBottomBoundary(ret3);

  return ret4;
}

const { Color } = require("../TechGather/6.console-color");
const color = new Color();
/**
 *
 * @param {Array<Array>} m
 * @param {Number|null} rowIndexNeedToPaintColor
 * @param {Number|null} columnIndexNeedToPaintColor
 * @param {Array|null} coordinateNeedToPaintColor
 *
 *
 *
 */
function advanceLogMatrix(
  m,
  rowIndexNeedToPaintColor,
  columnIndexNeedToPaintColor,
  coordinateNeedToPaintColor
) {
  /**
   *
   * @param {string} s
   */
  function stringRightTrim(s) {
    let arrayCharacters = new Array(s.length);

    for (let i = s.length - 1; i >= 0; --i) {
      arrayCharacters[i] = s[i];
    }

    while (arrayCharacters[arrayCharacters.length - 1] === " ") {
      arrayCharacters = pop(arrayCharacters);
    }

    return {
      arrayCharacters: arrayCharacters,
      string: join(arrayCharacters, ""),
    };
  }

  /**
   *
   * @param {Array} a
   * @param {string} key
   *
   */
  function join(a, key) {
    let ret = "";

    for (let i = 0; i <= a.length - 1; ++i) {
      ret += a[i] + key;
    }

    return ret;
  }

  /**
   *
   * @param {Array} a
   * @param {Array} b
   *
   */
  function isArrayAEqualToArrayB(a, b) {
    if (!a || !b || a.length !== b.length) {
      return false;
    }

    let flag = true;

    for (let i = a.length - 1; i >= 0; --i) {
      if (a[i] !== b[i]) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  /**
   *
   * @param {Array} a
   */
  function pop(a) {
    /**
     * -------0 1 2 3
     * - a = [1,2,3,4]
     * ---------0 1 2
     * - ret = [1,2,3]
     */
    const ret = new Array(a.length - 1);
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
    return ret;
  }

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
  // log column index
  let columnIndex = "--";
  for (let i = 0; i <= m[0].length - 1; ++i) {
    let space = "";
    let numberDigits = getNumberDigits(m[0][i]);
    for (let j = numberDigits - 1; j >= 0; --j) {
      space += " ";
    }
    columnIndex += i + space;
  }
  columnIndex = stringRightTrim(columnIndex).string;
  let spaceBetweenLastColumnIndexToRightBoundary =
    topBoundary.length - columnIndex.length;
  const spaceForColumnIndexToRightBoundary = generateSpace(
    spaceBetweenLastColumnIndexToRightBoundary - 1 + 5
  );
  columnIndex += spaceForColumnIndexToRightBoundary + "|";
  console.log(columnIndex);

  // log row index
  const rowMiddleIndex = Math.floor((m.length - 1) / 2);
  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      // paint by coordinate logic
      if (isArrayAEqualToArrayB([i, j], coordinateNeedToPaintColor)) {
        // row += "|" + m[i][j] + "| ";
        row += m[i][j] + " ";
      }
      if (!isArrayAEqualToArrayB([i, j], coordinateNeedToPaintColor)) {
        row += m[i][j] + " ";
      }
    }
    row = stringRightTrim(row).string;
    const spaceBetweenRowIToRightBoundary = generateSpace(
      topBoundary.length - 1 - row.length + 5
    );
    row += spaceBetweenRowIToRightBoundary + "|";
    if (i === rowMiddleIndex) {
      row += " 1. Press `s` to start app";
    }
    if (i === rowMiddleIndex + 1) {
      row += " 2. Press `e` to exit!";
    }

    if (i === rowIndexNeedToPaintColor) {
      color.yellow(row);
    }
    if (i !== rowIndexNeedToPaintColor) {
      console.log(row);
    }
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

/**
 *
 * @param {Function} doSomething
 */
function awaitTimeSecondsThenDoSomething(
  timeSecond,
  doSomething,
  ...doSomethingParameters
) {
  interval = setInterval(() => {
    doSomething(...doSomethingParameters);
  }, timeSecond);
}

function logOne() {
  console.log(1);
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
        row = push(row, generateNumber(20, 90));
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
    return Math.round(Math.random() * (to - from) + from);
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
    /**
     * + math.random() = [0,0.99999]
     * + from = 1
     * + to = 10
     *
     * + math.random() * to = [0,9.99999]
     * + math.random() * to + from = [1,10.999999]
     * + math.floor(math.random()*to+from) = [1,10]
     */
    return Math.floor(Math.random() * to + from);
  }

  const rows_1 = 1;
  const rows_2 = 2;
  const rows_3 = 3;
  const rows_4 = 4;

  const columns_1 = 1;
  const columns_2 = 2;
  const columns_3 = 3;
  const columns_4 = 4;
  const columns_5 = 5;
  const columns_6 = 6;

  const m1 = generateMatrix(rows_1, columns_2);
  const m2 = generateMatrix(rows_2, columns_3);
  const m3 = generateMatrix(rows_2, columns_1);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_5);
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
