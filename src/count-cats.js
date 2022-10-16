const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(searchCountCats) {
  let count = 0
  for(let i = 0; i < searchCountCats.length; i++){
    console.log(searchCountCats[i])
      for(let y = 0; y < searchCountCats[i].length; y++){
          if(searchCountCats[i][y] === '^^'){
              count+=1;
          };
      };
  };
  return count;
};

module.exports = {
  countCats
};
