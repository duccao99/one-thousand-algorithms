function E8(n: number) {
  // 1/2+3/4+5/6+...+(2n+1)/(2n+2)
  // n=4
  // 1/2+3/4+5/6+7/8+9/10

  var ret = 0;
  for (let i = 0; i <= n; i++) ret += (2 * i + 1) / (2 * i + 2);
  return ret;
}
console.log(E8(4));
