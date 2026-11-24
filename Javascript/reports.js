function validateForm(form) {

    var errorBox = form.querySelector(".error-message");
    errorBox.innerHTML = "";

    if (form.id == "reportSearchForm") {

        var reportID = document.getElementById("reportID").value;
        var reportDate = document.getElementById("reportDate").value;
        var reportType = document.getElementById("reportType").value;
        var reportStatus = document.getElementById("reportStatus").value;

        if (reportID == "" && reportDate == "" && reportType == "all" && reportStatus == "all") {
            errorBox.innerHTML = "Please enter Report ID, select a Date, or choose a Report Type or Status.";
            return false;
        }

        alert("Report search submitted successfully!");
        return false;
    }

    if (form.id == "generateReportForm") {

        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        var remarks = document.getElementById("remarks").value;

        if (startDate == "") {
            errorBox.innerHTML = "Please select the Start Date.";
            return false;
        }

        if (endDate == "") {
            errorBox.innerHTML = "Please select the End Date.";
            return false;
        }

        if (new Date(endDate) < new Date(startDate)) {
            errorBox.innerHTML = "End Date cannot be earlier than Start Date.";
            return false;
        }

        if (remarks != "" && remarks.length < 3) {
            errorBox.innerHTML = "Admin Remarks must contain at least 3 characters.";
            return false;
        }

        alert("Report generated successfully!");
        return false;
    }

    return false;
}
