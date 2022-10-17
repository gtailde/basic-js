const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chainRet: [],
  getLength() {
    return this.chainRet.length;
  },
  addLink(value) {
      if(value === undefined){
        this.chainRet.push('( )');
    }else{
      this.chainRet.push(value);
    }
    return this
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position <= 0 || position >= this.chainRet.length){
      this.chainRet = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      let arr = [];
      let removedArr = this.chainRet.join(' ').replaceAll(position, '').split(' ')
      for(let i = 0; i < removedArr.length; i++){
        if(Number(removedArr[i]) || removedArr[i] == '( )'){
          arr.push(Number(removedArr[i]))
          this.chainRet = arr;
        };
      };
    }
    return this
  },
  
  reverseChain() {
    this.chainRet.reverse();
    return this
  },
  finishChain() {
    answer = '';
    for(let i = 0; i < this.chainRet.length; i++){
        answer += `( ${this.chainRet[i]} )~~`;
    };
    return answer.slice(0, (answer.length-2));
  }
};

module.exports = {
  chainMaker
};
