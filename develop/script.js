// Assignment code here



//defining variables for the password components
var specialcharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "}", "^", "_", "`", "{", "}", "|", "~"] 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var lowercase = ["a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m"]
var uppercase = ["A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P","Z","X","C","V","B","N","M"]


//ask user to select options for their password criteria
var generatePassword = function() {
    var passwordLength = window.prompt("Please select a length for your password between 8 and 128 characters below.");
        if (passwordLength === "" || passwordLength > 128 || passwordLength < 8) {
            window.alert("A password length between 8 and 128 must be selected. Please try again.");
            return generatePassword();
        }
        else {

    var specialcharacterSet = window.confirm("Would you like to include special characters in your password?");
    var numbersSet = window.confirm("Would you like to include numbers in your password?");
    var lowercaseSet = window.confirm("Would you like to include lowercase numbers in your password?");
    var uppercaseSet = window.confirm("Would you like to include uppercase numbers in your password?");
        
        };
        if (!specialcharacterSet && !numbersSet && !lowercaseSet && !uppercaseSet) {
            window.alert("At least one option for character type must be selected. Please try again.");
            return generatePassword();
        } else if (!specialcharacterSet && !numbersSet && !lowercaseSet && uppercaseSet) {
            response = uppercase;
        } else if (!specialcharacterSet && !numbersSet && lowercaseSet && uppercaseSet);
            
        var password = []; 

            for(var i = 0; i < passwordLength; i++) {
                var selection = response[Math.floor(Math.random() * response.length)]; 
                password.push(selection); 
            }

            var finalPass = password.join(""); 
            UserInput; 
            return finalPass; 
       

     
};






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
