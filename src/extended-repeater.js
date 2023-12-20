const { NotImplementedError } = require("../extensions/index.js");

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
 * => 'STRING PLUS 00 PLUS 00 PLUS** STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes,
    separator = "+",
    addition = "",
    additionRepeatTimes,
    additionSeparator = "|",
  }
) {
  let result;

  if (additionRepeatTimes > 0) {
    result =
      (str + (addition + additionSeparator).repeat(additionRepeatTimes)).slice(
        0,
        -additionSeparator.length
      ) + separator;
      console.log(result)
  } else {
    result = str + addition + separator;
      console.log(result)
  }
  if(repeatTimes>0){
    console.log(result.repeat(repeatTimes).slice(0, -separator.length))
    return result.repeat(repeatTimes).slice(0, -separator.length);
  } else{
    console.log(str + addition)
    return str + addition;
  }  
}

module.exports = {
  repeater,
};
