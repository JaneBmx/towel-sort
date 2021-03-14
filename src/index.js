module.exports = function towelSort (matrix) {
if (matrix === undefined || matrix === null) return [];

  resultArray = [];
  for (i = 0; i < matrix.length; i++){
    resultArray = resultArray.concat(i % 2 === 0 ? matrix[i] : matrix[i].reverse());
  }

  return resultArray;
}
