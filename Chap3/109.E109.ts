function handlePrintOneTable(table: string[][], index: number) {
  console.log(
    table[0][index] +
      '  ' +
      table[1][index] +
      '  ' +
      table[2][index] +
      '  ' +
      table[3][index] +
      '  ' +
      table[4][index] +
      '  ' +
      table[5][index] +
      '  ' +
      table[6][index] +
      '  ' +
      table[7][index] +
      '  ' +
      table[8][index] +
      '  ' +
      table[9][index]
  );
}

function E109(): void {
  /**
   * Write a program print multiplication table
   *
   * 1 x 1 = 1
   * 1 x 2 = 2
   * ..
   * 1 x 10 = 10
   */

  var ret: string[][] = [];
  for (let i = 1; i <= 10; ++i) {
    var current_table: string[] = [];
    for (let j = 0; j <= 10; ++j) {
      // current_table += `${i} x ${j} = ${i * j}`;
      current_table.push(`${i}x${j}=${i * j}`);
    }

    ret.push(current_table);
  }

  for (let i = 0; i < 10; ++i) {
    handlePrintOneTable(ret, i);
  }

  return;
}
E109();
