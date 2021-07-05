function nMultiply(n: number) {
  // Input: n
  // Output: 1*2*...*n
  var ret = 1;
  for (let i = 2; i <= n; ++i) ret *= i;
  return ret;
}

function E11(n: number) {
  // 1+1*2+...+1*2*...*n
  /**
   *  + step 1: make 1*2*...*n
   *  + step 2: loop i from 1 to n ret+= (step1)
   *
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret += nMultiply(i);
  }
  return ret;
}

// console.log(nMultiply(4));
console.log(E11(10));
