
function validateForm() {

    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var role = document.getElementById("role").value;
    var organization = document.getElementById("organization").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var terms = document.getElementById("terms").checked;

    // Get the place where we show the error message
    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    // Check full name
    if (name == "") {
        errorBox.innerHTML = "Please enter your full name.";
        return false;
    }

    if (/[^A-Za-z ]/.test(name)) {
       errorBox.innerHTML = "Name can contain only letters and spaces.";
       return false;
    }

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

    // Check phone number
    if (phone == "") {
        errorBox.innerHTML = "Please enter your phone number.";
        return false;
    }

    if (isNaN(phone) || phone.length != 11) {
        errorBox.innerHTML = "Phone number must be 11 digits.";
        return false;
    }

    // Check role
    if (role == "") {
        errorBox.innerHTML = "Please select your role.";
        return false;
    }

    // Check organization
    if (organization == "") {
        errorBox.innerHTML = "Please enter your office or university name.";
        return false;
    }

    // Check password field
    if (password == "") {
        errorBox.innerHTML = "Please enter your password.";
        return false;
    }

    // Password length
    if (password.length < 8) {
        errorBox.innerHTML = "Password must be at least 8 characters.";
        return false;
    }

    // Check capital letter
    if (/[A-Z]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one capital letter (A-Z).";
        return false;
    }

    // Check small letter
    if (/[a-z]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one small letter (a-z).";
        return false;
    }

    // Check number
    if (/[0-9]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one number (0-9).";
        return false;
    }

    // Check special character
    if (/[^A-Za-z0-9]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one special character (@, #, $, ! etc).";
        return false;
    }

    // Check confirm password
    if (confirmPassword == "") {
        errorBox.innerHTML = "Please confirm your password.";
        return false;
    }

    if (password != confirmPassword) {
        errorBox.innerHTML = "Password and Confirm Password do not match.";
        return false;
    }

    // Check terms and conditions
    if (terms == false) {
        errorBox.innerHTML = "You must agree to the Terms and Conditions.";
        return false;
    }

    alert("Registration successful!");
    return false;
}
