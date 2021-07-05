function E2(n: number) {
  // 1^2+2^2+...+n^2
  var ret: number = ret || 0;
  for (let i = 1; i <= n; ++i) ret += Math.pow(i, 2);
  return ret;
}

const n: number = 30;

console.log(E2(n));
