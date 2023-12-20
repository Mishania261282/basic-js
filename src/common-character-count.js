const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  console.log((s1 = s1.split("")));
  console.log((s2 = s2.split("")));
  let result = 0;
  let s3 = s1;

  s1.length > s2.length ? true : (s3 = s1);
  s1 = s2;
  s2 = s3;

  console.log(s1);
  console.log(s2);

  for (const item1 of s1) {
    for (const item2 of s2) {
      if (item1 === item2) {
        result++;
        console.log(item2);
        s1.splice(s1.indexOf(item1), 1, "-");
        console.log(s1);
        s2.splice(s2.indexOf(item2), 1);
        console.log(s2);
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
