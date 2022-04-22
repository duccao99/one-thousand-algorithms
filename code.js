function factorial(n) {
  /**
   * + n = 5, ret = 5 x 4 x 3 x 2 x 1
   *   + factorial(n - 1) = 5 x factorial(4) = 5 x 4 x 3 x 2 x 1
   * + n = 4, ret = 4 x 3 x 2 x 1
   *   + factorial(n - 1) = 4 x factorial(3) = 4 x 3 x 2 x 1
   * + n = 3, ret = 3 x 2 x 1
   *   + factorial(n - 1) = 3 x factorial(2) = 3 x 2 x 1
   * + n = 2, ret = 2 x 1
   *   + factorial(n - 1) = 2 x factorial(1) = 2 x 1
   * + n = 1
   *   + return n
   *   + factorial(1) = 1
   *
   *
   */
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}

// 5! = 5 x 4 x 3 x 2 x 1

console.log(factorial(5));
