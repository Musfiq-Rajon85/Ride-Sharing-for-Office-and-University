function validateForm(form) {

    var errorBox = form.querySelector(".error-message");
    errorBox.innerHTML = "";

    if (form.id == "complaintSearchForm") {

        var complaintID = document.getElementById("complaintID").value;
        var userName = document.getElementById("userName").value;
        var status = document.getElementById("status").value;
        var type = document.getElementById("type").value;

        if (complaintID == "" && userName == "" && status == "all" && type == "all") {
            errorBox.innerHTML = "Please enter Complaint ID or User Name, or select a filter.";
            return false;
        }

        if (userName != "" && /[^A-Za-z ]/.test(userName)) {
            errorBox.innerHTML = "User Name can contain only letters and spaces.";
            return false;
        }

        alert("Complaint search submitted successfully!");
        return false;
    }

    if (form.id == "complaintUpdateForm") {

        var manageID = document.getElementById("manageID").value;
        var remarks = document.getElementById("remarks").value;

        if (manageID == "") {
            errorBox.innerHTML = "Please enter the Complaint ID.";
            return false;
        }

        if (remarks != "" && remarks.length < 3) {
            errorBox.innerHTML = "Admin Remarks must contain at least 3 characters.";
            return false;
        }

        alert("Complaint status updated successfully!");
        return false;
    }

    return false;
}
