/**
 * Given an number array, find a position that satisfy two conditions
 * + Have two nearby elements and it's value equal to two nearby elements multiplication
 * + If the array has no element which satisfies the first condition then returns -1
 *
 *
 * Example 1: [1,2,2,3,5] -> 1 (a[1] = 2 = 1 * 2 = a[0] * a[2])
 * Example 2: [1,1,2,3,4,5] -> -1
 * Example 3: [1,2,2,8,4,5,6] -> [1,3]
 *
 *
 * Idea:
 * + loop i from 1 to n - 2
 * + check if a[i] = a[i-1] * a[i+1] then push index into ret[]
 * + ret.len = 0 ? ret : -1
 */

function E162(a: number[]): number[] | number {
  const ret: number[] = [];

  for (let i = 1; i < a.length - 1; ++i) {
    if (a[i] === a[i - 1] * a[i + 1]) {
      ret.push(i);
    }
  }

  return ret.length === 0 ? -1 : ret;
}

{
  const a1 = [1, 2, 2, 3, 5]; // [1]
  const a2 = [1, 1, 2, 3, 4, 5]; // -1
  const a3 = [1, 2, 2, 8, 4, 5, 6]; // [1,3]

  console.log(E162(a1)); //
  console.log(E162(a2));
  console.log(E162(a3));
}
