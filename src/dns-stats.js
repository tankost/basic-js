const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};
  let allDomains;
  domains.forEach(domain => {
      allDomains = domain.split('.');
      let arr = [];
      for (let i = allDomains.length - 1; i >= 0; i--) {
          arr.push(allDomains[i]);
          let currentDomain = "." + arr.join(".")
          if (result[currentDomain]) {
              result[currentDomain]++;
          } else {
              result[currentDomain] = 1;
          }
      }
  })
  return result;
}

module.exports = {
  getDNSStats
};
