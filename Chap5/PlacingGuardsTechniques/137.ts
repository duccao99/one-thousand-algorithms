/**
 * Write a function to find a position where it's value was the minimum value
 * in array number
 *
 * Idea:
 * + Find min func
 * + Loop and place guard
 *
 */

function minArray(a: number[]): number {
  var guard = a[a.length - 1];
  for (let i = 0; i < a.length; ++i) {
    if (a[i] < guard) guard = a[i];
  }
  return guard;
}

function E137(a: number[]): number {
  const min_array = minArray(a);
  let pos_guard = 0;
  for (let i = a.length - 1; i >= 0; --i) if (a[i] === min_array) pos_guard = i;
  return pos_guard;
}

console.log(E137([1, 2, 3, 2])); // 0
console.log(E137([1, 2, 3, 0, 2])); // 3
