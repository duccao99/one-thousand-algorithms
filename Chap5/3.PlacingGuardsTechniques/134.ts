/**
 * Write a function to find the array maximum value
 *
 * Idea:
 * + let guard = a[0]
 * + loop and check if a[i] > guard then guard = a[i]
 */

function E134(a: number[]): number {
  let guard = a[0],
    i = 0;

  while (i < a.length) {
    if (a[i] > guard) guard = a[i];
    i++;
  }
  return guard;
}
console.log(E134([1, 2, 3, 4, 5]));
console.log(E134([5, 4, 3, 2, 1]));
