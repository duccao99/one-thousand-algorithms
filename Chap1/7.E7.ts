function E7(n: number) {
  // 1/2+2/3+...+n/(n+1)
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += i / (i + 1);
  return ret;
}

console.log(E7(4));
