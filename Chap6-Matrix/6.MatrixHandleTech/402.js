/**
 * Problem: Rotate 90 degrees the matrix
 *
 *
 * Understanding the problem
 *
 * - Matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 3| 1 0 1
 *
 * + Rotate 90 degrees at top left corner m[0][0]
 *   + Right rotate
 *   - Matrix           - ret
 *   -- 0 1 2           -- 0 1 2 3
 *   0| 1 2 3           0| 3 6 9 1
 *   1| 4 5 6           1| 2 5 8 0
 *   2| 7 8 9           2| 1 4 7 1
 *   3| 1 0 1
 *
 *    + Left rotate
 *    - Matrix           - ret
 *    -- 0 1 2           -- 0 1 2 3
 *    0| 1 2 3           0| 1 7 4 1
 *    1| 4 5 6           1| 0 8 5 2
 *    2| 7 8 9           2| 1 9 6 3
 *    3| 1 0 1
 *
 * -----------------------------------------------------------
 * -----------------------------------------------------------
 *
 *
 * + Rotate 90 degrees at top right corner m[0][m[0].length-1]
 *   + Right rotate
 *   - Matrix           - ret
 *   -- 0 1 2           -- 0 1 2 3
 *   0| 1 2 3           0| 3 6 9 1
 *   1| 4 5 6           1| 2 5 8 0
 *   2| 7 8 9           2| 1 4 7 1
 *   3| 1 0 1
 *
 *    + Left rotate
 *    - Matrix           - ret
 *    -- 0 1 2           -- 0 1 2 3
 *    0| 1 2 3           0| 1 7 4 1
 *    1| 4 5 6           1| 0 8 5 2
 *    2| 7 8 9           2| 1 9 6 3
 *    3| 1 0 1
 *
 * -----------------------------------------------------------
 * -----------------------------------------------------------
 *
 * + Rotate 90 degrees at bottom right corner m[m.length-1][m[0].length-1]
 *   + Right rotate
 *   - Matrix           - ret
 *   -- 0 1 2           -- 0 1 2 3
 *   0| 1 2 3           0| 1 7 4 1
 *   1| 4 5 6           1| 0 8 5 2
 *   2| 7 8 9           2| 1 9 6 3
 *   3| 1 0 1
 *
 *    + Left rotate
 *    - Matrix           - ret
 *    -- 0 1 2           -- 0 1 2 3
 *    0| 1 2 3           0| 3 6 9 1
 *    1| 4 5 6           1| 2 5 8 0
 *    2| 7 8 9           2| 1 4 7 1
 *    3| 1 0 1
 *
 * -----------------------------------------------------------
 * -----------------------------------------------------------
 *
 *
 * + Rotate 90 degrees at bottom left corner m[m.length-1][0]
 *   + Right rotate
 *   - Matrix           - ret
 *   -- 0 1 2           -- 0 1 2 3
 *   0| 1 2 3           0| 1 7 4 1
 *   1| 4 5 6           1| 0 8 5 2
 *   2| 7 8 9           2| 1 9 6 3
 *   3| 1 0 1
 *
 *    + Left rotate
 *    - Matrix           - ret
 *    -- 0 1 2           -- 0 1 2 3
 *    0| 1 2 3           0| 3 6 9 1
 *    1| 4 5 6           1| 2 5 8 0
 *    2| 7 8 9           2| 1 4 7 1
 *    3| 1 0 1
 *
 *
 */
/**
 *
 * @param {Number} numberOfRow
 * @param {Number} numberOfColumn
 *
 */
