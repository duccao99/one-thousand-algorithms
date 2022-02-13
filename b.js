const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const subMatrix = [];
const row = [];

for (let i = matrix.length - 1; i >= 0; --i) {
  const row = [];
  for (let j = matrix[i].length - 1; j >= 0; --j) {
    row.push(matrix[i][j]);
  }
  console.log(row);
}
