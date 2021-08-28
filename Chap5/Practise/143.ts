/**
 * Find the array first even number. If the array don't have any even number then returns -1
 */

function E143(a: number[]): number {
  let ret: number = -1;

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (element % 2 === 0) {
      ret = element;
      break;
    }
  }

  return ret;
}

{
  const a = [1, 2, 3, 4, 5]; // 2
  const b = [1, 1, 3, 4, 5, 2, 6]; //4
  console.log(E143(a));
  console.log(E143(b));
}