function matrixInitialization(numberOfRow, numberOfColumn) {
  let ret = new Array(numberOfRow);

  for (let i = ret.length - 1; i >= 0; --i) {
    let set = new Array(numberOfColumn);
    for (let j = set.length - 1; j >= 0; --j) {
      set[j] = 0;
    }
    ret[i] = set;
  }

  return ret;
}

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx1(m) {
  /**
   *   + Rotate 90 degrees at top left corner m[0][0]
   *
   *   + Right rotate
   *   - Matrix           - ret
   *   -- 0 1 2           -- 0 1 2 3
   *   0| 1 2 3           0| 3 6 9 1
   *   1| 4 5 6           1| 2 5 8 0
   *   2| 7 8 9           2| 1 4 7 1
   *   3| 1 0 1
   *
   *  + step 1: make row indexes becomes column indexes - done
   *  + step 2: make column indexes becomes row indexes - done
   *  + step 3: using column traverse to pour element - done
   *
   *
   */
  const matrixRetNumberOfColumn = m.length;
  const matrixRetNumberOfRow = m[0].length;
  const matrixRet = matrixInitialization(
    matrixRetNumberOfRow,
    matrixRetNumberOfColumn
  );

  for (let i = m[0].length - 1; i >= 0; --i) {
    for (let j = 0; j <= m.length - 1; ++j) {
      matrixRet[matrixRet.length - 1 - i][j] = m[j][i];
    }
  }

  return matrixRet;
}
/**
 *
 * @param {Array<Array>} m
 *
 */
function fx2(m) {
  /**
   *   + Rotate 90 degrees at top left corner m[0][0]
   *
   *
   *    + Left rotate
   *    - Matrix           - ret
   *    -- 0 1 2           -- 0 1 2 3
   *    0| 1 2 3           0| 1 7 4 1
   *    1| 4 5 6           1| 0 8 5 2
   *    2| 7 8 9           2| 1 9 6 3
   *    3| 1 0 1
   *
   *    + step 1: make row indexes becomes column indexes - done
   *    + step 2: make column indexes becomes row indexes - done
   *    + step 3: traverse column tech to pour element
   *
   *
   */

  const matrixRet = matrixInitialization(m[0].length, m.length);

  for (let i = 0; i <= m[0].length - 1; ++i) {
    for (let j = m.length - 1; j >= 0; --j) {
      // m[j][i]
      matrixRet[i][m.length - 1 - j] = m[j][i];
    }
  }

  return matrixRet;
}
/**
 *
 * @param {Array<Array>} m
 *
 */
function fx3(m) {
  /**
   *
   * + Rotate 90 degrees at top right corner m[0][m[0].length-1]
   *   + Right rotate
   *   - Matrix           - ret
   *   -- 0 1 2           -- 0 1 2 3
   *   0| 1 2 3           0| 3 6 9 1
   *   1| 4 5 6           1| 2 5 8 0
   *   2| 7 8 9           2| 1 4 7 1
   *   3| 1 0 1
   */
  const ret = matrixInitialization(m[0].length, m.length);

  for (let i = m[0].length - 1; i >= 0; --i) {
    for (let j = 0; j <= m.length - 1; ++j) {
      ret[ret.length - 1 - i][j] = m[j][i];
    }
  }

  return ret;
}
/**
 *
 * @param {Array<Array>} m
 *
 */
function fx4(m) {
  /**
   *
   * + Rotate 90 degrees at top right corner m[0][m[0].length-1]
   *
   *    + Left rotate
   *    - Matrix           - ret
   *    -- 0 1 2           -- 0 1 2 3
   *    0| 1 2 3           0| 1 7 4 1
   *    1| 4 5 6           1| 0 8 5 2
   *    2| 7 8 9           2| 1 9 6 3
   *    3| 1 0 1
   */
  const ret = matrixInitialization(m[0].length, m.length);

  for (let i = 0; i <= m[0].length - 1; ++i) {
    for (let j = m.length - 1; j >= 0; --j) {
      ret[i][m.length - j - 1] = m[j][i];
    }
  }

  return ret;
}
/**
 *
 * @param {Array<Array>} m
 *
 */
