function E40(x: number, n: number) {
  // c(x^n+c(x^n-1+..+c(x2+c(x))))
  /**
   * i=1, c2(x)
   * i=2, c2(x^2+c2(x))
   * i=3, c2(x^3+c2(x^2+c2(x)))
   *
   */
  var ret = 0;

  for (let i = 1; i <= n; ++i) {
    ret = Math.pow(Math.pow(x, i) + ret, 1 / 2);
  }

  return ret;
}

console.log(E40(3, 4));
