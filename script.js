// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// MY CODE

// FUNCTION START !!!!!!!!!!!!************

function generatePassword() {

    // Defining all possibilities
      var upperCaseArray =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var lowerCaseArray =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var specialCharacterArray = ["!", "@", "#", "$", "%", "&", "*"];
      var numericCharacterArray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // will combine elements depending on user input

      var allCharactersArray = [];

    // the final result variable
      var password = "";

    // start of prompts
      var passwordLength = prompt(
        "How many characters? Must be between 8 and 128 Characters."
      );

      // make sure the length is between 8 and 128 characters

      while (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please enter a number between 8 and 128.");
        var passwordLength = prompt(
          "How many characters? Must be between 8 and 128 Characters."
        );
      }
    // defining password requirements
        var lowerCase = confirm("Do you want to include lower case characters?");
        var upperCase = confirm("Do you want to include upper case characters?");
        var numeric = confirm("Do you want to include numeric characters?");
        var special = confirm("Do you want to include special characters?");

    // Combine allCharactersArray per confirm responses True = they should be added to the array.
      if (lowerCase === true) {
        var allCharactersArray = allCharactersArray.concat(lowerCaseArray);
        console.log(allCharactersArray);
      }

      if (upperCase === true) {
        var allCharactersArray = allCharactersArray.concat(upperCaseArray);
        console.log(allCharactersArray);
      }

      if (numeric === true) {
        var allCharactersArray = allCharactersArray.concat(numericCharacterArray);
        console.log(allCharactersArray);
      }

      if (special === true) {
        var allCharactersArray = allCharactersArray.concat(specialCharacterArray);
        console.log(allCharactersArray);
      }

   // for loop to generate random password
      for (var i = 0; i<passwordLength; i++) {
        var randomCharacter = allCharactersArray[Math.floor(Math.random()*allCharactersArray.length)];
        
        password = password + randomCharacter

      }

      console.log(password)
      return password;

      
      // if (passwordLength === password.length) {
      //   return password;
      // }

      // make sure at least one variable is chosen
      if (
        special === false &&
        numeric === false &&
        upperCase === false &&
        lowerCase === false
      ) {
        alert("Error: You must select at least one character type");
      }

      // Write password to text area



}





// end of function

// Length of password between 8 and 128 characters
// Character Types Lowercase, Uppercase, numeric, and/or Special Characters
// Validate that at least one character type was selected
// Password matches selected criteria
// Display the password in the box
