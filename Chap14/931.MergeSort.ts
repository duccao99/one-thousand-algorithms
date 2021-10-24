function MergeSort(a: number[]): number[] {
  if (a.length <= 1) return a;
  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);
  return MergeUnsortedArrays(MergeSort(left), MergeSort(right));
}

function MergeUnsortedArrays(left: number[], right: number[]): number[] {
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
