/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 * @param {Number} left
 * @param {Number} rights
 */
function partition(a, left, right) {
  // Ask: why floor but not round?
  // const pivot = a[Math.round((left + right) / 2)];
  const pivot = a[Math.floor((left + right) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    while (a[i] < pivot) {
      i++;
    }

    while (a[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(a, i, j);
      i++;
      j--;
    }
  }

  return i;
}

/**
 *
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 */
function QuickSort(a, left, right) {
  let index;

  if (a.length > 1) {
    index = partition(a, left, right);
    console.log(index);
    console.log(right);

    // if (left < index - 1) {
    //   QuickSort(a, left, index - 1);
    // }

    // if (index < right) {
    //   QuickSort(a, index, right);
    // }
  }

  return a;
}

/**
 *
 * -------0 1 2 3 4 5 6 7-------
 * - a = [1,4,3,2,5,8,7,9]
 * + a.length - 1 = 7
 * + a = QuickSort(a,0,a.length - 1)
 * + index = partition(a,left,right)
 * + index = partition(a,0,7)
 *   + partition(a,0,7)
 *     + pivot = round((0+7)/2) = round(3.5) = 4
 *     + i = 0
 *     + j = 7
 *        + while(i<=j) - (0<=7)
 *          + while(a[i] < pivot) - i++
 *            + a[0] = 1 < 4, i = 1
 *            + a[1] = 4 = 4, i = 1, break loop
 *          + while(a[j] > pivot) - j--
 *            + a[7] = 9 > 4, j = 6
 *            + a[6] = 7 > 4, j = 5
 *            + a[5] = 8 > 4, j = 4
 *            + a[4] = 5 > 4, j = 3
 *            + a[3] = 2 < 4, j = 3, break loop
 *          + if (i <= j) - swap(a,i,j) & i++ & j--
 *            + 1 <= 3
 *            + swap(a,1,3) - [1,2,3,4,5,8,7,9]
 *            + i = 2
 *            + j = 2
 *
 *            + 2 <= 2
 *            + swap(a,2,2) - [1,2,3,4,5,8,7,9]
 *            + i = 3
 *            + j = 1
 *
 *            + 3 <= 1 - break loop
 *
 *     + return i = 3
 *
 *  + if (left < index - 1)
 *    + 0 < 2
 *    + QuickSort(a,left,index-1) - divide and conquer
 *    + QuickSort(a,0,2)
 *
 *
 *  + if (index < right)
 *    + 3 < 7
 *    + QuickSort(a,index,right) - divide and conquer
 *    + QuickSort(a,3,7)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
