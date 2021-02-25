
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length == 0) return [];

  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i]) && i % 2 !== 0) {
      matrix[i].reverse();
    }
  }
  return matrix.flat(Infinity);
}
