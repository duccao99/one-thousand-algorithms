/**
 * Write a function to calculate the sum of negative number of an float array
 * Write a function to calculate the sum of float array negative number
 *
 * Idea:
 * + loop check and sum
 */

function E126(a: number[]): number {
  var ret: number = 0;
  for (let i = 0; i < a.length; ++i) if (a[i] < 0) ret += a[i];
  return ret;
}
console.log(E126([1, 2, 3, 4, 5]));
console.log(E126([1, 2, 3, 4, 5, -5, -5]));
