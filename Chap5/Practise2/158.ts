/**
 * Given number array. Find x that in the interval [-x,x]
 * contains all array value
 *
 * Example: [-5,1,2,4,6] -> [-6,6]
 *
 * Idea:
 * + Step 1: split a into [negative number], [positive number]
 * + Step 2: find min [negative], max [positive]
 * + Step 3: compare (abs(min)>max)? [min,-min]: [-max,max]
 */

function bubbleSortAsc(a: number[]): number[] {
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] < a[i]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

function E158(a: number[]): number {
  const negatives: number[] = bubbleSortAsc(a.filter((ele) => ele < 0));
  const positives: number[] = bubbleSortAsc(a.filter((ele) => ele > 0));

  return Math.abs(
    negatives[0] > positives[positives.length - 1]
      ? -negatives[0]
      : positives[positives.length - 1]
  );
}

{
  const a = [-5, -4, -3, 1, 2, 4, 6]; // [-6,6]
  const b = [-5, -10, -4, -3, 1, 2, 4, 99, 6]; // [-99,99]
  const c = [-5, -50, -4, -3, 1, 2, 4, 300, 6]; // [-300,300]

  console.log(E158(a)); // 6
  console.log(E158(b)); // 99
  console.log(E158(c)); // 300
}
