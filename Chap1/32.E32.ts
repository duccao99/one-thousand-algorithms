function E32(n: number) {
  // n is a square number ?
  // square number : 9 = 3*3, 25 = 5*5
  // idea:
  // we se sqrt(n) may be a float number, take this advantage
  // check floor(sqrt(n)^2) = n ?
  return Math.pow(Math.floor(Math.sqrt(n)), 2) === n ? true : false;
}

console.log(E32(25));
console.log(E32(9));
console.log(E32(8));
console.log(E32(100));
