let allLowers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
let allUppers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
let allNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let allSpecials = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "~"
];
let passwordLength = document.getElementById("passwordLength");

let confirmLower = document.getElementById("confirmLower");

let confirmUpper = document.getElementById("confirmUpper");

let confirmNumeric = document.getElementById("confirmNumeric");

let confirmSpecial = document.getElementById("confirmSpecial");

let userSelections = document.getElementById("userSelections");

function lengthError() {
  console.log(passwordLength.value);

  if (
    passwordLength.value < 8 ||
    passwordLength.value > 128 ||
    isNaN(passwordLength.value)
  ) {
    alert("Error: Password must have between 8 and 128 characters.");
  }
}

document
  .getElementById("generatePassword")
  .addEventListener("click", lengthError);
