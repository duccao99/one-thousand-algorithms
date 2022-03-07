/**
 * Problem: sort the even numbers in the matrix on
 * row and column descening order in two ways, use sub-array
 * and not use sub-array
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
 * 2| 7 8 9
 * 0| 1 2 3
 * 3| 3 2 1
 * 1| 6 5 4
 *
 *
 *
 */

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx1(m) {
  for (let i = m.length - 1; i >= 0; --i) {
    const row = m[i];
    for (let j = row.length - 1; j >= 0; --j) {
      for (let k = j - 1; k >= 0; --k) {
        if (row[k] <= row[j] && isEvenNumber(row[k]) && isEvenNumber(row[j])) {
          const temporary = row[k];
          row[k] = row[j];
          row[j] = temporary;
        }
      }
    }
  }
  console.log(
    "matrix after the even element on a row were sorted in descending order"
  );

  advanceLogMatrix(m);

  for (let i = m[0].length - 1; i >= 0; --i) {
    let column = [];
    for (let j = m.length - 1; j >= 0; --j) {
      if (isEvenNumber(m[j][i])) {
        column = push(column, m[j][i]);
      }
    }

    for (let k = column.length - 1; k >= 0; --k) {
      for (let l = k - 1; l >= 0; --l) {
        if (column[l] >= column[k]) {
          const temporary = column[l];
          column[l] = column[k];
          column[k] = temporary;
        }
      }
    }

    for (let n = m.length - 1; n >= 0; --n) {
      if (isEvenNumber(m[n][i])) {
        m[n][i] = column[0];
        column = shift(column);
      }
    }
  }

  console.log(
    "matrix after the even element on a column were sorted in descending order"
  );

  return m;
}

/**
 *
 * @param {Array<Array>} m
 *
 */
function fx2(m) {}

/**
 *
 * @param {Array} a
 */
function shift(a) {
  /**
   * ------0 1 2
   * - a =[1,2,3]
   * ---------0 1
   * - ret = [2,3]
   *
   *
   */
  const ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i + 1];
  }
  return ret;
}

/**
 *
 * @param {Number} n
 */
function decToBin8Bit(n) {
  /**
   *
   * @param {Number} n
   */
  function getPositiveNumberArrayOfBit(n) {
    /**
     * + 1
     * + 0000 0001
     * + 2
     * + 0000 0010
     * + 10
     * + 0000 1010
     *
     * - n = 2
     * - ret = 0000 0010
     *
     * + 10/2 = 5 - mod = 0
     * + 5/2 = 2.5 - mod = 1
     * + 2/2 = 1 - mod = 0
     * + 1/2 = 0.5 - mod = 1
     * -> 0000 1010
     *
     */
    let bitset = "0000";
    let moduloBitSet = [];

    while (n !== 0) {
      moduloBitSet = push(moduloBitSet, n % 2);
      n = Math.floor(n / 2);
    }
    moduloBitSet = reverseArray(moduloBitSet);

    if (moduloBitSet.length < 4) {
      /**
       * - length = 1
       * - add 3 = 4 - 1 zero
       * - ret = 0001
       *
       * - length = 2
       * - add 2 = 4 - 2 zero
       *
       */
      let maxExtraZeros = 4;
      for (let i = maxExtraZeros - moduloBitSet.length - 1; i >= 0; --i) {
        moduloBitSet = reversePush(moduloBitSet, 0);
      }
    }

    return bitset + " " + join(moduloBitSet, "");
  }

  if (n >= 0) {
    return getPositiveNumberArrayOfBit(n);
  }

  if (n < 0) {
    /**
     * Find n = -1 using two's complement numbers
     * - n = -1
     * + 1 decimal = 0000 0001 binary
     * + `Inverted` bit = 1111 1110
     * + add 1
     *   1111 1110
     * + 0000 0001
     *   _________
     *   1111 1111
     *   7654 3210 (index)
     * -2^7 + 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0 = -1
     *
     * -> n = -1 decimal = 1111 1111 binary (two's complement numbers)
     *
     * - n = -8
     * + 8 decimal = 0000 1000
     * + invert ret = 1111 0111
     * + add 1
     * 1111 0111
     * 0000 0001
     * 1111 1000
     * ----------------7654 3210
     * -> -8 decimal = 1111 1000 binary (two's complement numbers)
     * -2^7 + 2^6 + 2^5 + 2^4 + 2^3 = -8
     *
     *
     *
     *
     *
     *
     * + step 1: get absolute n array of bits
     * + step 2: invert step 1
     * + step 3: add step 2 with 0000 0001
     *     + case 1:
     *        1111 1111
     *      + 0000 0001
     *       10000 0000
     *
     *     + case 2:
     *        0000 1111
     *      + 0000 0001
     *
     *
     */
    let nPositiveBitSet = stringToArray(
      getPositiveNumberArrayOfBit(Math.abs(n))
    );

    for (let i = nPositiveBitSet.length - 1; i >= 0; --i) {
      let flag = false;

      if (nPositiveBitSet[i] === "0") {
        nPositiveBitSet[i] = "1";
        flag = true;
      }

      if (flag === false) {
        if (nPositiveBitSet[i] === "1") {
          nPositiveBitSet[i] = "0";
        }
      }
    }

    let rememberOne = false;

    for (let i = nPositiveBitSet.length - 1; i >= 0; --i) {
      if (nPositiveBitSet[i] !== " ") {
        if (i === nPositiveBitSet.length - 1) {
          let addition = +nPositiveBitSet[i] + 1;
          if (addition === 2) {
            rememberOne = true;
            nPositiveBitSet[i] = "0";
          }
        }

        if (i !== nPositiveBitSet.length - 1) {
          let addition = +nPositiveBitSet[i] + 0;

          if (rememberOne) {
            addition += 1;
            if (addition === 2) {
              nPositiveBitSet[i] = "0";
              rememberOne = true;
            }

            if (addition !== 2) {
              nPositiveBitSet[i] = "1";
              rememberOne = false;
            }
          }
          if (!rememberOne) {
            nPositiveBitSet[i] = `${addition}`;
          }
        }
      }
    }

    return join(nPositiveBitSet, "");
  }
}

