function nAddition(n: number) {
  // 1+2+..+n
  var ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret += i;
  }
  return ret;
}
function E15(n: number) {
  // 1+1/(1+2)+...+1/(1+2+..+n)
  /**
   * + step 1: make 1+2+..+n
   * + step 2: loop i from 1 to n
   * + step 3: ret+=1/(step1)
   *
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret += 1 / nAddition(i);
  }
  return ret;
}

// console.log(nAddition(100));
console.log(E15(4));
