function E82(a: number, b: number, c: number): number {
  /**
   * max of a,b,c
   * + a > b ?
   *    + a > c ? -> a
   *    + a < c ? -> c
   * + a < b ?
   *    + b > c ? -> b
   *    + b < c ? -> c
   * + a > c ?
   *    + a > b ? -> a
   *    + a < b ? -> b
   * + a < c ?
   *    + c > b ? -> c
   *    + c < b ? -> c
   *
   */
  if (a > b) {
    return a > c ? a : c;
  } else if (a < b) {
    return b > c ? b : c;
  } else if (a > c) {
    return a > b ? a : b;
  } else if (a < c) {
    return c > b ? c : b;
  }
}

console.log(E82(1, 2, 3));
console.log(E82(3, 2, 1));
console.log(E82(2, 3, 1));
