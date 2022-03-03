/**
 * Problem: Sort the elements in the matrix in ascending order
 * row and column in two ways, using an sub-array and
 * not using an sub-array from left to right and top to bottom
 *
 *
 *
 * Understanding the problem
 * - matrix
 * -- 0 1 2
 * 0| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 * 3| 3 2 1
 *
 * - ret
 * -- 0 1 2
 * 0| 1 2 3
 * 3| 1 2 3
 * 1| 4 5 6
 * 2| 7 8 9
 *
 *
 *
 *
 */

/**
 *
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 *
 */
function quicksort(a, left, right) {
  const index = partition(a, left, right);
  if (left < index - 1) {
    quicksort(a, left, index - 1);
  }
  if (index < right) {
    quicksort(a, index, right);
  }
  return a;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swapArray(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 *
 */
function partition(a, left, right) {
  const pivot = a[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (a[i] < pivot) {
      i++;
    }
    while (pivot < a[j]) {
      j--;
    }
    if (i <= j) {
      swapArray(a, i, j);
      i++;
      j--;
    }
  }
  return i;
}

/**
 *
 * @param {Array} a
 */
function bubblesort(a) {
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
 * @param {Array<Array>} m
 *
 */
function fx1(m) {
  // using sub-array

  let subArrayContainsRow = [];

  for (let i = m.length - 1; i >= 0; --i) {
    subArrayContainsRow = push(subArrayContainsRow, m[m.length - i - 1]);
  }

  for (let i = subArrayContainsRow.length - 1; i >= 0; --i) {
    subArrayContainsRow[i] = bubblesort(subArrayContainsRow[i]);
  }

  console.log("matrix after the row were sorted");
  advanceLogMatrix(subArrayContainsRow);

  for (let i = 0; i <= subArrayContainsRow[0].length - 1; ++i) {
    let column = [];
    for (let j = 0; j <= subArrayContainsRow.length - 1; ++j) {
      column = push(column, subArrayContainsRow[j][i]);
    }

    column = bubblesort(column);

    for (let k = 0; k <= column.length - 1; ++k) {
      subArrayContainsRow[k][i] = column[k];
    }
  }

  console.log("matrix after the column were sorted");

  return subArrayContainsRow;
}

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx2(m) {
  // not using sub-array
  for (let i = m.length - 1; i >= 0; --i) {
    m[i] = bubblesort(m[i]);
  }

  console.log("matrix after the row were sorted");
  advanceLogMatrix(m);

  for (let i = m[0].length - 1; i >= 0; --i) {
    for (let j = m.length - 1; j >= 0; --j) {
      for (let k = j - 1; k >= 0; --k) {
        if (m[k][i] > m[j][i]) {
          const temporary = m[k][i];
          m[k][i] = m[j][i];
          m[j][i] = temporary;
        }
      }
    }
  }

  console.log("matrix after the column were sorted");
  return m;
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
  advanceLogMatrix(fx1(m3));
  // console.log(fx(m3));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx1(m4));
  // console.log(fx(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx1(m5));
  // console.log(fx(m5));
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
  advanceLogMatrix(fx2(m3));
  // console.log(fx(m3));

  advanceLogMatrix(m4);
  advanceLogMatrix(fx2(m4));
  // console.log(fx(m4));

  advanceLogMatrix(m5);
  advanceLogMatrix(fx2(m5));
  // console.log(fx(m5));
}

{
  // test1();
  test2();
}
