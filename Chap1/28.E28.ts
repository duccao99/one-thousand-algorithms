function E28(n: number) {
  // 6, 1+2+3
  // 12, 1+2+3+4+6
  var ret = 0;
  for (let i = 0; i < n; ++i) {
    n % i === 0 ? (ret += i) : '';
  }
  return ret;
}
console.log(E28(6));
console.log(E28(11));
console.log(E28(12));
