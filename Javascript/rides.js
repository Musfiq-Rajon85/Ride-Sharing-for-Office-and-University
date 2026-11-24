
function validateForm(form) {

    var errorBox = form.querySelector(".error-message");
    errorBox.innerHTML = "";

    if (form.id == "rideSearchForm") {

        var rideID = document.getElementById("rideID").value;
        var passenger = document.getElementById("passenger").value;
        var driver = document.getElementById("driver").value;
        var status = document.getElementById("status").value;
        var date = document.getElementById("date").value;

        // Check Search Information
        if (rideID == "" && passenger == "" &&
            driver == "" && status == "all" && date == "") {

            errorBox.innerHTML = "Please enter Ride ID, Passenger Name, Driver Name or select a filter.";
            return false;
        }

        // Check Passenger Name
        if (passenger != "" && /[^A-Za-z ]/.test(passenger)) {

            errorBox.innerHTML = "Passenger Name can contain only letters and spaces.";
            return false;
        }

        // Check Driver Name
        if (driver != "" && /[^A-Za-z ]/.test(driver)) {

            errorBox.innerHTML = "Driver Name can contain only letters and spaces.";
            return false;
        }

        alert("Ride search submitted successfully!");
        return false;
    }

    return false;
}
