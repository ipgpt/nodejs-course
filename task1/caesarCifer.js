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

const turnToLetter = charCode => String.fromCharCode(charCode);

const caesarCifer = (text, shiftNumber, action) => {
  let changedText = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let charCode = char.charCodeAt();
    if (action === 'encode') {
      let shiftedCharCode = charCode + shiftNumber;
      if (charCode >= codeUpperLetterA &&
        charCode <= codeUpperLetterZ) {
          if (shiftedCharCode > codeUpperLetterZ) {
            changedText += turnToLetter(shiftedCharCode - 
              codeUpperLetterZ + codeUpperLetterA - 1);
          } else {
            changedText += turnToLetter(shiftedCharCode);
          }
      } else if (charCode >= codeLowerLetterA &&
        charCode <= codeLowerLetterZ) {
          if (shiftedCharCode > codeLowerLetterZ) {
            changedText += turnToLetter(shiftedCharCode - 
              codeLowerLetterZ + codeLowerLetterA - 1);
          } else {
            changedText += turnToLetter(shiftedCharCode);
          }
      } else {
        changedText += char;
      }
    } else if (action === 'decode') {
      let shiftedCharCode = charCode - shiftNumber;
      if (charCode >= codeUpperLetterA &&
        charCode <= codeUpperLetterZ) {
          if (shiftedCharCode < codeUpperLetterA) {
            changedText += turnToLetter(codeUpperLetterZ - 
              (codeUpperLetterA - shiftedCharCode) + 1);
          } else {
            changedText += turnToLetter(shiftedCharCode);
          }
      } else if (charCode >= codeLowerLetterA &&
        charCode <= codeLowerLetterZ) {
          if (shiftedCharCode < codeLowerLetterA) {
            changedText += turnToLetter(codeLowerLetterZ - 
              (codeLowerLetterA - shiftedCharCode) + 1);
          } else {
            changedText += turnToLetter(shiftedCharCode);
          }
      } else {
        changedText += char;
      }
    }
    else {
      return text;
    }
  }
  return changedText;
};

// simple test
let test1 = caesarCifer('Hello World!', 7, 'encode');
console.log(test1); // Olssv Dvysk!
let test2 = caesarCifer(test1, 7, 'decode');
console.log(test2); // Hello World!
