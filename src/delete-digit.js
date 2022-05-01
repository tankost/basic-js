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
function deleteDigit(n) {
    let str = n.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let s = '';
         if (i > 0) {
            s = str.substring(0, i);
            arr.push(s)
        }
        if (i === 0) {
            s = str.substring(i + 1)
            arr.push(s)
        } else {
            s += str.substring(i + 1)
            arr.push(s)
        }
    }
    arr.sort();
    return parseInt(arr[arr.length - 1]);
}

module.exports = {
  deleteDigit
};
