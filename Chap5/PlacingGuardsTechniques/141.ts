/**
 * Find the position that contains the array positive minimum value.
 * If the array don't have any positive number then return -1
 *
 * Idea:
 * + find min
 * + guard tech
 *
 */

function min(a: number[]): number {
  let ret = a[0];
  a.forEach((element) => {
    if (element < ret) ret = element;
  });
  return ret;
}

function E141(a: number[]): number {
  let flag = -1;

  let min_array = min(a);

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (element === min_array && min_array > 0) {
      flag = index;
      break;
    }
  }

  return flag;
}

const a = [1, 2, 3, 2, 1]; // 0
const b = [-1, -2]; // -1
const c = [100, 1, 2]; // 1

console.log(E141(a));
console.log(E141(b));
console.log(E141(c));
