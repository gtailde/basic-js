const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainRet = []
const chainMaker = {
  

  getLength() {
    return chainRet.length
  },
  addLink(value) {
      if(value === undefined){
        chainRet.push('()')
    }else{
        chainRet.push(value);
    }
  },
  removeLink(position) {
    let arr = [];
    let removedArr = chainRet.join(' ').replaceAll(position, '').split(' ')
    for(let i = 0; i < removedArr.length; i++){
        if(Number(removedArr[i]) || removedArr[i] == '()'){
            arr.push(Number(removedArr[i]))
            chainRet = arr;
        }
    }
  },
  reverseChain() {
    chainRet.reverse()
  },
  finishChain() {
    answer = ''
    for(let i = 0; i < chainRet.length; i++){
        answer += `( ${chainRet[i]} )~~`
    }
    return answer.slice(0, (answer.length-2));
  }
};

module.exports = {
  chainMaker
};
