const codeUpperLetterA = 65;
const codeUpperLetterB = 66;
const codeUpperLetterC = 67;
const codeUpperLetterX = 88;
const codeUpperLetterY = 89;
const codeUpperLetterZ = 90;

const codeLowerLetterA = 97;
const codeLowerLetterB = 98;
const codeLowerLetterC = 99;
const codeLowerLetterX = 120;
const codeLowerLetterY = 121;
const codeLowerLetterZ = 122;

const shiftNumber = 3;
const turnToLetter = charCode => String.fromCharCode(charCode);

const encode = message => {
  let encodedMessage = '';
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.charCodeAt() >= codeUpperLetterA &&
      char.charCodeAt() <= codeUpperLetterZ) {
      if (char.charCodeAt() === codeUpperLetterX) {
        encodedMessage += turnToLetter(codeUpperLetterA);
      } else if (char.charCodeAt() === codeUpperLetterY) {
        encodedMessage += turnToLetter(codeUpperLetterB);
      } else if (char.charCodeAt() === codeUpperLetterZ) {
        encodedMessage += turnToLetter(codeUpperLetterC);
      } else {
        encodedMessage += turnToLetter(char.charCodeAt() + shiftNumber);
      }
    } else if (char.charCodeAt() >= codeLowerLetterA &&
      char.charCodeAt() <= codeLowerLetterZ) {
      if (char.charCodeAt() === codeLowerLetterX) {
        encodedMessage += turnToLetter(codeLowerLetterA);
      } else if (char.charCodeAt() === codeLowerLetterY) {
        encodedMessage += turnToLetter(codeLowerLetterB);
      } else if (char.charCodeAt() === codeLowerLetterZ) {
        encodedMessage += turnToLetter(codeLowerLetterC);
      } else {
        encodedMessage += turnToLetter(char.charCodeAt() + shiftNumber);
      }
    } else {
      encodedMessage += char;
    }
  }
  return encodedMessage;
};

const decode = message => {
  let decodedMessage = '';
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.charCodeAt() >= codeUpperLetterA &&
      char.charCodeAt() <= codeUpperLetterZ) {
      if (char.charCodeAt() === codeUpperLetterA) {
        decodedMessage += turnToLetter(codeUpperLetterX);
      } else if (char.charCodeAt() === codeUpperLetterB) {
        decodedMessage += turnToLetter(codeUpperLetterY);
      } else if (char.charCodeAt() === codeUpperLetterC) {
        decodedMessage += turnToLetter(codeUpperLetterZ);
      } else {
        decodedMessage += turnToLetter(char.charCodeAt() - shiftNumber);
      }
    } else if (char.charCodeAt() >= codeLowerLetterA &&
      char.charCodeAt() <= codeLowerLetterZ) {
      if (char.charCodeAt() === codeLowerLetterA) {
        decodedMessage += turnToLetter(codeLowerLetterX);
      } else if (char.charCodeAt() === codeLowerLetterB) {
        decodedMessage += turnToLetter(codeLowerLetterY);
      } else if (char.charCodeAt() === codeLowerLetterC) {
        decodedMessage += turnToLetter(codeLowerLetterZ);
      } else {
        decodedMessage += turnToLetter(char.charCodeAt() - shiftNumber);
      }
    } else {
      decodedMessage += char;
    }
  }
  return decodedMessage;
};

// simple test
let test = 'Hello World!';
test = encode(test);
console.log(test); // Khoor Zruog!
test = decode(test);
console.log(test); // Hello World!
