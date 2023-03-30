var SpecialChar = ["!", "#", "$", "%", "&", "+",":", "?", "@", ";", "=", "~", "-", "_"]
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var LowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
     var password = "";
     var passwordText = "";
    // creates user prompt to select password length
     var passwordLength = prompt("Choose how many characters you want your password to be! Password must be between 8-128 characters.");
     passwordLength = parseInt(passwordLength);
        if (passwordLength < 8){
            alert("Password must have at least 7 characters.");
            return ""
        }
        if (passwordLength > 128) {
            alert("Password can not have more than 128 characters.");
            return ""
        }

     var LowercaseOption = confirm("Would you like to include lowercase characters?");
        if (LowercaseOption) {
            passwordText += LowercaseAlphabet;
        }
     var UppercaseOption = confrim("Would you like to include Uppercase characters?");
        if (UppercaseOption){
            passwordText += UppercaseAlphabet;
        }
    var SpecialOption = confrim("Would you like to include Special characters?");
        if (SpecialOption){
            passwordText += SpecialChar;
        }
    var NumbersOption = confrim("Would you like to include Special characters?");
        if (NumbersOption){
            passwordText += Numbers;
        }
        
        for (var i = 0; i < passwordLength; i++) {
            password = passwordText[Math.floor(Math.random() * passwordText.length)]
        }
    }

    
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
  
    passwordText.value = password;
  
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);