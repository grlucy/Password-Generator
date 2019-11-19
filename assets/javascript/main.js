// Variable declarations
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

let confirmLower = document.getElementById("confirmLower").checked;

let confirmUpper = document.getElementById("confirmUpper").checked;

let confirmNumeric = document.getElementById("confirmNumeric").checked;

let confirmSpecial = document.getElementById("confirmSpecial").checked;

let userSelections = document.getElementById("userSelections");

// Generate random password using if statements to control array concatenation
function createPassword() {
  // come back to this!!!
  if (confirmLower) {
    alert("confirmLower is checked");
  }
}

// Check whether user entered a number between 8 and 128 for password length; If not, error alert and prevent further action. If they did it correctly, proceed with generating a password.
function lengthError() {
  console.log(passwordLength.value);

  if (
    passwordLength.value < 8 ||
    passwordLength.value > 128 ||
    isNaN(passwordLength.value)
  ) {
    alert("Error: Password must have between 8 and 128 characters.");
  } else {
    createPassword();
  }
}

// Add event for user clicking "Generate Password" button
document
  .getElementById("generatePassword")
  .addEventListener("click", lengthError);
