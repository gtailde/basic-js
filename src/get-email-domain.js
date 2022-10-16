const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

function getEmailDomain(email){
    while(email.includes('@') == true){
      email = email.slice(email.indexOf('@') + 1);
  };
  return email;
};


module.exports = {
  getEmailDomain
};
