const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {
    let maxNumber = 0;
    let numberArr = n.toString().split('');
  console.log(numberArr)
    for (let i = 0; i < numberArr.length; i++) {
      numberArr.splice(i, 1);
      let currentNumber = Number.parseInt(numberArr.join(''));
      if (maxNumber < currentNumber) {
        maxNumber = currentNumber;
      }
      numberArr = n.toString().split('');
    }
    return maxNumber
}
deleteDigit(232)
module.exports = {
  deleteDigit
};
