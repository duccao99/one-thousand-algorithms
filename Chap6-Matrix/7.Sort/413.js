/**
 * Problem: Write a function to sort the elements
 * in the matrix as description bellow
 * + The row has even index was sorted in ascending order
 * from the left to the right
 * + The row has odd index was sorted in descending order
 * from the left to the right
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
 * 1| 6 5 4
 * 2| 7 8 9
 * 3| 3 2 1
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function bubbleSort(a) {
  /**
   * - a = [3,2,1]
   * - ret = [1,2,3]
   */
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] > a[i]) {
        swapArray(a, i, j);
      }
    }
  }
  return a;
}

function restOperator() {
  /**
   * - [...a]
   * []
   */
}

/**
 *
 * @param {Array} a
 */
function shift(a) {
  /**
   * -------0 1 2
   * - a = [1,2,3]
   * ---------0 1
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
 */
function reverseArray(a) {
  /**
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   * ---------0 1 2 3 4
   * - ret = [5,4,3,2,1]
   *
   */
  const arrayMiddleIndex = Math.floor((a.length - 1) / 2);

  for (let i = a.length - 1; i >= arrayMiddleIndex; --i) {
    swapArray(a, i, a.length - i - 1);
  }

  return a;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 *
 */
function swapArray(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx(m) {
  for (let i = m.length - 1; i >= 0; --i) {
    if (isEvenNumber(i)) {
      // ascending order
      m[i] = bubbleSort(m[i]);
    }
    if (isOddNumber(i)) {
      // descending order
      m[i] = bubbleSort(m[i]);
      m[i] = reverseArray(m[i]);
    }
  }

  return m;
}

/**
 *
 * @param {Number} n
 */
function isOddNumber(n) {
  return n % 2 !== 0;
}
/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return n % 2 === 0;
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
  console.log(fx(m3));
  // advanceLogMatrix(fx(m3));

  advanceLogMatrix(m4);
  console.log(fx(m4));
  // advanceLogMatrix(fx(m4));

  advanceLogMatrix(m5);
  console.log(fx(m5));
  // advanceLogMatrix(fx(m5));
}

{
  test();
}
