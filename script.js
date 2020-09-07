// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var letter
  var passwordLength

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// user input

letter = prompt("Would you like to use lower case letters? Type y or n ")
if (letter === "y") {
  console.log("use lower case")
}
else {
  console.log("don't use lower case")
}
// ask user if use upper case
letter = prompt("Would you like to use upper case letters? Type y or n ")
if (letter === "y") {
  console.log("use upper case")
}
else {
  console.log("don't use upper case")
}
// ask user if use special case
letter = prompt("Would you like to use symbols? Type y or n ")
if (letter === "y") {
  console.log("use symbols")
}
else {
  console.log("don't use symbols")
}
// ask user if use numbers
letter = prompt("Would you like to use numbers?  Type y or n ")
if (letter === "y") {
  console.log("use numbers")
}
else {
  console.log("don't use numbers")
}
// ask user length
passwordLength = prompt("How long would you like your password to be? Type a number between 8 and 128 ")
passwordLength = +passwordLength


console.log(passwordLength)


//create random generator

function generatePassword(randomUpperToUse, randomLowerToUse, randomNumberToUse, randomSymbolToUse, passwordLength) {

  // Generator functions - using ASCII character code number identifier - http://www.asciitable.com
  for (var i = 0; i < 6; i++) {



    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    var randomLowerToUse = (getRandomLower());



    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

    }
    var randomUpperToUse = (getRandomUpper());

    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

    }
    var randomNumberToUse = (getRandomNumber());


    function getRandomSymbol() {
      const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      return symbols[Math.floor(Math.random() * symbols.length)]

    }
    var randomSymbolToUse = (getRandomSymbol());


    var randomAll =
      randomLowerToUse +
      randomNumberToUse +
      randomSymbolToUse +
      randomUpperToUse



    console.log(randomAll)

  }


}