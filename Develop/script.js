// Assignment Code
var generateBtn = document.querySelector("#generate");


let userChar = [];

let userNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let userUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let userLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


let userSpec = ["/", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];




function generatePassword() {
  chosenPassword = parseInt(window.prompt("How many characters?"));

  console.log(chosenPassword)
  let isNum = window.confirm("Would you like to include numbers?");
  // console log anytime you dont know what is being stored in a variable
  // ie. isNum
  console.log(isNum)
  let isUpper = window.confirm("Would you like to include Uppercase letters?");
  console.log(isUpper)
  let isLower = window.confirm("Would you like to include Lowercase letters?");
  console.log(isLower)
  let isSpec = window.confirm("Would you like to include Special characters?");
  console.log(isSpec)



  if (isNum) {

    userChar = userChar.concat(userNum)
    console.log("new array", userChar)

  }

  if (isUpper) {

    userChar = userChar.concat(userUpper)
    console.log("new array ", userChar)
  }

  if (isLower) {
    userChar = userChar.concat(userLower)
    console.log("new array ", userChar)

  }

  if (isSpec) {
    userChar = userChar.concat(userSpec)
    console.log("new array ", userChar)

  }
  let passwordPrint = [];

  for (let i = 0; i < chosenPassword; i++) {
    console.log(Math.floor(Math.random() * userChar.length));
    let randomNumber = (Math.floor(Math.random() * userChar.length));
    let generatedIndex = userChar[randomNumber]
    console.log(generatedIndex)
    passwordPrint.push(generatedIndex)
  }
  console.log(passwordPrint)
  return passwordPrint.join("");
  
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
