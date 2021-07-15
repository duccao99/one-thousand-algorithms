function E78(n: number): number[] {
  const ret: number[] = [];
  for (let i = n; i >= 1; --i) if (n % i === 0) ret.push(i);
  return ret;
}
console.log(E78(123));
console.log(E78(6));
