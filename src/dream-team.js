const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Object.prototype.toString.call(members) !== "[object Array]") {
    return false;
  } else if (members.length === 0) {
    return true;
  }
  let result = [];
  members.forEach((member) => {
    typeof member === "string"
      ? result.push(member.replaceAll(" ", "")[0].toUpperCase())
      : false;
  });
  return result
    .sort((a, b) => (a > b ? 1 : -1))
    .reduce((sum, current) => sum + current);
}

module.exports = {
  createDreamTeam,
};
