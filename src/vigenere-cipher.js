const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (this.alphabet.indexOf(messageChar) < 0) {
        encryptedMessage += messageChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyOffset = this.alphabet.indexOf(keyChar);
      const messageOffset = this.alphabet.indexOf(messageChar);
      const encryptedCharIndex = (messageOffset + keyOffset) % this.alphabet.length;
      const encryptedChar = this.alphabet[encryptedCharIndex];

      encryptedMessage += encryptedChar;
      keyIndex++;
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      if (this.alphabet.indexOf(encryptedChar) < 0) {
        message += encryptedChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyOffset = this.alphabet.indexOf(keyChar);
      const encryptedOffset = this.alphabet.indexOf(encryptedChar);
      const messageOffset = (encryptedOffset - keyOffset + this.alphabet.length) % this.alphabet.length;
      const messageChar = this.alphabet[messageOffset];

      message += messageChar;
      keyIndex++;
    }

    return this.isDirect ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
