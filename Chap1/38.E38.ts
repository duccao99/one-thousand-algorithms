function E38(n: number) {
  // c(n+1)(n+c(n)(n-1+..+c3(2)+c2(1)))
  /**
   * i=1, ret=c2(1)
   * i=2, ret=c3(2+c2(1))
   * ..
   * i=n, ret=c(n+1)(n+..)
   *
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret = Math.pow(i + ret, 1 / (i + 1));
  }
  return ret;
}

console.log(E38(4));
