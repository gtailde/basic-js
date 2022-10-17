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
    if(Array.isArray(arr) === false) throw new Error("'arr' parameter must be an instance of the Array!")
    let resChanged = 0;
    let mass = arr.map(item => item);
    for (let i = 0; i < mass.length; i++){
        if(mass[i] == '--double-prev'){
            if(i - 1 == resChanged || i == 0) { 
                mass.splice(i, 1);
                i = i - 1;
            } else if(i > 0){  
                mass.splice(i, 1, mass[i - 1]);
                resChanged = i;
            };
        } else if(mass[i] == '--double-next') {
            if(i !== resChanged.length - 1) { 
                mass.splice(i, 1, mass[i + 1]);
                resChanged = i;
            } else {mass.splice(i, 1)};
        } else if(mass[i] == '--discard-prev') {
            if(i - 1 !== resChanged && i > 0) { 
                mass.splice(i - 1, 2);
            } else {mass.splice(i, 1)};
        } else if(mass[i] == '--discard-next') {
            if(i != mass.length - 1) { 
                mass.splice(i, 2);
                i = i - 1;
                resChanged = i;
            } else {mass.splice(i, 1)};
        };
    };
    return mass;
};

module.exports = {
  transform
};
