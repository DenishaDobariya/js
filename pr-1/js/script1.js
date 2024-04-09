function sumOfBoundary(matrix) {
    let sum = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
          sum += matrix[i][j];
        }
      }
    }

    return sum;
  }

  const matrix = [
    [1, 2, 3],
    [5, 6, 4],
    [9, 10, 1]
  ];
  
  console.log(sumOfBoundary(matrix)); 