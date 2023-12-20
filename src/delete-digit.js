const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  let array = String(n).split("");
  let result = [];

  let f;
  for (let i = 0; i < array.length; i++) {
    f = array.slice(0, i).concat(array.slice(i + 1));
    console.log(f);
    result.push(f);
  }
  let number;
  console.log(result);
  let q = [];
  for (let i = 0; i < result.length; i++) {
    number = "";
    for (let j = 0; j < result[i].length; j++) {
      number += result[i][j];
      console.log(number);
    }
    q.push(+number);
  }
  console.log(q);
  return (max = Math.max(...q));
}

module.exports = {
  deleteDigit,
};
