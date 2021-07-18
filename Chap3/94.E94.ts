function E94() {
  /**
   * Write a program print all odd numbers that is less than 100 and
   * except 5,7,93
   */
  var ret = [];
  for (let i = 1; i < 100; ++i)
    if (i % 2 !== 0 && i !== 5 && i !== 7 && i !== 93) ret.push(i);
  return ret.join(' ');
}
console.log(E94());
