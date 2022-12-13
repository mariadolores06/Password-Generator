// Assignment Code
var generateBtn = document.querySelector("#generate");
// var password = document.querySelector("#password");
// var generatePassword = "";
var numberChars = "0123456789";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordLength = 0;
var password = "";
var generatePassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
window.alert("Password must contain: At least 8 characters, At least 1 number, At least 1 uppercase character, At least 1 special character");
});

function generatePassword() 
  // var password = "";

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Please enter the length you want your password to be (Must be between 8 and 128)");
  if (passwordLength === null) {
  return "Try Again";
  }
  else {
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please provide a valid length");
      return "Try Again";
    }
    else {

      window.confirm("Would you like to include uppercase letters in your password?");
      window.confirm("Would you like to include numbers in your password?");
      window.confirm("Would you like to include special characters in your password?");
    }
      if (lowerCaseChars === false && upperCaseChars === false && numberChars === false && specialChars === false) {
        alert("Password must contain: At least 8 characters, At least 1 number, At least 1 uppercase character, At least 1 special character")
        window.confirm("Would you like to include uppercase letters in your password?");
        window.confirm("Would you like to include numbers in your password?");
        window.confirm("Would you like to include special characters in your password?");
      }
    if (lowerCaseChars === true && password.passwordLength < passwordLength) {
      var lcc = password.lowerCaseChars[Math.floor(Math.random() *26)]
      generatePassword = generatePassword + lcc;
    }
    if (upperCaseChars === true && password.passwordLength < passwordLength) {
      var ucc = password.upperCaseChars[Math.floor(Math.random() *26)]
      generatePassword = generatePassword + ucc;
    }
    if (specialChars === true && password.passwordLength < passwordLength) {
      var sc = password.specialChars[Math.floor(Math.random() *32)]
      generatePassword = generatePassword + sc;
  }
  if (numberChars === true && password.passwordLength < passwordLength) {
    var nc = password.numberChars[Math.floor(Math.random() *10)]
    generatePassword = generatePassword + nc;
}

return generatePassword;

  


// generateBtn.addEventListener("click", function() {
//   window.confirm("Would you like to include lowercase letters in your password?");
//   if (lowerCaseChars = true ) {
//     password += lowerCaseChars;
