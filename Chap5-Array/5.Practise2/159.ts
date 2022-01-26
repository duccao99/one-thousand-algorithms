/**
 * Given number array, find the first value that is greater than 2021.
 * If array do not contains any value that satisfy the condition then returns 0
 *
 * Idea:
 * + loop i from 0 to n - 1
 * + check then break
 */

function E159(a: number[]): number {
  let result: number = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > 2021) {
      result = a[i];
      break;
    }
  }

  return result;
}

{
  const a = [1, 2, 2021, 2022, 2023];
  console.log(E159(a));
}
