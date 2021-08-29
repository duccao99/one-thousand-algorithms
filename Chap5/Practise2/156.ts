/**
 * Find the array position where its value was the closest to the x value
 *
 * Idea:
 * + step 1: input: array, x, output: position
 * + step 2: create an carry array to carry Math.abs(a[i]-x)
 * + step 3: find step 2 min, save pos at this
 *
 *
 */

function E156(a: number[], x: number): number | null {
  const carry: number[] = [];
  let pos: number = -1;

  for (let i = 0; i < a.length; ++i) {
    carry.push(Math.abs(a[i] - x));
  }

  let min: number = carry[0];
  for (let i = 0; i < carry.length; ++i) {
    if (carry[i] < min) {
      min = carry[i];
      pos = i;
    }
  }

  return pos !== -1 ? pos : null;
}
{
  const x = 15;
  const a = [24, 45, 23, 13, 43, -12];
  console.log(E156(a, x)); // 3
}
