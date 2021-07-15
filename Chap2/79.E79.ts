function E79(n: number): number {
  var ret = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret++;
  }
  return ret;
}

console.log(E79(123));
console.log(E79(123412));
console.log(E79(1));
console.log(E79(123412123412123412123412));
