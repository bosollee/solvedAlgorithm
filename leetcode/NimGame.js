/**
 * @param {number} n
 * @return {boolean}
 */
// var canWinNim = function (n) {
//   let getStone = [1, 2, 3];

//   return false;
// };
var canWinNim = (n) => n % 4 !== 0;

// test
canWinNim(4); // false
