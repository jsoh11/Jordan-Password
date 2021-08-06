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

  // for conditionals need to make sure what we are checking is relevant to the data type we're comparing to
  // our goal is IF a user said yes to a confirm prompt that the contents of that array are added/appended/pushed to our empty userChar array

  if (isNum) {
    // if this evaluates to true then we need to add the contents of the num array userNum to the userChar array
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


  for (let i = 0; i < chosenPassword; i++) {
    let randomNumber = Math.floor(Math.random() * userChar.length);
    let newPass = [];
    newPass.push(userChar[randomNumber]);
    console.log(newPass);
    
  }
  
}




  // after we've added all of the new characters that the user wanted into the the empty array, we need to start looping and grabbing characters from that array based on a random index
  // each character will be grabbed one at a time and we need to store these as a string as the final password
  // you can use concat here as well so we concat the new character on the variable each time

  //  dont forget we are indexing through the new array we just made and we need to store the resultant concatenation in a new variable
  // for (let i = 0; i < passwordLength; i++) {





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
