function E46(n: number) {
  // 1234 -> 1,3-> 2
  // 1234567-> 1,3,5,7 -> 4
  var ret = 0;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) if (i % 2 !== 0) ret++;

  return ret;
}
console.log(E46(1234));
console.log(E46(1234567));
