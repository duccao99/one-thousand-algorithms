/**
 * Find the array "Farthest from x" value
 *
 * Idea:
 * + step 1: input: array, x
 * + step 2: output: value that farthest from x
 * + step 3: get the |a[i] - x| array (1)
 * + step 4: get step 3 max
 * + step 5: step 4 was result
 *
 */

function E155(a: number[], x: number): number {
  const carry: number[] = [];
  for (let i = 0; i < a.length; ++i) {
    carry.push(Math.abs(a[i] - x));
  }

  let farthest: number = carry[0];
  let farthest_pos: number = -1;

  for (let i = 0; i < carry.length; ++i) {
    if (carry[i] > farthest) {
      farthest = carry[i];
      farthest_pos = i;
    }
  }

  return farthest_pos !== -1 ? a[farthest_pos] : 0;
}

{
  const x = 15;
  const a = [24, 45, 23, 13, 43, -12];
  console.log(E155(a, x)); // 45
}
