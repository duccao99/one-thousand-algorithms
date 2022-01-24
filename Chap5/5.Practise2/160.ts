/**
 * Given an number array, find the last negative which is less than -1.
 * If the array do not have any element that satisfy the condition then returns 0
 *
 * Example: [1,2,-1,-3,5,-4,5] -> -4
 *
 * Idea:
 * + loop from n - 1 to 0
 * + check and break
 */

function E160(a: number[]): number {
  let ret: number = 0;
  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] < -1) {
      ret = a[i];
      break;
    }
  }
  return ret;
}

{
  const a = [1, 2, -1, -3, 5, -4, 5]; // -4
  console.log(E160(a));
}
