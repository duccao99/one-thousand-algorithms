/**
 * Problem: Given an array of float which have more than three elements and all element
 * are distinct. Write a function to list all pair (a,b) that satisfied the
 * condition a <= b
 *
 * - Understanding problem
 * [1,2,3,4,5] -> (1,2) (1,3) (1,4) (1,5) (2,3) (2,4) (2,5) (3,4) (3,5) (4,5)
 *
 *
 * - Approach:
 * + step 1: sort the array in ascending order
 * + step 2: O(n^2)
 *
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
function E174(a: number[]) {
  const sortedArray: number[] = mergeSort(a);

  for (let i = 0; i < sortedArray.length; ++i) {
    for (let j = i + 1; j < sortedArray.length; ++j) {
      if (sortedArray[i] <= sortedArray[j]) {
        console.log(`(${sortedArray[i]},${sortedArray[j]})`);
      }
    }
  }
}

{
  const a = [1, 3, 2, 5, 4];
  const b = [5, 4, 3, 2, 1];
  const c = [38, 27, 43, 3, 9, 82, 10, 99, 12, 22, 100];

  E174(a);
  E174(b);
  E174(c);
}
