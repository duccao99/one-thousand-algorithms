function E85(m: number): number {
  /**
   * input: month
   * output: quarter
   *
   * 1,2,3 -> 1
   * 4,5,6 -> 2
   * 7,8,9 -> 3
   * 10,11,12 -> 4
   */
  if (1 <= m && m <= 3) return 1;
  if (4 <= m && m <= 6) return 2;
  if (7 <= m && m <= 9) return 3;
  return 4;
}

for (let i = 1; i <= 12; ++i) console.log(E85(i));
