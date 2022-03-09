/**
 * Problem: Sort the positive numbers those lying on the matrix boundary
 * in ascending order clockwise
 *
 * Understanding the problem
 * - matrix
 * -- 0 1 2 3
 * 0| 4 -1 3 5
 * 1| 2 6 7 8
 * 2| 9 1 -4 5
 *
 * - boundary
 * -- 0 1 2 3
 * 0| 4 -1 3 5
 * 1| 2     8
 * 2| 9 1 -4 5
 *
 * - array boundary positive elements = [4,3,5,8,5,1,9,2]
 * - array boundary elements sorted in ascendng order
 * = [1, 2, 3, 4, 5, 5, 8, 9]
 *
 *
 *
 * - boundary positive numbers sorted in ascending order clockwise
 * -- 0 1 2 3
 * 0| 1 -1 2 3
 * 1| 9     4
 * 2| 8 5 -4 5
 *
 *
 */

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx(m) {
  let boundaryPositiveElements = [];

  for (let i = 0; i <= m.length - 1; ++i) {
    if (i === 0) {
      for (let j = 0; j <= m[i].length - 1; ++j) {
        if (isPositiveNumber(m[i][j])) {
          boundaryPositiveElements = push(boundaryPositiveElements, m[i][j]);
        }
      }
    }
    if (i > 0 && i < m.length - 1) {
      if (isPositiveNumber(m[i][m[i].length - 1])) {
        boundaryPositiveElements = push(
          boundaryPositiveElements,
          m[i][m[i].length - 1]
        );
      }
    }
    if (i === m.length - 1) {
      for (let k = m[i].length - 1; k >= 0; --k) {
        if (isPositiveNumber(m[i][k])) {
          boundaryPositiveElements = push(boundaryPositiveElements, m[i][k]);
        }
      }
      for (let l = m.length - 1; l > 0; --l) {
        if (isPositiveNumber(m[l][0])) {
          boundaryPositiveElements = push(boundaryPositiveElements, m[l][0]);
        }
      }
    }
  }

  boundaryPositiveElements = ascendingBubbleSort(boundaryPositiveElements);

  for (let i = 0; i <= m.length - 1; ++i) {
    if (i === 0) {
      for (let j = 0; j < m[i].length - 1; ++j) {
        if (isPositiveNumber(m[i][j])) {
          m[i][j] = boundaryPositiveElements[0];
          boundaryPositiveElements = shift(boundaryPositiveElements);
        }
      }
    }
    if (i > 0 && i < m.length - 1) {
      if (isPositiveNumber(m[i][m[i].length - 1])) {
        m[i][m[i].length - 1] = boundaryPositiveElements[0];
        boundaryPositiveElements = shift(boundaryPositiveElements);
      }
    }
    if (i === m.length - 1) {
      for (let j = m[i].length - 1; j >= 0; --j) {
        if (isPositiveNumber(m[i][j])) {
          m[i][j] = boundaryPositiveElements[0];
          boundaryPositiveElements = shift(boundaryPositiveElements);
        }
      }

      for (let k = m.length - 1; k > 0; --k) {
        if (isPositiveNumber(m[k][0])) {
          m[k][0] = boundaryPositiveElements[0];
          boundaryPositiveElements = shift(boundaryPositiveElements);
        }
      }
    }
  }
  console.log(
    "matrix after the boundary has been sorted in ascending order clockwise"
  );

  return m;
}

/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return n > 0;
}

/**
 *
 * @param {Array} a
 */
function ascendingBubbleSort(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] > a[i]) {
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
  return a;
}

/**
 *
 * @param {Array} a
 */
function shift(a) {
  /**
   * - a = [1,2,3]
   * - ret = [2,3]
   */
  const ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i + 1];
  }
  return ret;
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
 * @param {any} e
 *
 */
function push(a, e) {
  let ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = a.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
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
    if (n < 0) {
      ret++;
      n = Math.abs(n);

      while (n !== 0) {
        n = Math.floor(n / 10);
        ret++;
      }

      return ret;
    }

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
      row = push(row, generateNumber(-100, 100));
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

function test() {
  const rows_1 = 1;
  const rows_2 = 2;
  const rows_3 = 3;
  const rows_4 = 4;

  const columns_1 = 1;
  const columns_2 = 2;
  const columns_3 = 3;
  const columns_4 = 4;
  const columns_5 = 5;

  const m3 = generateMatrix(rows_2, columns_3);
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

  advanceLogMatrix(m3);
  advanceLogMatrix(fx(m3));
  // console.log(fx(m3));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx(m4));
  // console.log(fx(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx(m5));
  // console.log(fx(m5));
}

{
  test();
}
