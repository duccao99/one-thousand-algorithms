/**
 * Write a function to find the position that it's value was
 * a integer array minimum value
 *
 * Idea:
 * + step 1: find min function
 * + step 2: loop i from 0 to len - 1, a[i] = min ? pos = i
 */

function minArray(a: number[]) {
  var min = a[0];
  for (let i = 0; i < a.length; ++i) {
    if (a[i] <= min) {
      min = a[i];
    }
  }
  return min;
}

function E123(a: number[]): number {
  var pos: number = 0;
  var min_a: number = minArray(a);

  for (let i = 0; i < a.length; ++i) {
    if (a[i] === min_a) {
      pos = i;
      break;
    }
  }

  return pos;
}

console.log(E123([1, 2, 3, 4, 5]));
console.log(E123([5, 4, 2, 3, 1]));
