/**
 * Problem: Output the mmatrixtrix of integer
 *
 */

/**
 *
 * @param {Array<Array>} matrix
 */
function E313(matrix) {
  let columnIndex = "--";

  for (let i = 0; i <= matrix[0].length - 1; i++) {
    columnIndex += i + " ";
  }
  console.log(columnIndex);
  for (let i = 0; i <= matrix.length - 1; ++i) {
    let logger = ``;
    for (let j = 0; j <= matrix[i].length - 1; ++j) {
      logger += matrix[i][j] + " ";
    }
    let rowIndex = i + "|";
    let retLog = rowIndex + logger;
    console.log(retLog);
  }
  console.log("");
}

function test1() {
  const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; //
  const matrix2 = [
    [3, 2, 1],
    [6, 5, 4],
    [9, 8, 7],
  ]; //
  const matrix3 = [
    [1, 2],
    [3, 4],
  ]; //
  const matrix4 = [
    [4, 3],
    [2, 1],
  ]; //
  const matrix5 = [[1], [2]]; //

  E313(matrix1);
  E313(matrix2);
  E313(matrix3);
  E313(matrix4);
  E313(matrix5);
}

{
  test1();
}
