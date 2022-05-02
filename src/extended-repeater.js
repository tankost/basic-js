const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator === undefined ? options.separator = '+' : options.separator;
  options.addition === undefined ? options.addition = '' : String(options.addition);
  options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator;
  options.repeatTimes === undefined ? options.repeatTimes = 1 : options.repeatTimes;
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;

  let result = '';
  str = String(str);
  for (let i = 0; i < options.repeatTimes; i++) {
      result += str;
      if (options.addition !== '') {
          for (let j = 0; j < options.additionRepeatTimes; j++) {
              result += options.addition;
              if (options.additionSeparator && (j + 1) < options.additionRepeatTimes) {
                  result += options.additionSeparator;
              }
          }
      }
      if (options.separator && (i + 1) < options.repeatTimes) {
          result += options.separator;
      }
  }
  return result;
}

module.exports = {
  repeater
};
