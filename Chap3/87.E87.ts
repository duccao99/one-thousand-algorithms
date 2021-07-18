function s(n: number): number {
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += i;
  return ret;
}

function E87(n: number): number {
  /**
   * 1+2+..+n > 10000
   * min n = ?
   *
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret = s(i);
    if (ret > 10000) {
      return i;
    }
  }
}

console.log(E87(10000));
