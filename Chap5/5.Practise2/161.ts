/**
 * Given an number array, find the first element that have value within (x,y).
 * If the array do not have any element that satisfy the condition then returns x
 *
 *
 */

function E161(a: number[], x: number, y: number): number {
  let flag: boolean = true;
  let ret: number = -1;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > x) {
      flag = false;
      ret = a[i];
      break;
    }
  }

  if (flag) {
    return x;
  }

  return ret;
}
{
  const a = [1, 2, 5, 3, 4];
  const x = 2;
  const y = 4;
  console.log(E161(a, x, y)); // 5
}
