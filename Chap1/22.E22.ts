function E22(n: number) {
  // count total divisor of n
  // 6, 1236 -> 4
  var count = 0;
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) count++;
  }
  return count;
}

console.log(E22(6));
