/**
 * Write a function that find the last even number in the array
 * If the array does not contains the even number then returns -1
 *
 * Idea:
 * + loop i from 0 to n - 1
 * + if a[i] is even them place guard at it's position
 * + the last `if` will be the last even number
 */

function E136(a: number[]): number {
  var guard: number = -1,
    i: number = 0;

  while (i < a.length) {
    if (a[i] % 2 === 0) guard = a[i];
    i++;
  }
  return guard;
}

console.log(E136([1, 2, 3, 4, 5, 6, 7]));
console.log(E136([1, 1, 1, 1, 1]));
