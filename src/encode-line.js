const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let arr2 = [];

  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      result += 1;
    } else {
      if (result > 1) {
        arr2.push(result + arr[i]);
        result = 1;
      } else {
        arr2.push(arr[i]);
      }
    }
  }
  return arr2.reduce((sum, current) => sum + current, "");
}

module.exports = {
  encodeLine,
};
