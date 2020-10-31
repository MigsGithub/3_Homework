// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// PW generate function

function generatePassword() {
    var pw = [];

    var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numbs = [1,2,3,4,5,6,7,8,9,0];
    var specialChars = ['~','`','!','#','$','%','*','+','=','-','/','|','<','>','?']; 

    var pwLength = prompt("How many characters will be in your password? expected 8-128");

    var pwCharsPass = parseInt(pwLength);

    if (pwLength > 128 || pwLength < 8 || !pwCharsPass ) {
      alert ("Remember, between 8-128 characters.");
      return;
    }
    else { alert ("Your new generated password will be "+pwCharsPass+" characters long")

    var finalpw = [];

  }

  // Prompts for specification pw

  var lowerCase = confirm("Will your password contain lower case characters? \rOK = Yes, Cancel = No");
  var upperCase = confirm("Will your password contain upper case charaters? \rOK = Yes, Cancel = No");
  var numeric = confirm("Will your password contain numeric characters? \rOK = Yes, Cancel = No");
  var special = confirm("Will your password contain special characters? \rOK = Yes, Cancel = No");

  if (!lowerCase && !upperCase && !numeric && !special){
    alert ("Choose atlease one");
    return;
  }

  // if functions to generate pw

  if (lowerCase) {
    for (var i=0; i<lower.length; i++){
      pw.push(lower[i]);
    }
  }

  if (upperCase) {
    for (var i=0; i<upper.length; i++){
      pw.push(upper[i]);
    }
  }

  if (numeric) {
    for (var i=0; i<numbs.length; i++){
      pw.push(numbs[i]);
    }
  }
 
  if (special) {
    for (var i=0; i<specialChars.length; i++){
      pw.push(specialChars[i]);
    }
  }

  for (i=0 ; i<pwCharsPass;i++){
      var index = Math.floor(Math.random()*pw.length);

    finalpw = finalpw+pw[index];
  }
  
  //  Final Generated PW 

  var passwordText = document.querySelector("#password");

  passwordText.value = finalpw;

}



