function E83(a: number, b: number): boolean {
  /**
   * Check if a and b is the same sign
   * + case 1: a >= 0, b >= 0 -> true
   * + case 2: a < 0, b < 0 -> true
   * + case 3: a < 0, b > 0 -> false
   * + case 4: a > 0, b < 0 -> false
   */
  if (a >= 0 && b >= 0) {
    return true;
  } else if (a < 0 && b < 0) {
    return true;
  } else if (a < 0 && b > 0) {
    return false;
  } else {
    return false;
  }
}
console.log(E83(0, 0));
console.log(E83(3, 3));
console.log(E83(-3, -1));
console.log(E83(3, -1));
console.log(E83(-3, 1));
