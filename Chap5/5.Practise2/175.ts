/**
 * Given an distinct number array. Find the most adjacent couple element
 *
 * - Understanding problem
 *   - 1 3 6 10 15
 *
 *   + i = 0, a[0] = 1
 *     + |1 - 3| = 2
 *     + |1 - 6| = 5
 *     + |1 - 10| = 9
 *     + |1 - 15| = 14
 *   -> coupleInfo 1 = {
 *       couple: [1,3],
 *       spacing: 2
 *    }
 *
 *   + i = 1, a[1] = 3
 *     + |3 - 6| = 3
 *     + |3 - 10| = 7
 *     + |3 - 15| = 12
 *  -> coupleInfo 2 = {
 *       couple: [3,6],
 *       spacing: 3
 *     }
 *
 *   + i = 2, a[2] = 6
 *     + |6 - 10| = 4
 *     + |6 - 15| = 9
 *   -> coupleInfo 3 = {
 *      couple: [6,10],
 *      spacing: 4
 *    }
 *
 *   + i = 3, a[3] = 10
 *     + |10 - 15| = 5
 *     coupleInfo 4 = {
 *       couple: [10,15],
 *       spacing: 5
 *     }
 *
 *   - couples = [carry all coupleInfo]
 *   - loop couples find the min spacing of those couple
 *   - result is the couple that has a minimum spacing
 *
 * - Approach
 * + step 1: loop O(n^2), i, j = i + 1
 * + step 2: let couples = [], carry all couple info, spacing = |a[i] - a[j]|, couple: [a[i],a[j]]
 * + step 3: find the minimum spacing in couples.spacing then push it into coupleResults = []
 * + step 4: find the minimum spacing in coupleResults.spacing then return that couple
 */

function mergeSort(a: number[]): number[] {
  if (a.length <= 1) return a;
  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);
  return mergeUnsortedArrays(mergeSort(left), mergeSort(right));
}

function mergeUnsortedArrays(left: number[], right: number[]): number[] {
  const sortedItems: number[] = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedItems.push(left[0]);
      left.shift();
    }
    if (left[0] > right[0]) {
      sortedItems.push(right[0]);
      right.shift();
    }
  }
  return [...sortedItems, ...left, ...right];
}

function findMinArray(a: number[]) {
  return mergeSort(a)[0];
}

function E175(a: number[]): any[] {
  const couplesResultCarry = [];
  const couplesResultSpacingCarry: number[] = [];
  let result: any[] = [];

  for (let i = 0; i < a.length; ++i) {
    const couples = [];
    for (let j = i + 1; j < a.length; ++j) {
      couples.push({
        couple: [a[i], a[j]],
        spacing: Math.abs(a[i] - a[j])
      });
    }

    const coupleMinimumSpacing = findMinArray(
      couples.map((couple) => couple.spacing)
    );

    for (let i = 0; i < couples.length; ++i) {
      if (couples[i].spacing === coupleMinimumSpacing) {
        couplesResultCarry.push(couples[i]);
        break;
      }
    }
  }

  for (let i = 0; i < couplesResultCarry.length; ++i) {
    couplesResultSpacingCarry.push(couplesResultCarry[i].spacing);
  }

  const minimumCoupleSpacingResult = findMinArray(couplesResultSpacingCarry);

  for (let i = 0; i < couplesResultCarry.length; ++i) {
    if (couplesResultCarry[i].spacing === minimumCoupleSpacingResult) {
      result = couplesResultCarry[i].couple;
      break;
    }
  }

  return result;
}

{
  const a = [1, 15, 10, 6, 3]; // [1,3]
  const b = [1, 99, 300, 500]; // [1,99]
  const c = [11, 13, 12, 55]; // [11,12] || [11,13] because of sorted then result is [11,12]

  console.log(E175(a));
  console.log(E175(b));
  console.log(E175(c));
}
