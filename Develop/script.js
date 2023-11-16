// Assignment code here
function generatePassword(){
  //prompt for password length 8-128
  var passwordLength= prompt("Enter password length (8-128 characters)", "Enter password length");
  if (passwordLength.length < 8){
    alert("Password must be at least 8 characters in length.");
  } else if (passwordLength.length > 128){
    alert("Password length can be no longer than 128 characters.");
  } else {
    alert("Great, thank you!");
  }
  //lowercase? t/f
  //uppercase? t/f
  //numeric? t/f
  //special char t/f
  //create pw character bank based on answers
  //generate random pw w loop for length
  //display pw
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
