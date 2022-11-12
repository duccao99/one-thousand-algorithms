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
 * @param {Array} array2d
 */
function logTwoDimensionalArray(array2d) {
  console.log("Log Two Dimensional Array Program");
  const lastRowIndex = array2d.length - 1;
  const lastColumnIndex = array2d[0].length - 1;

  const commaSpace = " ";
  const elementSpace = " ";
  const negativeSpace = " ";

  let rowIndexIndicate = "-- ";
  for (let i = 0; i <= lastRowIndex; ++i) {
    if (i === 0) {
      rowIndexIndicate += i;
    }

    if (i !== 0) {
      if (array2d[0][i] < 0) {
        rowIndexIndicate += negativeSpace;
        rowIndexIndicate += commaSpace;
        rowIndexIndicate += elementSpace;
        rowIndexIndicate += i;
      }

      if (array2d[0][i] > 0) {
        rowIndexIndicate += commaSpace;
        rowIndexIndicate += elementSpace;
        rowIndexIndicate += i;
      }
    }
  }

  console.log(rowIndexIndicate);

  for (let j = 0; j <= lastRowIndex; ++j) {
    console.log(array2d[j]);
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

function f(a) {
  const numberElements = 6 * 6;
  const hourglassArea = 9;
  const numberHourglass = numberElements / hourglassArea;

  for (let i = 1; i <= numberHourglass; ++i) {
    console.log(i);
  }
}

logTwoDimensionalArray(array2d);

// console.log(f(array2d));
