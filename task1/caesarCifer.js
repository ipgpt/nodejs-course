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

const encode = (char) => {
  if (char.charCodeAt() >= codeUpperLetterA && 
  char.charCodeAt() <= codeUpperLetterZ) {
    if (char.charCodeAt() === codeUpperLetterX) {
      return String.fromCharCode(codeUpperLetterA);
    } else if (char.charCodeAt() === codeUpperLetterY) {
      return String.fromCharCode(codeUpperLetterB);
    } else if (char.charCodeAt() === codeUpperLetterZ) {
      return String.fromCharCode(codeUpperLetterC);
    } else {
      return String.fromCharCode(char.charCodeAt() + shiftNumber);
    }
  } else if (char.charCodeAt() >= codeLowerLetterA && 
  char.charCodeAt() <= codeLowerLetterZ) {
    if (char.charCodeAt() === codeLowerLetterX) {
      return String.fromCharCode(codeLowerLetterA);
    } else if (char.charCodeAt() === codeLowerLetterY) {
      return String.fromCharCode(codeLowerLetterB);
    } else if (char.charCodeAt() === codeLowerLetterZ) {
      return String.fromCharCode(codeLowerLetterC);
    } else {
      return String.fromCharCode(char.charCodeAt() + shiftNumber);
    }
  } else {
    return char;
  }
};

const decode = (char) => {
  if (char.charCodeAt() >= codeUpperLetterA && 
  char.charCodeAt() <= codeUpperLetterZ) {
    if (char.charCodeAt() === codeUpperLetterA) {
      return String.fromCharCode(codeUpperLetterX);
    } else if (char.charCodeAt() === codeUpperLetterB) {
      return String.fromCharCode(codeUpperLetterY);
    } else if (char.charCodeAt() === codeUpperLetterC) {
      return String.fromCharCode(codeUpperLetterZ);
    } else {
      return String.fromCharCode(char.charCodeAt() - shiftNumber);
    }
  } else if (char.charCodeAt() >= codeLowerLetterA && 
  char.charCodeAt() <= codeLowerLetterZ) {
    if (char.charCodeAt() === codeLowerLetterA) {
      return String.fromCharCode(codeLowerLetterX);
    } else if (char.charCodeAt() === codeLowerLetterB) {
      return String.fromCharCode(codeLowerLetterY);
    } else if (char.charCodeAt() === codeLowerLetterC) {
      return String.fromCharCode(codeLowerLetterZ);
    } else {
      return String.fromCharCode(char.charCodeAt() - shiftNumber);
    }
  } else {
    return char;
  }
};

console.log(encode('Z')) // C
console.log(encode('W')) // Z
console.log(encode('y')) // b
console.log(encode('v')) // y
console.log(encode('!')) // !

console.log(decode('A')) // X
console.log(decode('D')) // A
console.log(decode('b')) // y
console.log(decode('e')) // b
console.log(decode('@')) // @
