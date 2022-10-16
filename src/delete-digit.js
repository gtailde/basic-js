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
 function deleteDigit(n){  
  n = String(n);
  let max = [];
  if(n.length > 2){
      for(let i = 0; i < String(n).length-1; i++){
          let mass = [];
          for(let a = 0; a <  String(n).length; a++){
              if(a!=i){
                  mass.push(n[a]);
              };
          };
          max.push(Number(mass.join('')));  
      };
  } else {
      max.push(Number(n[0])), max.push(Number(n[1]));
  };
  return Math.max.apply(null, max);
};


module.exports = {
  deleteDigit
};
