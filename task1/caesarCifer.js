const codeUpperLetterA = 65;
const codeUpperLetterZ = 90;

const codeLowerLetterA = 97;
const codeLowerLetterZ = 122;

const turnToLetter = charCode => String.fromCharCode(charCode);

const caesarCipher = (text, shiftNumber, action) => {
  let changedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const charCode = char.charCodeAt();
    if (action === 'encode') {
      const shiftedCharCode = charCode + shiftNumber;
      if (charCode >= codeUpperLetterA && charCode <= codeUpperLetterZ) {
        if (shiftedCharCode > codeUpperLetterZ) {
          changedText += turnToLetter(
            shiftedCharCode - codeUpperLetterZ + codeUpperLetterA - 1
          );
        } else {
          changedText += turnToLetter(shiftedCharCode);
        }
      } else if (charCode >= codeLowerLetterA && charCode <= codeLowerLetterZ) {
        if (shiftedCharCode > codeLowerLetterZ) {
          changedText += turnToLetter(
            shiftedCharCode - codeLowerLetterZ + codeLowerLetterA - 1
          );
        } else {
          changedText += turnToLetter(shiftedCharCode);
        }
      } else {
        changedText += char;
      }
    } else if (action === 'decode') {
      const shiftedCharCode = charCode - shiftNumber;
      if (charCode >= codeUpperLetterA && charCode <= codeUpperLetterZ) {
        if (shiftedCharCode < codeUpperLetterA) {
          changedText += turnToLetter(
            codeUpperLetterZ - (codeUpperLetterA - shiftedCharCode) + 1
          );
        } else {
          changedText += turnToLetter(shiftedCharCode);
        }
      } else if (charCode >= codeLowerLetterA && charCode <= codeLowerLetterZ) {
        if (shiftedCharCode < codeLowerLetterA) {
          changedText += turnToLetter(
            codeLowerLetterZ - (codeLowerLetterA - shiftedCharCode) + 1
          );
        } else {
          changedText += turnToLetter(shiftedCharCode);
        }
      } else {
        changedText += char;
      }
    } else {
      return text;
    }
  }
  return changedText;
};

// simple test
const test1 = caesarCipher('Hello World!', 7, 'encode');
console.log(test1); // Olssv Dvysk!
const test2 = caesarCipher(test1, 7, 'decode');
console.log(test2); // Hello World!
