var SpecialChar = ["!", "#", "$", "%", "&", "+",":", "?", "@", ";", "=", "~", "-", "_"]
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var LowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var password = [];
var passwordText = [];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    
}

// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
     
// creates user prompt to select password length
     var passwordLength = prompt("Choose how many characters you want your password to be! Password must be between 8-128 characters.");
//  Converts the string input to integers 
     passwordLength = parseInt(passwordLength);
//  Creates password min and max lengeths for total password
        if (passwordLength < 8){
            alert("Password must have at least 7 characters.");
            return ""
        }
        if (passwordLength > 128) {
            alert("Password can not have more than 128 characters.");
            return ""
        }
// Create confrim window for lowercase
    var LowercaseOption = confirm("Would you like to include lowercase characters?");
        if (LowercaseOption) {
            passwordText += LowercaseAlphabet;
        }
// Create confrim window for Uppercase
    var UppercaseOption = confirm("Would you like to include Uppercase characters?");
            if (UppercaseOption){
                passwordText += UppercaseAlphabet;
        }
// Create confrim window for Special characters
    var SpecialOption = confirm("Would you like to include Special characters?");
        if (SpecialOption){
            passwordText += SpecialChar;
        }
// Create confrim window for numbers
    var NumbersOption = confirm("Would you like to include Special characters?");
        if (NumbersOption){
            passwordText += Numbers;
        }
// This makes the user at selected at least one option
    if (!LowercaseOption && !UppercaseOption && !SpecialOption && !NumbersOption) {
        alert("Please choose a criteria");


// This is our for function that randomly chooses an input from all of our arrays
    for (var i = 0; i < passwordLength; i++) {
           var password = passwordText[Math.floor(Math.random() * passwordText.length)]
           
        }
        return password.join("");
    }
 
}


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

