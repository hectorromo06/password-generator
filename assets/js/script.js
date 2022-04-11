// Assignment code here
// Will pull characters from the following arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "_"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Prompts user for password criteria
function passwordOptions () {
  // Prompts user for password length
  var prom = prompt("How long should the password be?");
  if (prom === null) {
    return;
  } else {
    var length = parseInt(prom);
  
    // Validates password is between 8 and 128 characters
    if (length < 8 || length > 128) {
      alert("Length must be between 8 and 128 characters long");
      return null;
    }
  
    // Prompts for user for password criteria
    var upperConfirmed = confirm("Do you want your password to include uppercase characters?");
    var lowerConfirmed = confirm("Do you want your password to include lowercase characters?");
    var specialConfirmed = confirm("Do you want your password to include special characters?");
    var numericConfirmed = confirm("Do you want your password to include numeric characters?");
  
    // Validates that one of the criteria was selected
  
    // If none were selected lets user know to please select one criteria
    // Else creates the object with the boolean confirmations and length
    if (upperConfirmed !== true && lowerConfirmed !== true && specialConfirmed !== true && numericConfirmed !== true ) {
      alert("Please select at least one criteria for password");
      return null;
    } else {
      var passwordOptionsObj = {
        length: length,
        upperConfirmed: upperConfirmed,
        lowerConfirmed: lowerConfirmed,
        specialConfirmed: specialConfirmed,
        numericConfirmed: numericConfirmed
      };
      return passwordOptionsObj;
    }
  }
}

// Generates password
function generatePassword() {
  // Create two empty arrays and a vaiable for the object created in passwordOptions function
  var final = [];
  var possible = [];
  var choices = passwordOptions();

  // Creates possible characters array
  if (choices.upperConfirmed) {
    possible = possible.concat(uppercase);
  }
  if (choices.lowerConfirmed) {
    possible = possible.concat(lowercase);
  }
  if (choices.specialConfirmed) {
    possible = possible.concat(specialChar);
  }
  if (choices.numericConfirmed) {
    possible = possible.concat(numeric);
  }

  // Selects random characters from the possible characters array to be pushed onto empty array for final password
  for (var i = 0; i < choices.length; i++) {
    var pickPossible = possible[Math.floor(Math.random() * possible.length)];
    final.push(pickPossible);
  }

  // Returns a single string for the password from the final array
  return final.join('');
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
