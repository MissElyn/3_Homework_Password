// need to write a script that is linked to the index file. The class id is rGenerator located in the index file.//

// The js file will need to prompt the user to choose a password between 8-28 char.//


var gPassword=document.getElementById("gPassword");


gPassword.addEventListener("click", function(){
        //generate password//

        function generatePassword() {
            var length = 10,
                charset = "abcdefghijklmnopqrstuvwxyz",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
        
        }