function E89(n: number): number {
  var ret = 0;
  for (let i = n; i >= 1; i--) {
    if (i % 2 !== 0) ret += i;
  }
  return ret;
}

console.log(E89(6));
console.log(E89(9));
console.log(E89(1000));

// 1+3+5+7+9=
