const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};
  for (domain of domains) {
    let subdomains = domain.split(".").reverse();
    let subdomain = "";
    for (let i = 0; i < subdomains.length; i++) {
      subdomain += `.${subdomains[i]}`;
      subdomain in object ? (object[subdomain] += 1) : (object[subdomain] = 1);
    }
  }
  return object;
}

module.exports = {
  getDNSStats,
};
