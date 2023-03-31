var SpecialChar = "!#$%&+:?@;=~-_";
var Numbers = '0123456789';
var LowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var UppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var userPassword = [];
var finalPassword = [];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password.join("");

}

// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

    // creates user prompt to select password length
    var passwordLength = prompt("Choose how many characters you want your password to be! Password must be between 8-128 characters.");
    //  Converts the string input to integers 

    //  Creates password min and max lengeths for total password
    if (passwordLength < 8) {
        alert("Password must have at least 8 characters.");
        return ""
    }
    if (passwordLength > 128) {
        alert("Password can not have more than 128 characters.");
        return ""
    }

    // Create confrim window for lowercase
    var LowercaseOption = confirm("Would you like to include lowercase characters?");
    if (LowercaseOption) {
       userPassword.push(...LowercaseAlphabet);
    }
    console.log("lowercase option",userPassword);
    
    // Create confrim window for Uppercase
    var UppercaseOption = confirm("Would you like to include Uppercase characters?");
    if (UppercaseOption) {
       userPassword.push(...UppercaseAlphabet);
    }
    console.log("uppercase option",userPassword);
    
    // Create confrim window for Special characters
    var SpecialOption = confirm("Would you like to include Special characters?");
    if (SpecialOption) {
       userPassword.push(...SpecialChar);
    }
    console.log("special option",userPassword);
    
    // Create confrim window for numbers
    var NumbersOption = confirm("Would you like to include Special characters?");
    if (NumbersOption) {
       userPassword.push(...Numbers);
    }
    console.log("number option",userPassword);
    
    // This makes the user at selected at least one option
    if (!LowercaseOption && !UppercaseOption && !SpecialOption && !NumbersOption) {
        alert("Please choose a criteria");
    }
    
    // This is our for function that randomly chooses an input from all of our arrays
    for (var i = 0; i < passwordLength; i++) {
        finalPassword.push(userPassword[Math.floor(Math.random() * userPassword.length)])
        console.log('final password', finalPassword)
    }
    // Return final output to be posted on page
    return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

