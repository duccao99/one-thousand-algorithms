function E62(a: number, b: number): number {
  // GCD -> greatest common divisor
  // 24 = 2*2*2*3
  // 18 = 2*3*3
  // -> 2*3=6
  /**
   * + using euclidean algorithm
   * a=24,b=18
   *
   * while b!==0
   *
   * t=18
   * b=6
   * a=18
   *
   * t=6
   * b=(18mod6)=0
   * a=6
   *
   * return 6
   *
   * O(n)
   */
  var ret: number = 0;

  while (b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  ret = a;

  return ret;
}

console.log(E62(24, 18));
