// Assignment code here
// Will pull characters from the following arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "_"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Prompts user for password criteria
function passwordOptions () {
  // Prompts user for password length
  var length = parseInt(prompt("How long should the password be?"));

  // Validates password is between 8 and 128 characters
  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128 characters long");
    return null;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
