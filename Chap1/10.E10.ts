function E10(x: number, n: number) {
  // x^n
  // 4^4 = 4*4*4*4

  // i=1 4
  // i=2 4*4
  // i=3 4*4*4
  // i=4 4*4*4*4

  // ret=4
  // i=1 ret=4*4
  // i=2 ret=4*4*4*4
  // -> wrong

  // ret*=x
  // i=1, ret=4*4

  var ret = x;
  for (let i = 1; i <= n - 1; ++i) {
    ret *= x;
  }
  return ret;
}
console.log(E10(4, 4));
