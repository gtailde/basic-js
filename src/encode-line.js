const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = [];
  for(let i=0; i<str.length; i++){
    if(!arr.includes(str[i])){
      arr.push(str[i]);
      arr.push(0);
    };
  };
  for(let i = 0; i < str.length; i++){
    if(arr.includes(str[i])){
      arr[arr.indexOf(str[i])+1] += 1;
    };
  };
  let ret = '';
  for(let i = 0; i < arr.length; i++){
    if(i%2 == 0 || i == 0){
      ret+= arr[i+1] + arr[i];
    };
  };
  return String(ret.replaceAll(1, ''));
};

module.exports = {
  encodeLine
};
