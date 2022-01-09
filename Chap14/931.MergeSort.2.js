/**
 *
 * @param {Array} a
 */
function mergeSort(a) {
  if (a.length <= 1) return a;
  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);
  return mergingSortingLeftAndRight(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function mergingSortingLeftAndRight(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left[0]);
      left.shift();
    }
    if (left[0] >= right[0]) {
      sorted.push(right[0]);
      right.shift();
    }
  }
  return [...sorted, ...left, ...right];
}
