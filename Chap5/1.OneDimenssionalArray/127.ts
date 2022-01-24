/**
 * Write a function to arrange the float array in ascending order
 *
 * Example: [1,3,2,4,5] -> [1,2,3,4,5]
 *
 *
 * Check Idea
 * + i = 0
 *   + j = 1, 1 > 3 ? 3 1: 1 3
 *   + j = 2, 1 > 2 ? 2 1: 1 2
 *   + j = 3, 1 > 4 ? 4 1: 1 4
 *   + j = 4, 1 > 5 ? 1 5: 5 1
 * 1 3 2 4 5
 *
 * + i = 1,
 *   + j = 2, 3 > 2 ? 2 3
 * 1 2 3 4 5
 *   + j = 3, 2 > 4 ?
 *   + j = 4, 2 > 5 ?
 * 1 2 3 4 5
 *
 * + i = 2
 *   + j = 3, 3 > 4 ?
 *   + j = 4, 3 > 5 ?
 * 1 2 3 4 5
 * ...
 * +
 *
 *
 * Idea:
 * + step 1: loop i from 1 to n - 1, loop j from i + 1 to n - 1
 * + step 2: check if a[i] > a[j] ? swap it
 *
 *
 */

function swap(a: number[], i: number, j: number): void {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function E127(a: number[]): number[] {
  // O(n^2)
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] > a[j]) {
        swap(a, i, j);
      }
    }
  }
  return a;
}

console.log(E127([1, 3, 2, 5, 4]));
