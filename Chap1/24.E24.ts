function E24(n: number) {
  // list all odd ele that was a divisor of n
  // 6 -> 1 3
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0 && i % 2 !== 0) console.log(i);
  }
}
E24(6);
