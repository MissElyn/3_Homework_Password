// need to write a script that is linked to the index file. The class id is rGenerator located in the index file.//

// The js file will need to randomly generate a password between 8-128 char.//


var charU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-=+[]{};#:@~,./<>?";
var charL  = "";
var num = "";
var sym = "";




var passwd=document.getElementById("passwd");
var gPasswd=document.getElementById("gPasswd");

gPasswd.addEventListener("click", function()

{       

  var length = 10;  
  var password = "";

            //for loop

        for (i=0; i < length; i++) {
          var c = Math.floor(Math.random()
          *charU.length);
          password += charU.charAt(c)
        }
        


passwd.value = password;
      
      
});