function firstNumberN(n: number): number {
  var ret: number = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) ret = i % 10;
  return ret;
}
function E55(n: number): number {
  // 12342123341 -> 111 -> 3
  // 4123187412984 -> 444 -> 3
  /**
   * + step 1: find the first number of n
   * + step 2: count it
   */
  var ret: number = 0;

  var firstNum = firstNumberN(n);
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if (firstNum === i % 10) ret++;
  }

  return ret;
}

console.log(E55(12342123341));
console.log(E55(4123187412984));
