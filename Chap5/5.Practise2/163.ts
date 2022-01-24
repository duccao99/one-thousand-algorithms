/**
 * Find the first array square number
 *
 * Idea
 * + func check square
 * + loop check break
 */

function isSquare(n: number): boolean {
  return Math.pow(Math.floor(Math.sqrt(n)), 2) - n === 0;
}

function E163(a: number[]): number {
  let ret: number = -1;

  for (let i = 0; i < a.length; ++i) {
    if (isSquare(a[i])) {
      ret = a[i];
      break;
    }
  }

  return ret;
}

{
  const a = [1, 2, 3, 4, 5]; // 1
  const b = [2, 3, 4, 5, 6, 7, 8, 9]; // 4
  console.log(E163(a));
  console.log(E163(b));
}
