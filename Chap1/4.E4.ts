function E4(n: number) {
  // 1/2+1/4+...+1/2n
  var ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret += 1 / (2 * i);
  }
  return ret;
}
const n = 3;
console.log(E4(n));
