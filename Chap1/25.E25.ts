function E25(n: number) {
  // calculate total even element that was a divisor of n
  // 6->2+6
  var ret = 0;
  for (let i = 1; i <= n; ++i) if (n % i === 0 && i % 2 === 0) ret += i;
  return ret;
}

console.log(E25(6));
