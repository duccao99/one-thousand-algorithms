function E9(n: number) {
  // 1*2*...*n
  var ret = 1;
  for (let i = 2; i <= n; ++i) ret *= i;
  return ret;
}

console.log(E9(4));
