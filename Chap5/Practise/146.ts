/**
 * Find the array first negative value
 * If it don't have then returns 1
 */

function E146(a: number[]): number {
  let ret: number = 1;
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (element < 0) {
      ret = element;
      break;
    }
  }
  return ret;
}

{
  const a = [1, 2, -5, 1, 2, -6, -7]; // -5
  const b = [1, 2, 1, 1, 2, -6, -7]; // -6
  const c = [-7, 2, -5, 1, 2, -6, -7]; // -7
  console.log(E146(a));
  console.log(E146(b));
  console.log(E146(c));
}
