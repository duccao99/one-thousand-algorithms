const a = [5, 3, 2, 1, 4, 7, 6, 9];

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
 *
 */
function quickSort(a, left, right) {
  if (a.length > 1) {
    let index = partition(a, left, right);

    if (left < index - 1) {
      quickSort(a, left, index - 1);
    }
    if (index < right) {
      quickSort(a, index, right);
    }
  }

  return a;
}

console.log(quickSort(a, 0, a.length - 1));

/**
 * -------0 1 2 3 4
 * + a = [5,4,1,3,2]
 * + left = 0
 * + right = 4 = a.length - 1
 * + a.length = 5
 *
 * + quickSort(a,left,right)
 * + quickSort(a,0,4)
 *   + index = partition(a,left,right)
 *   + index = partition(a,0,4)
 *
 *   + partition(a,0,4)
 *     + pivot = a[(0+4)/2] = a[4/2] = a[2] = 1
 *     + i = 0
 *     + j = 4
 *
 *     + while(i<=j ){
 *       + 0<=4
 *       + 1<=2
 *        while(a[i] < pivot ){
 *          i++
 *          // a[i] = 5 > pivot
 *          // i = 0
 *        }
 *        while(1 < a[j] ){
 *          j--
 *          // j = 3
 *        }
 *        if(i<=j){
 *           swap(a,i,j) // swap(a,0,3)
 *           i++;
 *           j--;
 *           // a = [3,4,1,5,2]
 *           // i = 1
 *           // j = 2
 *        }
 *     }
 *
 *
 */
