function E3(n: number) {
  // 1+1/2+1/3+..+1/n
  var ret: number = 0;

  for (let i = 1; i <= n; ++i) ret += 1 / i;

  return ret;
}

const n: number = 3;
console.log(E3(n));
