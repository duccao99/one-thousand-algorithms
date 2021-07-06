function E47(n: number) {
  // 1234 -> 2+4=6
  // 123456 -> 2+4+6=12
  var ret = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10))
    if ((i % 10) % 2 === 0) ret += i % 10;
  return ret;
}
console.log(E47(1234));
console.log(E47(123456));
