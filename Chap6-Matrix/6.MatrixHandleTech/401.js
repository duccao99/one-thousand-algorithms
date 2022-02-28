/**
 * Problem: Remove a column in the matrix
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
 * - removeColumnIndex = 2
 * 
 * - ret 
 * -- 0 1 
 * 0| 1 6 
 * 1| 6 28 
 * 2| 7 11 
 * 3| 7 11 
 * 
 * 
 * 
 * /
  
/**
 *
 * @param {Array<Array>} m
 * @param {Number} remove_column_index
 * 
 */
function fx1(m, remove_column_index) {
  for (let i = m.length - 1; i >= 0; --i) {
    m[i] = removeArrayElementAtPositionPos(m[i], remove_column_index);
  }

  return m;
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 */
function removeArrayElementAtPositionPos(a, pos) {
  /**
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   * - pos = 3
   * ---------0 1 2 3
   * - ret = [1,2,3,5]
   */
  const ret = new Array(a.length - 1);

  for (let i = pos - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  for (let i = pos; i <= ret.length - 1; ++i) {
    ret[i] = a[i + 1];
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} m
 * @param {Number} remove_row_index
 *
 */
function fx2(m, remove_row_index) {
  for (let i = remove_row_index; i <= m.length - 1 - 1; i++) {
    const temporary = m[i];
    m[i] = m[i + 1];
    m[i + 1] = temporary;
  }

  m.length--;

  return m;
}

/**
 *
 * @param {Array<Array>} m
 */
function matrixShiftLeftRotateClockwiseLeftBoundary(m) {
  /**
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 1 0 1
   *
   * - left boundary
   * -- 0 1 2
   * 0| 1
   * 1| 4
   * 2| 7
   * 3| 1
   *
   * - left boundary result
   * -- 0 1 2
   * 0| 2
   * 1| 1
   * 2| 4
   * 3| 7
   *
   *
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
function matrixShiftLeftRotateClockwiseTopBoundary(m) {
  /*
   * - matrix
   * -- 0 1 2
   * 0| 1 2 3
   * 1| 4 5 6
   * 2| 7 8 9
   * 3| 1 0 1
   *
   * - Top boundary
   * -- 0 1 2
   * 0| 1 2 3
   * 1|
   * 2|
   * 3|
   *
   * - Top boundary ret
   * -- 0 1 2
   * 0| 2 3 6
   * 1|
   * 2|
   * 3|
   *
   *
   *
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
function matrixShiftLeftRotateClockwiseRightBoundary(m) {
  /*
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
function matrixShiftLeftRotateClockwiseBottomBoundary(m) {
  /*
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
   * - right boundary ret
   * -- 0 1 2
   * 0|
   * 1|
   * 2|
   * 3| 0 1 9
   *
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

/**
 *
 * @param {Array<Array>} m
 */
function functionCóDấu(m) {
  return m;
}

/**
 *
 * @param {Array<Array>} m
 */
function advanceLogMatrix(m) {
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

  for (let i = 0; i <= m.length - 1; ++i) {
    let row = i + "|";
    for (let j = 0; j <= m[i].length - 1; ++j) {
      row += m[i][j] + " ";
    }
    row = stringRightTrim(row).string;
    const spaceBetweenRowIToRightBoundary = generateSpace(
      topBoundary.length - 1 - row.length + 5
    );
    row += spaceBetweenRowIToRightBoundary + "|";
    console.log(row);
  }
  const bottomBoundary = "---------------";
  console.log(bottomBoundary);
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
    /**
     * - from = 10
     * - to = 20
     * - ret = [10,20]
     *
     * + math.random() = [0,0.999999]
     * + math.random() * to = [0,19.9999998]
     * + to - from = 10
     * + math.random() * (to-from) = [0,9.999999]
     * + math.random() * (to-from) + from = [10,19.999998]
     * + math.round(math.random() * (to-from) + from) = [10,20]
     */
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

  const remove_row_index_0 = 0;
  const remove_row_index_1 = 1;
  const remove_row_index_2 = 2;
  const remove_row_index_3 = 3;
  const remove_row_index_4 = 4;

  const remove_column_index_0 = 0;
  const remove_column_index_1 = 1;
  const remove_column_index_2 = 2;
  const remove_column_index_3 = 3;
  const remove_column_index_4 = 4;

  advanceLogMatrix(m2);
  console.log("remove_column_index_1: ", remove_column_index_1);
  advanceLogMatrix(fx1(m2, remove_column_index_1));

  advanceLogMatrix(m4);
  console.log("remove_column_index_3: ", remove_column_index_3);
  advanceLogMatrix(fx1(m4, remove_column_index_3));

  advanceLogMatrix(m5);
  console.log("remove_column_index_2: ", remove_column_index_2);
  advanceLogMatrix(fx1(m5, remove_column_index_2));
}

function test2() {
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
  const columns_5 = 5;
  const columns_6 = 6;

  // const m1 = generateMatrix(rows_1, columns_2);
  // const m2 = generateMatrix(rows_2, columns_3);
  // const m3 = generateMatrix(rows_2, columns_1);
  const m4 = generateMatrix(rows_3, columns_4);
  const m5 = generateMatrix(rows_4, columns_6);

  const column_index_0 = 0;
  const column_index_1 = 1;
  const column_index_2 = 2;
  const column_index_3 = 3;

  const row_index_0 = 0;
  const row_index_1 = 1;
  const row_index_2 = 2;
  const row_index_3 = 3;

  const remove_row_index_1 = 1;
  const remove_row_index_2 = 2;
  const remove_row_index_3 = 3;
  const remove_row_index_4 = 4;

  // advanceLogMatrix(m1);
  // advanceLogMatrix(fx(m1));

  // advanceLogMatrix(m2);
  // advanceLogMatrix(fx(m2));

  // advanceLogMatrix(m3);
  // advanceLogMatrix(fx(m3));

  advanceLogMatrix(m4);
  console.log("remove_row_index_1: ", remove_row_index_1);
  advanceLogMatrix(fx2(m4, remove_row_index_1));

  advanceLogMatrix(m5);
  console.log("remove_row_index_3: ", remove_row_index_3);
  advanceLogMatrix(fx2(m5, remove_row_index_3));
}

{
  test1();
  // test2();
}
