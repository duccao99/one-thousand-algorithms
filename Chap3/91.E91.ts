function E91(n: number): string {
  /**
   *  i < n? print i
   */
  var ret = [];
  for (let i = 1; i < n; ++i) ret.push(i);
  return ret.join(' ');
}
console.log(E91(10));
