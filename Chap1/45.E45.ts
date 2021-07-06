function E45(n: number) {
  // 1234 -> 1*2*3*4
  var ret = 1;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) ret *= i % 10;

  return ret;
}

console.log(E45(1234));
console.log(E45(43));
