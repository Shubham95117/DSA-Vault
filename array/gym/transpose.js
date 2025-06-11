const transposeMatrix = (rows, cols, matrix) => {
  // Your implementation here to transpose the matrix and return a new matrix
  let matrix2 = [];

  for (let i = 0; i < cols; i++) {
    let result = [];
    for (let j = 0; j < rows; j++) {
      result.push(matrix[j][i]);
    }
    matrix2.push(result);
  }
  return matrix2;
};