/**
 *
 * @param {string} s
 */
function stringToArray(s) {
  const ret = new Array(s.length);

  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = s[i];
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function reversePush(a, e) {
  /**
   * -------0 1 2
   * - a = [1,2,3]
   * - e = 4
   * ---------0 1 2 3
   * - ret = [4,1,2,3]
   */
  const ret = new Array(a.length + 1);
  ret[0] = e;
  for (let i = ret.length - 1; i >= 1; --i) {
    ret[i] = a[i - 1];
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
 * @param {Number} n
 */
function isEvenNumber(n) {
  if (n < 0) return n % 2 === 0;

  const n8bitBinary = decToBin8Bit(n);
  return +n8bitBinary[n8bitBinary.length - 1] === 0;
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
   *
   * + from = -10
   * + to = 20
   * + math.random() =  [0,0.99999]
   * + ret = [-10,20] = [from,to]
   * -> How to get a equation from those stuff above ?
   * -> Try to use math to get the equation
   *
   * + [0,29.99998] + -10 = [-10,19.9998]
   * + 0.99 * 30 = 29.999997
   * + 30 = 20 - -10 = to - from
   * + math.random() * (to-from) = [0,0.9999] * 30 = [0,29.99997]
   * + math.random() * (to-from) + from = [-10,19.999997]
   * + math.round( math.random() * (to-from) + from ) = [-10,20]
   *
   *
   *
   * // Given c, x and y are hidden
   * + ax + by = c
   * + a'x + b'y = c'
   *
   *          c - by
   *  + x =  _______
   *            a
   *
   *             a' x (c-by)
   *  + y = c' - ___________
   *                  a
   *
   * - Exercise
   * y = 2x + 4 (1)
   * y = 3x + 2 (2)
   * (2) - (1)
   * <=> y - y = x - 2
   * <=> 0 = x - 2
   * <=> 2 = x (3)
   *
   * (3) -> (1)
   * <=> y = 2 * 2 + 4 = 4 + 4 = 8
   *
   * => (x,y) = (2,8) (4)
   * + (4) -> 1 <=> 8 = 2 * 2 + 4 = 4 + 4 = 8
   * + (4) -> 2 <=> 8 = 3 * 2 + 2 = 6 + 2 = 8
   *
   * => (x,y) = (2,8)
   *
   * -> What is the essence of (1) equation?
   *    -> Can't answer this, so fucking insanse
   *    -> Why I can't answer this question?
   *    -> Was my limitation stuck at there?
   *    -> Get out of my ways, go fuck yourself
   *
   * -> What is the essence of (2) equation?
   * -> What is the essence of x and y?
   *
   * -> Why do we have those equation?
   * -> How can we view/use those in real life?
   *
   * -> Why I can't answer those question above?
   * -> Why god? go fuck yourself, get out of my ways!
   * -> Jupiter give me your energy please! Please Jupiter
   * I can't stay here anymore, help meeeeeeeee! Let't me gooooo
   *
   *
   *
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
  test1();
  // test2();
}
