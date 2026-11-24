
function validateForm() {

    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var organization = document.getElementById("organization").value;
    var role = document.getElementById("role").value;

    // Get the place where we show the error message
    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    // Check full name
    if (name == "" || name == "Your Name") {
        errorBox.innerHTML = "Please enter your full name.";
        return false;
    }

    if (/[^A-Za-z ]/.test(name)) {
       errorBox.innerHTML = "Name can contain only letters and spaces.";
       return false;
 }

    // Check email field
    if (email == "" || email == "yourname@example.com") {
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

    // Check organization
    if (organization == "") {
        errorBox.innerHTML = "Please enter your office or university name.";
        return false;
    }

    // Check role
    if (role == "") {
        errorBox.innerHTML = "Please select your account role.";
        return false;
    }

   
    alert("Profile updated successfully!");
    return false;
}
