/**
 * Find the array smallest even number
 * If it has no even number then returns -1
 */

function E153(a: number[]): number {
  let ret: number = -1;
  let min: number = 99999;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] % 2 === 0 && a[i] < min) {
      min = a[i];
      ret = min;
    }
  }

  return ret;
}

{
  const a = [1, 2, -5, 1, 28, 6, 5, 11, -6, -4, -5]; // -6
  const b = [-1, -2, -1, -1, 2, 4, 3, 4]; // -2
  const c = [1, 5, 1, 1, 3]; // -1
  console.log(E153(a));
  console.log(E153(b));
  console.log(E153(c));
}
