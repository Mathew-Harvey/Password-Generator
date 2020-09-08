// Assignment Code

//------------------------------------------------------------------------------------
// Define function of generate button
//------------------------------------------------------------------------------------

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

//------------------------------------------------------------------------------------
// Write function to build password on button click
//------------------------------------------------------------------------------------

function writePassword() {

//------------------------------------------------------------------------------------
// Asking questions of user to define password characters and length. Answers are 
// validated and user is prompted to correct input if instructions are not followed
//------------------------------------------------------------------------------------

// ask user what length password they would like
passwordLength = prompt("How long would you like your password to be? Type a number between 8 and 128 ");
// change string input to a number
passwordLength = +passwordLength;
if (passwordLength >= 8 && passwordLength <= 128) {
  var length = passwordLength;
}
else prompt("Invalid input! Please enter a number between 8 and 128 to indicate your desired password length");

// ask user if they want to use lower case
letter = prompt ("Would you like to use lower case letters? Type 'y' or 'n' ");
if (letter === "y") {
  var lowerCaseInclude = true;
}
else if (letter === "n") {
  var lowerCaseInclude = false;
}
else prompt("Invalid input! Please type 'y' or 'n' to indicate if you would like to include lower case letters in your password");

// ask user if they want to use upper case
letter = prompt("Would you like to use upper case letters? Type 'y' or 'n' ");
if (letter === "y") {
  var upperCaseInclude = true;
}
else if (letter === "n") {
  var upperCaseInclude = false;
}
else prompt("Invalid input! Please type 'y' or 'n' to indicate if you would like to include upper case letters in your password");

// ask user if they want to use numbers
letter = prompt("Would you like to use numbers?  Type 'y' or 'n' ");
if (letter === "y") {
  var numberInclude = true;
}
else if (letter === "n") {
  numberInclude = false;
}
else prompt("Invalid input! Please type 'y' or 'n' to indicate if you would like to include numbers in your password");

// ask user if they want to use symbols
letter = prompt("Would you like to use symbols? Type 'y' or 'n' ");
if (letter === "y") {
  var symbolInclude = true;
}
else if (letter === "n") {
  var symbolInclude = false;
}
else prompt("Invalid input! Please type 'y' or 'n' to indicate if you would like to include symbols in your password");

//------------------------------------------------------------------------------------
// Generating random letters, numbers and symbols (values) - using ASCII character code 
// number identifier - http://www.asciitable.com. Values are only generated if user has 
// selected this option
//------------------------------------------------------------------------------------

if (lowerCaseInclude === true) {
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
}
if (lowerCaseInclude === true) {
  var randomLowercase = (getRandomLower());
}
if (upperCaseInclude === true) {
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
}
if (upperCaseInclude === true) {
  var randomUppercase = (getRandomUpper());
}
if (numberInclude === true) {
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
}
if (numberInclude === true) {
  var randomNumberToUse = (getRandomNumber());
}
if (symbolInclude === true) {
  function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}
if (symbolInclude === true);
  var randomSymbol = (getRandomSymbol());

//------------------------------------------------------------------------------------
// Concatenating 128 character password
//------------------------------------------------------------------------------------

var myPassword = "";

for (var i = 0; i < 128; i++) {

  if (lowerCaseInclude === true) {
    var randomLowercase = getRandomLower()
  }
  else {
    randomLowercase = ""
  }
  if (upperCaseInclude === true) {
    var randomUppercase = getRandomUpper()
  }
  else {
    randomUppercase = ""
  }
  if (numberInclude === true) {
    var randomNumber = getRandomNumber()
  }
  else {
    randomNumber = ""
  }
  if (symbolInclude === true) {
    var randomSymbol = getRandomSymbol()
  }
  else {
    randomSymbol = ""
  }

  var myPassword = myPassword + randomLowercase + randomUppercase + randomSymbol + randomNumber;
}

//------------------------------------------------------------------------------------
//Truncate password to desired length
//------------------------------------------------------------------------------------

var myPasswordAtLength = myPassword.substring(0, length);
console.log(myPasswordAtLength);

//------------------------------------------------------------------------------------
//Insert password string into html element - ID='password'
//------------------------------------------------------------------------------------

var finalPassword = document.getElementById("password");
finalPassword.textContent = myPasswordAtLength;
}