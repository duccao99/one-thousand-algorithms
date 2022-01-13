/**
 * Find the float number array maximum value
 * Idea:
 * + max = -1;
 * + loop a
 * + if a[i] > max then max = a[i]
 */

function E122(a: number[]) {
  var max = -1;
  for (let i = 0; i < a.length; i++) {
    if (max <= a[i]) {
      max = a[i];
    }
  }
  return max;
}
console.log(E122([1, 2, 3, 2, 1]));
console.log(E122([1, 2, 3, 2, 1, 5]));
console.log(E122([1, 2, 3, 2, 1, 9]));
