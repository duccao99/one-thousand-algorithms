/**
 * Find the array last positive number
 * If it don't have then return -1
 */

function E147(a: number[]): number {
  let ret: number = -1;

  for (let index = a.length - 1; index >= 0; index--) {
    const element = a[index];
    if (element > 0) {
      ret = element;
      break;
    }
  }

  return ret;
}

{
  const a = [1, 2, -5, 1, 2, -6, -7]; // 2
  const b = [-1, -2, -1, -1, 2, 4, 3, 4, -6, -7]; // 4
  const c = [-7, -2, -5, -1, -2, -6, -7]; // -1

  console.log(E147(a));
  console.log(E147(b));
  console.log(E147(c));
}
