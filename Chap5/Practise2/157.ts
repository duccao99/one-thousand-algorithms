/**
 * Given an number array, find the [a,b] which were contains all
 * array value
 *
 * Idea:
 * + Sort array in ascending order
 * + a is a[0], b is a[a.len - 1]
 * + Use bubble sort
 */

type E157Return = [number, number];

function swap(a: number[], i: number, j: number): void {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function bubbleSort(a: number[]): void {
  /**
   * Bubble sort idea:
   * When it's heavy it sinks
   * When it's light it rises
   */

  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] < a[i]) {
        swap(a, i, j);
      }
    }
  }
}

function E157(a: number[]): E157Return {
  const ret: E157Return = [0, 0];

  bubbleSort(a);

  return [a[0], a[a.length - 1]];
}

{
  const a = [1, 3, 5, 4, 2];
  const b = [1, 3, 5, 4, 2, 9, 8, 6];
  const c = [1, 3, -5, 100, 300, 10, 11];

  console.log(`[${E157(a)}]`); // [1,5]
  console.log(`[${E157(b)}]`); // [1,9]
  console.log(`[${E157(c)}]`); // [-5,300]
}
