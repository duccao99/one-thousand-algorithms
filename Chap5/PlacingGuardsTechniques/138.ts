/**
 * Find the first even number in an array number
 * If the array has no even values then returns -1
 *
 * Check Idea
 * 1 2 3 4 5
 * i = n - 1
 * -> a[0] = a[5-4-1]=a[n-i-1]
 *
 * Idea:
 * + loop i from len - 1 to 0
 * + check if a[n-i-1] % 2 = 0 ? place guard and break the loop
 *
 *
 *
 */

function E138(a: number[]): number {
  let guard = -1;
  for (let i = a.length; i >= 0; i--) {
    if (a[a.length - i - 1] % 2 === 0) {
      guard = a[a.length - i - 1];
      break;
    }
  }
  return guard;
}

console.log(E138([1, 2, 3, 4, 5, 6])); // 2
console.log(E138([1, 1])); // -1
console.log(E138([1, 5, 4, 3, 2, 1])); // 4
