const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
    let mass = [];
    function find (arr){
        let result = [];
        if(arr.includes('--discard-next') || result.includes('--discard-next')){ 
            let index = arr.indexOf('--discard-next');
            for(let i = 0; i < arr.length; i++){
                if(i != index && i != index + 1){result.push(arr[i])};
            };
        } else if (arr.includes('--discard-prev') || result.includes('--discard-prev') ){
            let index = arr.indexOf('--discard-prev');
            for(let i = 0; i < arr.length; i++){
                if(i != index && i != index - 1){result.push(arr[i])};
            };
        } else if (arr.includes('--double-next') || result.includes('--double-next')){
            let index = arr.indexOf('--double-next');
            for(let i = 0; i < arr.length; i++){
                if(i != index){
                    result.push(arr[i]);
                    if(i==index+1){
                        result.push(arr[i]);
                    };                
                };
            };
        } else if (arr.includes('--double-prev') || result.includes('--double-prev')){
            let index = arr.indexOf('--double-prev');
            for(let i = 0; i < arr.length; i++){
                if(i != index){
                    result.push(arr[i]);
                    if(i==index-1){
                        result.push(arr[i]);
                    };                
                };
            };
        };
        return (mass = result);
    };
    if(Array.isArray(arr) != true && (mass.includes('--discard-next') == false || mass.includes('--discard-prev') == false || mass.includes('--double-next') == false) && mass.includes(String) != true && mass.includes(Object) == false){ 
        return [];
    }  else {
        find(arr);
        while(mass.includes('--discard-next') || mass.includes('--discard-prev') || mass.includes('--double-next') || mass.includes('--double-prev')){
            find(mass);
        };
        return mass;
    }
  
};

module.exports = {
  transform
};
