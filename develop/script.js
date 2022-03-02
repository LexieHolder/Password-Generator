// Assignment code here



//defining variables for the password components
var specialcharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "}", "^", "_", "`", "{", "}", "|", "~"] 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var lowercase = ["a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m"]
var uppercase = ["A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P","Z","X","C","V","B","N","M"]

function generatePassword() {
    var passwordLength = window.prompt("Please select a length for your password between 8 and 128 characters below.");
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
