
function validateForm() {

    var currentPassword = document.getElementById("current-password").value;
    var newPassword = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    if (currentPassword == "") {
        errorBox.innerHTML = "Please enter your current password.";
        return false;
    }

    if (newPassword == "") {
        errorBox.innerHTML = "Please enter your new password.";
        return false;
    }

    if (confirmPassword == "") {
        errorBox.innerHTML = "Please confirm your new password.";
        return false;
    }

    
    if (newPassword.length < 8) {
        errorBox.innerHTML = "Password must be at least 8 characters.";
        return false;
    }

    if (/[A-Z]/.test(newPassword) == false) {
        errorBox.innerHTML = "Password must have at least one capital letter (A-Z).";
        return false;
    }

    if (/[a-z]/.test(newPassword) == false) {
        errorBox.innerHTML = "Password must have at least one small letter (a-z).";
        return false;
    }

    if (/[0-9]/.test(newPassword) == false) {
        errorBox.innerHTML = "Password must have at least one number (0-9).";
        return false;
    }

    if (/[^A-Za-z0-9]/.test(newPassword) == false) {
        errorBox.innerHTML = "Password must have at least one special character (@, #, $, ! etc).";
        return false;
    }

    if (newPassword == currentPassword) {
        errorBox.innerHTML = "New password must be different from current password.";
        return false;
    }

    if (newPassword != confirmPassword) {
        errorBox.innerHTML = "New Password and Confirm Password do not match.";
        return false;
    }

    alert("Password changed successfully!");
    return true;
}
