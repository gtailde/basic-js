const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    if(isNaN(date)) throw Error('Invalid date!');
    const data = date.getMonth();
    return data < 2 || data > 10 ? 'winter' : data < 5 && data > 1 ? 'spring' : data < 8 && data > 4 ? 'summer' : 'fall'
  } catch {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
