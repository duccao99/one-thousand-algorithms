/**
 * Find the array position that was a biggest negative value
 * If array don't have negative number then returns -1
 */

function E154(a: number[]): number {
  let ret: number = -1;
  let max: number = -9999;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] < 0 && a[i] > max) {
      max = a[i];
      ret = max;
    }
  }
  return ret;
}

{
  const a = [1, 2, -5, 1, 28, 6, 5, 11, -6, -4, -5]; // -4
  const b = [-1, -2, -4, -6, 2, 4, 3, 4]; // -1
  const c = [1, 5, 1, 1, 3]; // -1
  console.log(E154(a));
  console.log(E154(b));
  console.log(E154(c));
}
