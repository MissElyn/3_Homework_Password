// need to write a script that is linked to the index file. The class id is rGenerator located in the index file.//

// The js file will need to randomly generate a password between 8-128 char.//



var charU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charL = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var numSt = num.toString()
var sym = "!@#$%^&*";
var allChar = "";

var passwd = document.getElementById("passwd");
var gPasswd = document.getElementById("gPasswd");
var passwdLength = document.getElementById("passwdLength");

var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var number = document.getElementById("number");
var symbol = document.getElementById("symbol");

gPasswd.addEventListener("click", function () {

  if (uppercase.checked) {
    allChar = allChar + charU;
    //console.log(allChar)

  }


  if (lowercase.checked) {
    allChar = allChar + charL
  }

  if (number.checked) {
    allChar = allChar + numSt
  }

  if (symbol.checked) {
    allChar = allChar + sym
  }


     // console.log(passwdLength.value);

    var length = passwdLength.value;

    var password = "";

    //for loop

    for (i = 0; i < length; i++) {
      var c = Math.floor(Math.random()
        * allChar.length);

     // console.log(allChar.length);
      password = password + allChar.charAt(c)
    }

    //console.log(password);

    passwd.value = password;


  });
//var duplicate = document.getElementById("duplicate");
  //duplicate.addEventListener("click", function(){})

  