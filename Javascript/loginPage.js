
function validateForm() {

    // Get the values from the form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    // Check email field
    if (email == "") {
        errorBox.innerHTML = "Please enter your email.";
        return false;
    }

    // Check email format
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        errorBox.innerHTML = "Email is not valid (it needs @ and .).";
        return false;
    }

    // Check password field
    if (password == "") {
        errorBox.innerHTML = "Please enter your password.";
        return false;
    }

    // Check password length
    if (password.length < 7) {
        errorBox.innerHTML = "Password must be at least 7 characters.";
        return false;
    }

      if (/[A-Z]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one capital letter (A-Z).";
        return false;
    }
 
    if (/[a-z]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one small letter (a-z).";
        return false;
    }
 
    if (/[0-9]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one number (0-9).";
        return false;
    }
 
    if (/[^A-Za-z0-9]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one special character (@, #, $, ! etc).";
        return false;
    }

    // If all conditions are correct
    alert("Login successful!");
    return true;
}
