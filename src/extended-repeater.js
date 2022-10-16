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
  let arr = [1, '+', '', 1, '|'];
  let val = Object.values(options)
  let keys = Object.keys(options)
  str=String(str);
  options.addition = String(options.addition)
  options.separator = String(options.separator)
  options.additionSeparator = String(options.separator)
  options.repeatTimes = Number(options.repeatTimes)
  options.additionRepeatTimes = Number(options.additionRepeatTimes)
  if(keys.includes('repeatTimes')){
      arr[0] = val[keys.indexOf('repeatTimes')];
  } 
  if(keys.includes('separator')){
      arr[1] = val[keys.indexOf('separator')];
  } 
  if(keys.includes('addition')){
      arr[2] = val[keys.indexOf('addition')];
  } 
  if(keys.includes('additionRepeatTimes')){
      arr[3] = val[keys.indexOf('additionRepeatTimes')];
  } 
  if(keys.includes('additionSeparator')){
      arr[4] = val[keys.indexOf('additionSeparator')];
  } 
  
  let value = arr;
  let answer = (str + value[2] + (value[4] + value[2]).repeat(value[3]-1) + value[1]).repeat(value[0])
  return answer.slice(0, (answer.length - (value[1].length)))
}

module.exports = {
  repeater
};
