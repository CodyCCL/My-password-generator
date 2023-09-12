function generatePassword() {
  //Generate Prompt for length
  var checklength = prompt("how long would you like password?")
  var passwordLength = Number(checklength);
  //validate the length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  //Generate Prompts for the rest of the acceptance criteria
  var checkLower = confirm("would you like lowercase letters?")
  var checkUpper = confirm("would you like uppercase letters?")
  var checkSpecial = confirm("would you like special characters?")
  var checkNumbers = confirm("would you like numbers?")
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  //Generate Password
  var password = "";
  for (var i=0; i < passwordLength; i++) {
    
    if (checkLower) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (checkUpper) {
      password += characters.toUpperCase().charAt(Math.floor(Math.random() * characters.length));
    }
    if (checkNumbers) {
      password += characters.substring(48, 58).charAt(Math.floor(Math.random() * 10));
    }
    if (checkSpecial) {
      password += characters.substring(33, 47).charAt(Math.floor(Math.random() * 14));
    }
  }
  //validate the prompts
  if (!checkLower && !checkUpper && !checkNumbers && !checkSpecial) {
    alert("You must select at least one character type.");
    return;
  }

 return password

}
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

