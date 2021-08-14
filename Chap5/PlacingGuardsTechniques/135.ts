/**
 * Write a function to find the array first positive value
 * if the array does not contains the positive value then return -1
 */

function E135(a: number[]): number {
  var guard = -1;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] > 0) {
      guard = a[i];
      break;
    }
  }
  return guard;
}

console.log(E135([1, 2, 3, 4, 5]));
console.log(E135([-1, -2, 3, 4]));
console.log(E135([-1, -2]));