function fx5(m) {
  /**
   *   + Rotate 90 degrees at bottom right corner
   *   m[m.length-1][m[0].length-1]
   *
   *   + Right rotate
   *   - Matrix           - ret
   *   -- 0 1 2           -- 0 1 2 3
   *   0| 1 2 3           0| 1 7 4 1
   *   1| 4 5 6           1| 0 8 5 2
   *   2| 7 8 9           2| 1 9 6 3
   *   3| 1 0 1
   *
   *
   */
  const ret = matrixInitialization(m[0].length, m.length);

  for (let i = 0; i <= m[0].length - 1; ++i) {
    for (let j = m.length - 1; j >= 0; --j) {
      ret[i][m.length - j - 1] = m[j][i];
    }
  }

  return ret;
}
/**
 *
 * @param {Array<Array>} m
 *
 */
function fx6(m) {
  /**
   *  * + Rotate 90 degrees at bottom right corner m[m.length-1][m[0].length-1]
   *
   *    + Left rotate
   *    - Matrix           - ret
   *    -- 0 1 2           -- 0 1 2 3
   *    0| 1 2 3           0| 3 6 9 1
   *    1| 4 5 6           1| 2 5 8 0
   *    2| 7 8 9           2| 1 4 7 1
   *    3| 1 0 1
   *
   */
  const ret = matrixInitialization(m[0].length, m.length);

  for (let i = m[0].length - 1; i >= 0; --i) {
    for (let j = 0; j <= m.length - 1; ++j) {
      ret[ret.length - i - 1][j] = m[j][i];
    }
  }

  return ret;
}
/**
 *
 * @param {Array<Array>} m
 *
 */
function fx7(m) {
  /**
   *
   * + Rotate 90 degrees at bottom left corner m[m.length-1][0]
   *   + Right rotate
   *   - Matrix           - ret
   *   -- 0 1 2           -- 0 1 2 3
   *   0| 1 2 3           0| 1 7 4 1
   *   1| 4 5 6           1| 0 8 5 2
   *   2| 7 8 9           2| 1 9 6 3
   *   3| 1 0 1
   *
   */
  const ret = matrixInitialization(m[0].length, m.length);
  for (let i = 0; i <= m[0].length - 1; ++i) {
    for (let j = m.length - 1; j >= 0; --j) {
      ret[i][m.length - j - 1] = m[j][i];
    }
  }
  return ret;
}
/**
 *
 * @param {Array<Array>} m
 *
 */
function fx8(m) {
  /**
   *
   * + Rotate 90 degrees at bottom left corner m[m.length-1][0]
   *
   *    + Left rotate
   *    - Matrix           - ret
   *    -- 0 1 2           -- 0 1 2 3
   *    0| 1 2 3           0| 3 6 9 1
   *    1| 4 5 6           1| 2 5 8 0
   *    2| 7 8 9           2| 1 4 7 1
   *    3| 1 0 1
   *
   */
  const ret = matrixInitialization(m[0].length, m.length);

  for (let i = m[0].length - 1; i >= 0; --i) {
    for (let j = 0; j <= m.length - 1; ++j) {
      ret[ret.length - i - 1][j] = m[j][i];
    }
  }

  return ret;
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
    if (n === 0) return 1;

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

function test1() {
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
  advanceLogMatrix(fx1(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx1(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx1(m5));
}

function test1() {
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
  advanceLogMatrix(fx1(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx1(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx1(m5));
}

function test1() {
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
  advanceLogMatrix(fx1(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx1(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx1(m5));
}

function test1() {
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
  advanceLogMatrix(fx1(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx1(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx1(m5));
}

function test2() {
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
  advanceLogMatrix(fx2(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx2(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx2(m5));
}

function test3() {
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
  advanceLogMatrix(fx3(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx3(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx3(m5));
}

function test4() {
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
  advanceLogMatrix(fx4(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx4(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx4(m5));
}

function test5() {
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
  advanceLogMatrix(fx5(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx5(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx5(m5));
}

function test6() {
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
  advanceLogMatrix(fx6(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx6(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx6(m5));
}

function test7() {
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
  advanceLogMatrix(fx7(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx7(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx7(m5));
}

function test8() {
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
  advanceLogMatrix(fx8(m2));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx8(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx8(m5));
}
{
  // test1();
  // test2();
  // test3();
  // test4();
  // test5();
  // test6();
  // test7();
  test8();
}
