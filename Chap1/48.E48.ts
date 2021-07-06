function E48(n: number) {
  // 1234 -> 1*3=3
  // 1234567-> 1*3*5*7=105
  var ret = 1;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if ((i % 10) % 2 !== 0) {
      ret *= i % 10;
    }
  }
  return ret;
}
console.log(E48(1234));
console.log(E48(1234567));
