/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var pascal = [];
  let numRows = rowIndex + 1;
  for (var i = 0; i < numRows; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    for (var j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
    pascal[i][i] = 1;
  }
  return pascal[pascal.length - 1];
};

// test
// console.log(getRow(3));
