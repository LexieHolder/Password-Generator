// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//defining variables for the password components
var specialcharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "}", "^", "_", "`", "{", "}", "|", "~"] 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var lowercase = ["a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m"]
var uppercase = ["A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P","Z","X","C","V","B","N","M"]

var response;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
