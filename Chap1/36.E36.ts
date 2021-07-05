function step1(n: number) {
  if (n === 0 || n === 1) return 1;
  return n * step1(n - 1);
}
function E36(n: number) {
  // sqrt(n!+sqrt((n-1)!+....+sqrt(1!)))
  /**
   * + step 1: make n!
   * + step 2: recursive -> if n=0 then 0, =1 then sqrt(step1(n)) else sqrt(step(1)+e(n-1))
   *
   */
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Math.sqrt(step1(n) + E36(n - 1));
}
console.log(E36(4));
