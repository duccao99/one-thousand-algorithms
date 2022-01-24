/**
 * Write a function to list all position that its value was a negative
 * value of an float array
 *
 * Check Idea:
 * [-1,2,3,-4,5] -> 0 3
 *
 * Idea:
 * + loop & check
 */

function E133(a: number[]): void {
  for (let i = a.length - 1; i >= 0; i--) if (a[i] < 0) console.log(i);
}

E133([1, 2, 3, 4, 5]);

console.log('\n');

E133([-1, 2, -3, 4, -5]);
