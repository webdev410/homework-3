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

// Prompts

function generatePassword() {

  
  var upperCaseArray = [
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
    "Z",
  ];
  var lowerCaseArray = [
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
    "z",
  ];
  var specialCharacterArray = ["!", "@", "#", "$", "%", "&", "*"];
  var numericCharacterArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  var allCharactersArray = [];
  var randomPassword = "";

  var passwordLength = prompt(
    "How many characters? Must be between 8 and 128 Characters."
  );



  if (!passwordLength) {
    return;
  }

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
    var passwordLength = prompt(
      "How many characters?",
      "Must be between 8 and 128 Characters."
    );
  }

 

  var upperCase = confirm("Do you want to include uppercase characters?");
  var lowerCase = confirm("Do you want to include lower case characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  // Conditions for the password. If they should be added to the array.

  if (lowerCase === true) {
    var allCharactersArray = allCharactersArray.concat(lowerCaseArray);

    console.log("ALL CHARACTERS", allCharactersArray);
  }

  if (upperCase === true) {
    var allCharactersArray = allCharactersArray.concat(upperCaseArray);

    console.log("ALL CHARACTERS", allCharactersArray);
  }

  if (numeric === true) {
    var allCharactersArray = allCharactersArray.concat(numericCharacterArray);

    console.log("ALL CHARACTERS", allCharactersArray);
  }

  if (special === true) {
    var allCharactersArray = allCharactersArray.concat(specialCharacterArray);

    console.log("ALL CHARACTERS", allCharactersArray);
  }

  if (
    special === false &&
    numeric === false &&
    upperCase === false &&
    lowerCase === false
  ) {
    alert("Error: You must select at least one character type");
  }


  // for loop to generate random password
for (var i=0; i < passwordLength; i++){
  var randomCharacter = allCharactersArray[Math.floor(Math.random() * allCharactersArray.length)]
 
  // password += randomCharacter
  randomPassword = randomPassword + randomCharacter
  
}
 if (passwordLength === randomPassword.length) {
  return randomPassword;
 }

}





// end of function

// Length of password between 8 and 128 characters
// Character Types Lowercase, Uppercase, numeric, and/or Special Characters
// Validate that at least one character type was selected
// Password matches selected criteria
// Display the password in the box
