
function validateForm(form) {

    var errorBox = form.querySelector(".error-message");
    errorBox.innerHTML = "";

    // Search and Filter Users Form
    if (form.id == "userSearchForm") {

        var userID = document.getElementById("userID").value;
        var userName = document.getElementById("userName").value;
        var email = document.getElementById("email").value;
        var role = document.getElementById("role").value;
        var status = document.getElementById("status").value;

        // Check Search Information
        if (userID == "" && userName == "" && email == ""
            && role == "all" && status == "all") {

            errorBox.innerHTML = "Please enter User ID, User Name, Email, or select a filter.";
            return false;
        }

        // Check User Name
        if (userName != "" && /[^A-Za-z ]/.test(userName)) {

            errorBox.innerHTML = "User Name can contain only letters and spaces.";
            return false;
        }

        // Check Email
        if (email != "" &&
            (email.indexOf("@") == -1 || email.indexOf(".") == -1)) {

            errorBox.innerHTML = "Email is not valid (it needs @ and .).";
            return false;
        }

        alert("User search submitted successfully!");
        return false;
    }

    // Manage User Account Form
    if (form.id == "userUpdateForm") {

        var manageID = document.getElementById("manageID").value;
        var remarks = document.getElementById("remarks").value;

        // Check User ID
        if (manageID == "") {

            errorBox.innerHTML = "Please enter the User ID.";
            return false;
        }

        // Check Admin Remarks
        if (remarks != "" && remarks.length < 3) {

            errorBox.innerHTML = "Admin Remarks must contain at least 3 characters.";
            return false;
        }

        alert("User account updated successfully!");
        return false;
    }

    return false;
}
