/**
 * Problem: Sum elements in array 2 dimension in hourglass way
 *
 * -9 -9 -9  1 1 1
 * 0 -9  0  4 3 2
 * -9 -9 -9  1 2 3
 * 0  0  8  6 6 0
 * 0  0  0 -2 0 0
 * 0  0  1  2 4 0
 *
 * hourglass
 * x x x
 *   x
 * x x x
 *
 * + step 1: hourglass traverse
 * + step 2: get subsets
 * + step 3: sum
 *
 * -- -------------------
 * + hourglass
 *   + row: 3
 *     + row 1: 3 elements
 *     + row 2: 1 middle element
 *     + row 3: 3 elements
 *   + col: 3
 *     + col 1: 2 elements, first and last
 *     + col 2: 3 elements
 *     + col 3: 2 elements, first and last
 * + total elements: 6 x 6 = 36
 * + hourglass area: 9
 * + number of hourglass in 2d array: 36 / 9 = 4
 *   + total elements / hourglass area
 *
 *
 * + 6x6
 *   + 4 hourglass
 *
 *
 * + i: 1 -> 4
 *   + 1 -> number of hourglass
 *
 *
 *--0 1  2   3 4 5
 *0| -9 -9 -9  1 1 1
 *1| 0 -9  0  4 3 2
 *2| -9 -9 -9  1 2 3
 *3| 0  0  8  6 6 0
 *4| 0  0  0 -2 0 0
 *5| 0  0  1  2 4 0
 *
 * + i = 1
 *   + ret
 *     -9 -9 -9
 *      0 -9  0
 *     -9 -9 -9
 *
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function wasExistNegativeNumberInAnArray(a) {
  /**
   * + a = [1,2,-1,3,4,5,-6]
   * + ret = true
   *
   *
   */
  let flag = false;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] < 0) {
      flag = true;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array} array2d
 */
function getRowIndicate(array2d) {
  let ret = "--";
  const lastColumnIndex = array2d[0].length - 1;
  const lastRowIndex = array2d.length - 1;
  const arrayIndicateNumber = [];
  const columnElements = [];

  for (let i = 0; i <= lastColumnIndex; ++i) {
    let columnTraverse = [];
    for (let j = 0; j <= lastRowIndex; ++j) {
      columnTraverse.push(array2d[j][i]);
    }

    if (wasExistNegativeNumberInAnArray(columnTraverse)) {
      arrayIndicateNumber.push(-1);
    }

    if (!wasExistNegativeNumberInAnArray(columnTraverse)) {
      arrayIndicateNumber.push(1);
    }

    columnElements.push(columnTraverse);
  }

  for (let i = 0; i <= arrayIndicateNumber.length - 1; ++i) {
    if (arrayIndicateNumber[i] === -1) {
      ret += " " + " " + i;
    }

    if (arrayIndicateNumber[i] === 1) {
      ret += " " + i;
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function push(a, element) {
  /**
   * + a = [1,2,3,4,5]
   * + element = 6
   * + ret = [1,2,3,4,5,6]
   *
   */
  const ret = new Array(a.length + 1);

  for (let i = a.length - 1; i >= 0; --i) {
    ret[i] = a[i];
  }

  ret[ret.length - 1] = element;

  return ret;
}

/**
 *
 * @param {Array} array2d
 */
function logTwoDimensionalArray(array2d) {
  console.log("Log Two Dimensional Array Program");
  const lastRowIndex = array2d.length - 1;
  const lastColumnIndex = array2d[0].length - 1;

  const commaSpace = " ";
  const elementSpace = " ";
  const negativeSpace = " ";

  let rowIndexIndicate = getRowIndicate(array2d);

  console.log(rowIndexIndicate);

  for (let j = 0; j <= lastRowIndex; ++j) {
    let rowTraverse = j + "|";
    let rowElements = [];

    for (let k = 0; k <= lastColumnIndex; ++k) {
      rowElements = push(rowElements, array2d[j][k]);
    }

    for (let l = 0; l <= rowElements.length - 1; ++l) {
      if (rowElements[l] < 0) {
        rowTraverse += " " + rowElements[l];
      }

      if (rowElements[l] >= 0) {
        const columnIndex = l;
        const columnElements = getArray2dColumnElements(array2d, columnIndex);
        if (wasExistNegativeNumberInAnArray(columnElements)) {
          rowTraverse += " " + " " + rowElements[l];
        }

        if (!wasExistNegativeNumberInAnArray(columnElements)) {
          rowTraverse += " " + rowElements[l];
        }
      }
    }

    if (wasExistNegativeNumberInAnArray(rowElements)) {
    }

    if (!wasExistNegativeNumberInAnArray(rowElements)) {
    }

    // console.log("rowElements: ", rowElements);
    console.log(rowTraverse);
  }
}

const array2d = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function f(array2d) {
  const numberElements = 6 * 6;
  const numberHourGlasses = 4 * 4;
  const maxHourGlassColumnIndex = 3;
  const maxHourGlassRowIndex = 3;

  for (let i = 0; i <= maxHourGlassColumnIndex; ++i) {
    const hourglass = [];
    const firstThreeElements = [];
    const secondOneElement = [];
    const lastThreeElements = [];

    const sci1 = i;
    const eci1 = i + maxHourGlassColumnIndex - 1;
    let rowIndexTraverse = 0;

    // first 3 elements
    for (let j = sci1; j <= eci1; ++j) {
      firstThreeElements.push(array2d[rowIndexTraverse][j]);
    }

    // last 3 elements
    rowIndexTraverse = maxHourGlassRowIndex - 1;

    for (let k = sci1; k <= eci1; ++k) {
      lastThreeElements.push(array2d[rowIndexTraverse][k]);
    }

    // middle 1 element
    rowIndexTraverse = 1;
    secondOneElement.push(array2d[rowIndexTraverse][i + 1]);

    hourglass.push(firstThreeElements, secondOneElement, lastThreeElements);

    console.log("hourglass: ", hourglass);
  }
}

/**
 *
 * @param {Array} array2d
 * @param {number} columnIndex
 *
 */
function getArray2dColumnElements(array2d, columnIndex) {
  let elements = [];
  const lastRowIndex = array2d.length - 1;
  for (let i = 0; i <= lastRowIndex; ++i) {
    elements = push(elements, array2d[i][columnIndex]);
  }
  return elements;
}

const a2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// console.log(f(array2d));
console.log(f(a2));
