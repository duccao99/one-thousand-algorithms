/**
 * Problem: Sort the the matrix as description bellow
 * + the negative numbers in ascending order
 * + the positive numbers in descending order
 * + keep the same position with the zero/negative/positive numbers
 * + sort from the left to right, from top to bottom
 *
 *
 *
 *
 *
 * Understanding the problem
 * - matrix
 * -- 0 1 2
 * 0| -1 2 3
 * 1| 0 -5 6
 * 2| 7 8 -9
 * 3| -3 0 1
 *
 * - negative numbers = [-1,-5,-9,-3]
 * - negative numbers sorted in ascending order = [-9,-5,-3,-1]
 *
 * - positive numbers = [2,3,6,7,8,1]
 * - positive numbers sorted in descending order = [8,7,6,3,2,1]
 *
 *
 * - matrix ret
 * -- 0 1 2
 * 0| -9 8 7
 * 1| 0 -5 6
 * 2| 3 2 -3
 * 3| -1 0 1
 *
 *
 */

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx(m) {
  let positiveNumbers = [];
  let negativeNumbers = [];

  for (let i = m[0].length - 1; i >= 0; --i) {
    for (let j = m.length - 1; j >= 0; --j) {
      const mji = m[j][i];
      if (isPositiveNumber(mji)) {
        positiveNumbers = push(positiveNumbers, mji);
      }
      if (isNegativeNumber(mji)) {
        negativeNumbers = push(negativeNumbers, mji);
      }
    }
  }

  negativeNumbers = ascendingBubbleSort(negativeNumbers);

  positiveNumbers = descendingBubbleSort(positiveNumbers);

  for (let i = m.length - 1; i >= 0; --i) {
    for (let j = m[i].length - 1; j >= 0; --j) {
      if (isPositiveNumber(m[i][j])) {
        m[i][j] = positiveNumbers[positiveNumbers.length - 1];
        positiveNumbers = pop(positiveNumbers);
      }
      if (isNegativeNumber(m[i][j])) {
        m[i][j] = negativeNumbers[negativeNumbers.length - 1];
        negativeNumbers = pop(negativeNumbers);
      }
    }
  }

  console.log("matrix after it has been sorted");

  return m;
}

/**
 *
 * @param {Array} a
 */
function pop(a) {
  /**
   * - a = [1,2,3,4]
   * - ret = [1,2,3]
   */
  const ret = new Array(a.length - 1);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function ascendingBubbleSort(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] >= a[i]) {
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
function descendingBubbleSort(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] <= a[i]) {
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
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return n > 0;
}

/**
 *
 * @param {Number} n
 */
function isNegativeNumber(n) {
  return n < 0;
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
 * @param {Array} a
 */
function reverseArray(a) {
  const arrayMiddleIndex = Math.floor(a.length / 2);
  for (let i = a.length - 1; i >= arrayMiddleIndex; --i) {
    const temporary = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temporary;
  }
  return a;
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
