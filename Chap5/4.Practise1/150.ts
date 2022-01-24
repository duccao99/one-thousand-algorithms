/**
 * Find the array maximum negative number
 * If it don't have negative number then returns 0
 *
 * Idea:
 *
 * + loop check if a[i] < 0 && a[i] < max ? a[i] = max
 */

function E150(a: number[]): number {
  let max_negative = 0;
  let minimum = -99999;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] < 0 && a[i] > minimum) {
      minimum = a[i];
      max_negative = minimum;
    }
  }

  return max_negative;
}

{
  const a = [1, 2, -5, 1, 28, 6, 5, 11, -6, -4, -5]; // -4
  const b = [-1, -2, -1, -1, 2, 4, 3, 4]; // -1
  const c = [1, 0, 1, 4, 6, 8, 28]; // 0
  console.log(E150(a));
  console.log(E150(b));
  console.log(E150(c));
}
