// Assignment Code
var generateBtn = document.querySelector("#generate");

let userLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let userUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let userNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let userSpec = ["/", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]


function generatePassword() {
  let userChar = window.prompt("How many characters?");

  let userNum = window.confirm("Would you like to include numbers?");

  let userUpper = window.confirm("Would you like to include Upper case letters?");

  let userLower = window.confirm("Would you like to include Lower case letters?");

  let userSpec = window.confirm("Would you like to include Special characters?")

  for (let i = 0; i < userLower.length; i++) {
    userLower = Math.floor(Math.random()) = array[i];

  }

  if (userNum === true) {
    for (let i = 0; i < userNum.length; i++) {
      userLower = Math.floor(Math.random()) = array[i];

    }

  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
