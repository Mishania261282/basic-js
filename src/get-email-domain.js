const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split("");
  let position = email.lastIndexOf("@");
  email.splice(0, position + 1);
  return email.join("");
}

module.exports = {
  getEmailDomain,
};
