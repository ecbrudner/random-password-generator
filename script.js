// Assignment code here

function generatePassword(){
  //prompt for password length 8-128
  var passwordLength= prompt("Enter password length (8-128 characters)", "Enter password length");
  if (passwordLength < 8){
    alert("Password must be at least 8 characters in length.");
    generatePassword();
  } else if (passwordLength > 128){
    alert("Password length can be no longer than 128 characters.");
    generatePassword();
  } else if (isNaN(passwordLength)){
    alert("Must enter a numeric value for password length");
    generatePassword();
  } else {
    alert("Great, thank you!");
  }

  //lowercase? t/f
  var lowercaseChar= confirm("Do you wish to include lowercase characters?");
  //uppercase? t/f
  var uppercaseChar= confirm("Do you wish to include uppercase characters?");
  //numeric? t/f
  var numericChar= confirm("Do you wish to include numeric characters?");
  //special char t/f
  var specialChar= confirm("Do you wish to include special characters?");

  if(!(lowercaseChar || uppercaseChar || numericChar || specialChar)){
    alert("Must include at least one type of character.");
    generatePassword();
  }

  //create pw character bank based on answers
  var characterBank= [];

  if (lowercaseChar){
    characterBank= characterBank.concat(['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z']);
  } 
  
  if (uppercaseChar){
    characterBank= characterBank.concat(['A','B','C','D',
    'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
    'V','W','X','Y','Z']);
  }

  if (numericChar){
    characterBank= characterBank.concat(['0','1','2','3','4','5','6','7','8','9']);
  }

  if (specialChar){
    characterBank= characterBank.concat(['!','"','#','$','%','&',')','*','+','-',
    '.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~']);
  }

  console.log(characterBank);
  
  //generate random pw w loop for length
  var randomPassword= " ";
  for (var i = 0; i < passwordLength; i++){
    randomPassword= randomPassword + characterBank[Math.floor(Math.random()*characterBank.length)];
  }

  //return pw
  return randomPassword;
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
