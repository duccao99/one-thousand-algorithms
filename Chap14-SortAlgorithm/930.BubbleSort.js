/**
 * Bubble sort idea
 * + When it's heavy it sinks
 * + When it's light it rises
 *
 * Example: [1,4,3,5,2]
 * + check a[i] & all element behind a[i]
 * if all element behind a[i] is smaller (light) than a[i] then swap (rise) it
 *
 * [1,4,3,5,2]
 * + i = 0
 * 1 vs 4 3 5 2 ?
 *
 * 1 vs 4 ? 4 > 1 then do nothing - 1 4 3 5 2
 * 1 vs 3 ? 3 > 1 then do nothing - 1 4 3 5 2
 * 1 vs 5 ? 5 > 1 then do nothing - 1 4 3 5 2
 * 1 vs 2 ? 2 > 1 then do nothing - 1 4 3 5 2
 *
 * + i = 1
 * 4 vs 3 5 2 ?
 *
 * 4 vs 3 ? 3 < 4 then rises 3 -> 1 3 4 5 2
 * 3 vs 5 ? 5 > 3 then do nothing
 * 3 vs 2 ? 2 < 3 then rises 2 -> 1 2 4 5 3
 *
 * + i = 2
 * 4 vs 5 ? 5 > 4 then do nothing - 1 2 4 5 3
 * 4 vs 3 ? 3 < 4 then rise 3    -> 1 2 3 5 4
 *
 * + i = 3
 * 5 vs 4 ? 4 < 5 then rise 4   ->  1 2 3 4 5
 *
 *
 */

/**
 * Bubble sort in ascending order
 * @param a
 */
function bubbleSort(a) {
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

/**
 * Bubble sort in descending order
 * @param a
 */
function bubbleSortDesc(a) {
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] > a[i]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

{
  const a = [1, 4, 3, 5, 2];
  console.log(bubbleSort(a));
  console.log(bubbleSortDesc(a));
}
