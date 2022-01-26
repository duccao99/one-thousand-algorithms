/**
 * Write a function to list all array even numbers
 *
 * Idea:
 * + loop & check
 */
function E132(a: number[]): void {
  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] % 2 === 0) {
      console.log(a[i]);
    }
  }
}

E132([1, 2, 3, 4, 5, 6]);
