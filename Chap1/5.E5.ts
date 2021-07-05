function E5(n: number) {
  // 1+1/3+1/5+...+1/(2n+1)
  var ret = 0;
  for (let i = 0; i <= n; ++i) ret += 1 / (2 * i + 1);
  return ret;
}
const n = 4;
console.log(E5(n));
