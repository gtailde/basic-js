const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n){
  n = String(n);
  function last(sum){
    let answ = 0;
    for(let i = 0; i < sum.length; i++){
      answ += Number(sum[i]);
    }
    return String(answ);
  };
  while(n.length > 1){
    n = last(n);
  };
    return Number(n);
};


module.exports = {
  getSumOfDigits
};
