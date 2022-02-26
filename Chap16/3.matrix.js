/**
 * Problem: Write a program to display the shift left 
 * rotate the column of matrix, t-time equal to one line 
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

  while (1) {
    const userInput = await asyncGetUserInput("");

    if (userInput === "e") {
      clearInterval(interval);
      break;
    }

    if (userInput === "s") {
      function start() {
        if (columnIndexNeedToPaintColor < 0) {
          columnIndexNeedToPaintColor = m[0].length - 1;
        }

        matrixColumnShiftLeftRotate(m);

        advanceLogMatrix(m, null, columnIndexNeedToPaintColor);

        columnIndexNeedToPaintColor--;
      }
      const timeSecond = 1500;
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
function matrixColumnShiftLeftRotate(m) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 0 0 0
   *
   * - ret
   * -- 0 1 2
   * 0| 2 3 1
   * 1| 5 6 4
   * 2| 8 9 7
   * 3| 0 0 0
   *
   * + i = 1
   * -- 0 1 2
   * 0| 2 1 3
   * 1| 5 4 6
   * 2| 8 7 9
   * 3| 0 0 0
   * + j = [3,0]
   * + swap m[j][i], m[j][i-1]
   *
   * + i = 2
   * -- 0 1 2
   * 0| 2 3 1
   * 1| 5 6 4
   * 2| 8 9 7
   * 3| 0 0 0
   *
   */
  function matrixColumnSwap(m, i, j) {
    const temporary = m[j][i];
    m[j][i] = m[j][i - 1];
    m[j][i - 1] = temporary;
  }
  for (let i = 1; i <= m[0].length - 1; ++i) {
    for (let j = m.length - 1; j >= 0; --j) {
      matrixColumnSwap(m, i, j);
    }
  }
  return m;
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
 * @param {Number|null} rowIndexNeedToPaintColor
 * @param {Number|null} columnIndexNeedToPaintColor
 *
 *
 */
function advanceLogMatrix(
  m,
  rowIndexNeedToPaintColor,
  columnIndexNeedToPaintColor
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
    spaceBetweenLastColumnIndexToRightBoundary - 1
  );
  columnIndex += spaceForColumnIndexToRightBoundary + "|";
  console.log(columnIndex);

  // log row index
  const rowMiddleIndex = Math.floor((m.length - 1) / 2);
  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      if (j === columnIndexNeedToPaintColor) {
        row += "|" + m[i][j] + "| ";
      }
      if (j !== columnIndexNeedToPaintColor) {
        row += m[i][j] + " ";
      }
    }
    row = stringRightTrim(row).string;
    const spaceBetweenRowIToRightBoundary = generateSpace(
      topBoundary.length - 1 - row.length
    );
    row += spaceBetweenRowIToRightBoundary + "|";
    if (i === rowMiddleIndex) {
      row += " 1. Press `s` to start shift top rotate the matrix";
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
