function E6(n: number) {
  // 1/1*2+1/2*3+...+1/n*(n+1)

  var ret = 1;
  for (let i = 2; i <= n; ++i) ret += 1 / (i * (i + 1));
  return ret;
}
const n = 4;
console.log(E6(n));
